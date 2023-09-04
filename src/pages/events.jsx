import React from 'react';
import { EventCard, HeroSection, GridPagination } from '../components';
import { useFetchAllEvents } from '../hooks/eventsAPI';
import  Spinner  from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';


const Events = () => {
    const { data, isLoading } = useFetchAllEvents()
    return (
        <div>
            <HeroSection
                HeroImage={'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
                Caption={'Our Events'}
            />

            {isLoading ? <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner animation="border" variant="primary" /> </div> :

                <Container>
                    <GridPagination
                        title={'Events'}
                        items={data}
                        itemsPerPage={9}
                        renderItem={(item) => <EventCard 
                            event={item}                            
                            />}
                       

                    />

                </Container>
            }

        </div>
    );
}

export default Events;