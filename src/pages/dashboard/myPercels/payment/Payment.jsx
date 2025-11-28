import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../../../hooks/useAxios';

const Payment = () => {

    const {percelId}= useParams();
    const axios = useAxios()
const {isLoading, data: percel}= useQuery({
    queryKey:["percels",percelId],
    queryFn: async ()=>{
        const res = await axios.get(`/percels/${percelId}`);
        return res.data;
    }
})

const handlePayment = async ()=>{
const paymentInfo={
  cost:percel.cost ,
  percelId : percel._id,
  senderEmail: percel.senderEmail,
  parcelName: percel.parcelName,
}

const res = await axios.post('/create-checkout-session',paymentInfo);
console.log(res.data);
 window.location.href = res.data;
}

if(isLoading){
  return  <span className="loading loading-bars loading-xl"></span>
}

  if (!percel) {  
    return <p>No parcel found.</p>;
  }
  
    return (
        <div>
           <h1>this is payment ${percel.cost } system {percel.parcelName}</h1>
           <button onClick={handlePayment} className="btn btn-info text-amber-50">pay</button>
        </div>
    );
};

export default Payment;