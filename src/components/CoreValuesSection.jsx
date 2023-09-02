import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const heading ="Our Core Values"
function CoreValuesSection({values}) {
    return (
        <section data-aos="zoom-in" className="container py-5 aos-init aos-animate" >
            <h2 className="text-center fw-bold text-primary">{heading}</h2>

            <Container>
                <Row>

                    {values.map(({ Icon, Title, SubTitle, Description }, i) => (

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center align-items-center mt-4">
                            <div className="text-center mx-3">
                                <h3 className="text-primary"><Icon/></h3>
                                <h3 className="text-justify aos-init aos-animate">
                                    {Title}
                                </h3>
                                <p>{SubTitle}</p>
                                <p className="text-justify">{Description}</p>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    );
}

export default CoreValuesSection;
