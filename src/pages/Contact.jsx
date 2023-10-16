import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi'; // Import email, phone, and message icons from React Icons
import { useFetchAllcontacts } from '../hooks/contactsAPI';

const Contact = () => {
    const emailLink = 'mailto:your-email@example.com'; // Replace with your email address
    const phoneNumber = 'tel:+1234567890'; // Replace with your phone number
    const smsLink = 'sms:+1234567890'; // Replace with the phone number you want to send an SMS to

    const { data: contacts, isLoading: isLoadingContacts } = useFetchAllcontacts();


    return (

        <>
            { isLoadingContacts ?
                <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner animation="border" variant="primary" />
                </div> :
                <>

                    <Container fluid className='h-50 bg-dark-subtle mt-lg-5'>
                        <div className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div data-aos="fade-left" className="col-10 col-sm-8 col-lg-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        className="d-block mx-lg-auto img-fluid"
                                        alt="Bootstrap Themes"
                                        width="700"
                                        height="500"
                                        loading="lazy"
                                    ></img>
                                </div>
                                <div data-aos="fade-right" className="col-lg-6">
                                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Contact Us</h1>
                                    <p className="lead">
                                        Reach Out and Let's Connect! We're Just a Click Away to Answer Your Questions and Assist You in Every Way Possible. Contact Us Today!.
                                    </p>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                        {/* Email button */}
                                        <a href={`mailto:${contacts[0].email}`} className="btn btn-primary btn-lg px-4 me-md-2" aria-label="Email">
                                            <FiMail /> Email
                                        </a>
                                        {/* Phone call button */}
                                        <a href={`tel:${contacts[0].phone}`} className="btn btn-outline-secondary btn-lg px-4" aria-label="Call">
                                            <FiPhone /> Call
                                        </a>
                                        {/* SMS button */}
                                        <a href={`sms:${contacts[0].phone}`} className="btn btn-outline-secondary btn-lg px-4" aria-label="SMS">
                                            <FiMessageSquare /> SMS
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </>
            }
        </>
    );
};

export default Contact;
