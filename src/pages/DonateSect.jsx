import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

const DonateSect = () => {
    return (
        <Container fluid className='h-50 bg-dark-subtle mt-lg-5'>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div data-aos="fade-left" className="col-10 col-sm-8 col-lg-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/bshdc-a768e.appspot.com/o/IMG-20230504-WA0046.jpg?alt=media&token=3c5528f7-2744-438f-918f-fc8e55b00afa" className="d-block mx-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" load="lazy" />
                    </div>
                    <div data-aos="fade-right" className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Donate</h1>
                        <p className="lead">
                            Join Hands with Us in Making a Difference! Your Support Matters. Donate Today and Help Us Create Positive Change Together.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            {/* Email button */}
                            <Button role='a' href='/donate' >Donate</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default DonateSect;
