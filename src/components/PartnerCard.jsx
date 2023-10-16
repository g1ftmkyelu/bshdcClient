import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { FaChevronCircleRight } from 'react-icons/fa';

const PartnerCard = ({ partner }) => {
  const [showModal, setShowModal] = useState(false);

  // Truncate the description to 170 characters
  const truncatedDescription = partner.description.slice(0, 170);
  const fullDescription = partner.description;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const renderDescription = (text) => {
    return { __html: text };
  };

  return (
    <Card>
      <Card.Img
        variant="top"
        src={partner.image}
        alt={partner.name}
        style={{ width: '200px', height: '200px', margin: 'auto' }}
        loading='lazy'
      />
      <Card.Body>
        <Card.Title>{partner.name}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {/* Render the truncated description */}
          <div dangerouslySetInnerHTML={renderDescription(truncatedDescription)} />
          {partner.description.length > 170 && (
            <span>
              {showModal ? (
                <span>
                  {/* Full description is shown in the modal */}
                  <Button onClick={toggleModal} variant="link">
                    Show Less
                  </Button>
                </span>
              ) : (
                <span>
                  {/* Render a "Show More" button to open the modal */}
                  <Button onClick={toggleModal} variant="link" style={{ textDecoration: 'none' }} >
                    Show More <FaChevronCircleRight />
                  </Button>
                </span>
              )}
            </span>
          )}
        </Card.Text>
        <a href={partner.website} className="btn btn-primary">
          Visit Website
        </a>
      </Card.Body>

      {/* Modal to display the full description */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{partner.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'justify' }}>
          {/* Full description shown only in the modal */}
          <div dangerouslySetInnerHTML={renderDescription(fullDescription)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>

  );
};

export default PartnerCard;
