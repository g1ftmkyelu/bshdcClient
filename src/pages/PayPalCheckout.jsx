import React, { useRef, useEffect, useState } from "react";
import PaymentFailure from "./PaymentFailiure";
import PaymentSuccess from "./PaymentSuccess";

function PayPalCheckout({ currencyCode, value }) {
  const paypal = useRef();
  const [transactionStatus, setTransactionStatus] = useState(null);
  const hasEffectRun = useRef(false);

  useEffect(() => {
    if (!hasEffectRun.current) {
      window.paypal
        .Buttons({

          onApprove: async (data, actions) => {
            const order = await actions.order.capture();

            console.log("success", order);
            setTransactionStatus("success");
          },
          onError: (err) => {
            console.log(err);
            setTransactionStatus("failure");
          },
        })
        .render(paypal.current);
      hasEffectRun.current = true; // Set the flag to prevent useEffect from running again
    }
  }, []); // Specify currencyCode and value as dependencies

  if (transactionStatus === "success") {
    return <PaymentSuccess />;
  }

  if (transactionStatus === "failure") {
    return <PaymentFailure />;
  }

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default PayPalCheckout;
