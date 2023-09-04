import React from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = ({ Links, SociaMediaLinks, details }) => {
    return (
        <footer className="footer bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5 className='fw-bolder'>Navigation</h5>
                        <ListGroup className="list-unstyled">

                            {Links.map(({ Caption, url }, i) => (
                                <ListGroup.Item className='bg-dark border-0'><Link className='text-decoration-none' to={url}>{Caption}</Link></ListGroup.Item>
                            ))}

                        </ListGroup>
                    </Col>

                    <Col md={4}>
                        <h5 className='fw-bolder'>Follow Us</h5>
                        <ListGroup className="list-unstyled">
                            {SociaMediaLinks.map(({ Caption, url, Icon }, i) => (

                                <ListGroup.Item className='bg-dark border-0' key={i}>
                                    <Link className='text-decoration-none' to={url}>
                                        <Image src={Icon} width={20} height={20}/>  {Caption}
                                    </Link>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <h5 className='fw-bolder'>Address</h5>
                        <p>{details.postalAddress}</p>
                        <p>{details.location}</p>
                        <p>{details.phone}</p>
                        <p>{details.postalAddress}</p>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
