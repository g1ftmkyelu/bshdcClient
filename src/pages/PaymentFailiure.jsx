import React from "react";
import Alert from "react-bootstrap/Alert";

function PaymentFailure() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Payment Failed</Alert.Heading>
      <p>Sorry, there was an issue processing your payment. Please try again later.</p>
    </Alert>
  );
}

export default PaymentFailure;
