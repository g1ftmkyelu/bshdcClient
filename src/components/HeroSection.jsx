import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Styles = {
    Row: {
        height: "55vh",
        backgroundSize: "cover"
    }
}


function HeroSection({ Caption, HeroImage, ButtonIsVisible, ButtonUrl, ButtonCaption }) {
    return (

        <Container fluid style={{
            backgroundImage: HeroImage !== undefined ? `url(${HeroImage})` : 'none',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Row style={Styles.Row} className="align-items-center justify-content-center">
                <Col md={8} className="text-center">
                    <h1 className="text-white display-2 fw-bolder"
                    style={{textShadow: "1px 1px 0px #000000"}}
                    >
                        {Caption}
                    </h1>

                    {ButtonIsVisible ?
                        <Link to={ButtonUrl}>
                            <Button variant="primary" size="lg" className="mt-4">
                                {ButtonCaption}
                            </Button>

                        </Link>
                        :
                        <span></span>
                    }

                </Col>
            </Row>
        </Container>

    );
}

export default HeroSection;
