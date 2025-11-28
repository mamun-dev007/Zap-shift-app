import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';

const PaymentHistory = () => {
    const {user} = useAuth();
    const axios = useAxios()
    const {data:payments=[]} = useQuery({
        queryKey:['payments', user.email],
        queryFn: async ()=>{
            const res = await axios.get(`/payments?emai=${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
        <h1 class="text-2xl">payment PaymentHistory : {payments.length}</h1>
            
        </div>
    );
};

export default PaymentHistory;