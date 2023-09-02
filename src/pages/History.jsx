import React from 'react';
import { HeroSection, ModularTimeline } from '../components';
import { Container } from 'react-bootstrap';
import { TimelineItemsData } from '../assets/data/data';

const History = () => {
    return (
        <>
        <HeroSection
            HeroImage={'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
            Caption={'Our History'}
        />
        <Container className=' my-5'>
            <ModularTimeline
                items={TimelineItemsData}                
            />
        </Container>
        </>
    );
}

export default History;
