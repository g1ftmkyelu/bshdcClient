import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access the route parameter
import { useFetchEventById } from '../hooks/eventsAPI';
import { Spinner, Container } from 'react-bootstrap';
import { HeroSection } from '../components';


const sanitizeHTML = (html) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText;
};


// Function to format the date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
const Event = () => {
    // Get the 'id' parameter from the route
    const { id } = useParams();

    // Use the custom hook to fetch the event data
    const { data: eventData, isLoading, isError } = useFetchEventById(id);

    if (isLoading) {
        return <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spinner animation="border" variant="primary" />
        </div>;
    }

    if (isError) {
        return <div>Error loading event data.</div>;
    }

    return (
        <>
            <HeroSection
                HeroImage={eventData.thumbnail}
                Caption={eventData.title}
            />
            <Container>

                <Container>
                    <p>Date: {formatDate(eventData.createdAt)}</p>
                    <p style={{ textAlign: 'justify' }}>{sanitizeHTML(eventData.content)}</p>
                </Container>
            </Container>

        </>
    );
}

export default Event;
