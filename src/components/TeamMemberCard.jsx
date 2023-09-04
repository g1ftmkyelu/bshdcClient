import React, { useState } from 'react';
import { Card as BootstrapCard, Image, Container, Button, Modal } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function TeamMemberCard({ image, name, role, phoneNumber, email, description }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    // Truncate the description to a manageable size (e.g., 100 characters)
    const truncatedDescription = description.slice(0, 170);
    const isDescriptionTruncated = description.length > truncatedDescription.length;

    // Function to sanitize HTML tags from the description
    const sanitizeHTML = (html) => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText;
    };

    return (


  


        <Container>
            <BootstrapCard className='mx-auto my-4' style={{ width: '18rem', border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                {image && <Image variant="top" src={image}  width={288} height={346}/>}
                <BootstrapCard.Body>
                    <BootstrapCard.Title className="text-center">{name}</BootstrapCard.Title>
                    <BootstrapCard.Subtitle className="mb-2 text-muted text-center">{role}</BootstrapCard.Subtitle>
                    {(phoneNumber || email) && (
                        <div className='text-center mb-2'>
                            {phoneNumber && (
                                <p className="mb-1">
                                    <FaPhone style={{ marginRight: '5px' }} />
                                    {phoneNumber}
                                </p>
                            )}
                            {email && (
                                <p className="mb-0">
                                    <FaEnvelope style={{ marginRight: '5px' }} />
                                    {email}
                                </p>
                            )}
                        </div>
                    )}
                    {/* Display truncated and sanitized description */}
                    <BootstrapCard.Text>
                        {isDescriptionTruncated ? (
                            <>
                                {sanitizeHTML(truncatedDescription)}{' '}
                                <Button variant="link" onClick={toggleModal}>
                                    See More
                                </Button>
                            </>
                        ) : (
                            sanitizeHTML(description)
                        )}
                    </BootstrapCard.Text>
                </BootstrapCard.Body>
            </BootstrapCard>

            {/* Modal for displaying full card content */}
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </Modal.Body>
            </Modal>
        </Container>




    );
}

export default TeamMemberCard;
