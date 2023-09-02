import React from 'react';
import { Card } from 'react-bootstrap'; // Import the component you want to display



const PartnerCard = ({ partner }) => (
  <Card>
    <Card.Img variant="top" src={partner.image} alt={partner.name} />
    <Card.Body>
      <Card.Title>{partner.name}</Card.Title>
      <Card.Text>{partner.description}</Card.Text>
      <a href={partner.website} className="btn btn-primary">
        Visit Website
      </a>
    </Card.Body>
  </Card>
);

export default PartnerCard;