import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Mypercels = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const { data: percels = [], refetch} = useQuery({
    queryKey: ["mypercels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`/percels?senderEmail=${user.email}`);
      return res.data;
    },
  });

  const handlePercelsDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/percels/${id}`).then((res) => {
          console.log(res.data);
        if(res.data.deletedCount ){
          refetch()
          Swal.fire({
          title: "Deleted!",
          text: "Your percles request has been deleted.",
          icon: "success"
        });
        }
        });        
      }
    });
  };

  const handlePayment = async (percel)=>{
const paymentInfo={
  cost:percel.cost ,
  percelId : percel._id,
  senderEmail: percel.senderEmail,
  parcelName: percel.parcelName,
}

const res = await axios.post('/create-checkout-session',paymentInfo);
console.log("server response ->", res.data);
window.location.assign(res.data.url);
}



  return (
    <div>
      my percels : {percels.length}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {percels.map((percel, index) => (
              <tr key={percel._id}>
                <th>{index + 1}</th>
                <td>{percel.parcelName}</td>
                <td>{percel.cost}</td>
                <td>{
                percel.paymentStatus=== 'paid'?
                <span className="text-green-500">paid</span>
                :
                <button onClick={()=>handlePayment(percel)}className="btn btn-sm bg-amber-100 text-black">pay</button>
                }</td>
                <td>{percel.deliveryStatus}</td>
                <td className="gap-5 flex">
                  <button className="btn btn-square">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handlePercelsDelete(percel._id)}
                    className="btn btn-square"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mypercels;
