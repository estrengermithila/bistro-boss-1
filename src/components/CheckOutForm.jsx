import React, { useContext, useEffect, useState } from 'react';

import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import useAxiosSecure from './useAxiosSecure';
import useCart from './useCart';
import { AuthContext } from '../AuthProvider';
import useMenu from './useMenu';
import Swal from 'sweetalert2';


const CheckOutForm = () => {
    const {user} =useContext(AuthContext)
    const [transactionId,setTransactionId] = useState('')
    const [clientSecret,setClientSecret] = useState("")
    const axiosSecure = useAxiosSecure()
    const [cart,refetch] = useCart()
   
    const totalPrice = cart.reduce((total,item) =>total+item.price,0)
    useEffect(() =>{
      if(totalPrice>0){
          axiosSecure.post('/create-checkOut',{
            price:totalPrice
        })
        .then(res=>{
            setClientSecret(res.data.clientSecret)
        })
      }
    },[axiosSecure,totalPrice])
    const [error,setError]=useState('')
     const stripe = useStripe();
  const elements = useElements();

    const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
      const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
     if (error) {
        console.log('payment error',error)
      setError(error.message)
    } else {
        console.log('payment method',paymentMethod)
      setError('')
    }
      const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
        card:card,
        billing_details:{
            email:user?.email|| 'anonymous',
            name:user?.displayName||'anonymous'

        }
    }
  })
   if(confirmError){
    console.log('confirm error')
  }
  else{
            console.log('payment intent',paymentIntent)

            if(paymentIntent.status==="succeeded"){
                setTransactionId(paymentIntent.id)
                const payment ={
                    email:user.email,
                    price:totalPrice,
                    date:new Date(),
                    cartIds:cart.map(item=>item._id),
                    menuIds:cart.map(item=>item.menuId),
                    status:"Pending",
                    transactionId:paymentIntent.id,

                }
                const res=await axiosSecure.post('/payments',payment)
                console.log('payment saved',res.data)
                refetch()
                if(res.data?.result?.insertedId){
   Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
}); 
                }
            }


  }
  };


 
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-600'>{error}</p>
      {
        transactionId && <p className='text-green-500'>id:{transactionId}</p>
      }
    </form>
        </div>
    );
};

export default CheckOutForm;