import React from 'react';
import {loadStripe} from "@stripe/stripe-js";

import {Elements} from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51LWjebFwK9KH1axhmkcWrm9rqWgkusYXyQbwNuSo5YKxDgIpcqVOIgqvbjneJyEKrnQGWQYLAV2uoE4cJZrdKc8I00Y5gka81y";
const stripe = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <div>
            <Elements stripe={stripe}>
               <PaymentForm/>
            </Elements>
        </div>
    );
};

export default StripeContainer;