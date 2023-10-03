import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchAllEvents, useFetchEventById } from '../hooks/eventsAPI';
import { Spinner, Container } from 'react-bootstrap';
import { HeroSection, ComponentSlider, EventCard } from '../components';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitization

// Function to format the date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const Event = () => {
    // Get the 'id' parameter from the route
    const { id } = useParams();
    const { data: eventsData, isLoading: isLoadingEvents } = useFetchAllEvents();

    // Use the custom hook to fetch the event data
    const { data: eventData, isLoading, isError } = useFetchEventById(id);

    if (isLoading) {
        return (
            <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    if (isError) {
        return <div>Error loading event data.</div>;
    }

    // Sanitize and render the HTML content
    const sanitizedContent = DOMPurify.sanitize(eventData.content);

    return (
        <>
            <HeroSection HeroImage={eventData.thumbnail} Caption={eventData.title} />
            <Container>
                <Container>
                    <div style={{paddingBottom: '70px', fontSize:'35px',  paddingTop: '70px', borderRadius: '5px', color:'darkgray' }}>
                        <strong>Event Date ~ </strong> {formatDate(eventData.createdAt)}
                    </div>
                    {/* Render the sanitized HTML content */}
                    <div style={{ textAlign: 'justify' }}>{parse(sanitizedContent)}</div>
                </Container>
            </Container>
            {isLoadingEvents ? (
                <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <Container>
                    <ComponentSlider
                        items={eventsData}
                        title={'Check Out Our Other Events'}
                        renderItem={(item) => <EventCard event={item} />}
                    />
                </Container>
            )}
        </>
    );
};

export default Event;
