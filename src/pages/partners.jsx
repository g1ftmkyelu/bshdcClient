import React from 'react';
import {
    GridPagination,
    HeroSection,
    PartnerCard
} from '../components';
import { PartnersData } from '../assets/data/data';
import { Container } from 'react-bootstrap';

export default function Partners() {
    return (
        <>
            <HeroSection
                Caption={'Partners'}
                HeroImage={'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}
                HeroImageIsVisible
            />
            <Container>
                <GridPagination
                    title={'Partners'}
                    items={PartnersData}
                    itemsPerPage={6}
                    renderItem={(item) => <PartnerCard partner={item} />}

                />

            </Container>
        </>)
}