import React from 'react';
import { Card as BootstrapCard, Image, Container } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import React Icons

function TeamMemberCard({ image, name, role, phoneNumber, email, description }) {
    return (
        <Container>
            <BootstrapCard className='mx-auto my-4' style={{ width: '18rem', border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                {image && <Image variant="top" src={image} />}
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
                    <BootstrapCard.Text>{description}</BootstrapCard.Text>
                </BootstrapCard.Body>
            </BootstrapCard>
        </Container>
    );
}

export default TeamMemberCard;
