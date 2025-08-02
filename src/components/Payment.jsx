import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = () => {
    return (
        <div className='w-96'>
             <Elements stripe={stripePromise}>
     <CheckOutForm/>
    </Elements>
        </div>
    );
};

export default Payment;