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
if(isLoading){
  return  <span className="loading loading-bars loading-xl"></span>
}

  if (!percel) {
    return <p>No parcel found.</p>;
  }
  
    return (
        <div>
           <h1>this is payment system {percel.parcelName}</h1>
           <button className="btn btn-info text-amber-50">pay</button>
        </div>
    );
};

export default Payment;