import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxios from '../../../../hooks/useAxios';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] =useState({});
const sessionId = searchParams.get("session_id");
const axios = useAxios();

    useEffect(() => {
  if (sessionId) {
    axios.patch(`/payment-success?sessionId=${sessionId}`)
      .then(res => {
        console.log(res.data);
        setPaymentInfo({
          transactionId:res.data.transactionId,
          trackingId:res.data.trackingId,
        })
      });
  }
}, [sessionId, axios]);
    return (
        <div>
        
            <h1>payment status</h1>
          <p>Your transactionId: {paymentInfo.transactionId}</p>
          <p>Your trackingId: {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;