import React from "react";
import Alert from "react-bootstrap/Alert";

function PaymentSuccess() {
  return (
    <Alert variant="success">
      <Alert.Heading>Payment Successful</Alert.Heading>
      <p>Your payment was successful. Thank you for your purchase!</p>
    </Alert>
  );
}

export default PaymentSuccess;
