import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import PayPalCheckout from "./PayPalCheckout";
import { HeroSection } from "../components";

function Donate() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [donationAmount, setDonationAmount] = useState(10);

  const currencyOptions = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "MWK"]; // Add "MWK" for Malawi Kwacha

  return (
    <>
      <HeroSection
        Caption={'Support Our Cause'}
        HeroImage={'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
      />
      <Container className="p-xxl-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="mb-4">Make a Difference with Your Donation</h2>
            <p>
              Your contribution can change lives and support our mission to bring positive
              change to the world. We rely on generous donors like you to help us make a
              lasting impact.
            </p>
            <p>
              Together, we can provide food, education, and healthcare to those in need,
              protect the environment, and build a better future for all.
            </p>
            <p>
              Every donation, no matter the amount, makes a significant difference. Join us
              in our journey to create a better world.
            </p>
            <div className="text-center mt-5">
              <Form className="d-flex align-items-center">
                <Form.Control as="select" className="w-auto mr-2" value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                  {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control type="number" min="1" step="1" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} />
              </Form>
                <PayPalCheckout currencyCode={selectedCurrency} value={donationAmount} />
            </div>
            <p className="mt-4">
              Thank you for your support and for being a part of our mission. If you have
              any questions or need assistance, please don't hesitate to{" "}
              contact us.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Donate;
