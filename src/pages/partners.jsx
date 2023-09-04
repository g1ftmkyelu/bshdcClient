import React from 'react';
import {
    GridPagination,
    HeroSection,
    PartnerCard
} from '../components';
import { Container } from 'react-bootstrap';
import { useFetchAllPartners } from '../hooks/partnersAPI';
import Spinner from 'react-bootstrap/Spinner';

export default function Partners() {

    const { data: partnersData, isLoading: isLoadingParteners } = useFetchAllPartners();
    return (
        <>
            {isLoadingParteners ? <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner animation="border" variant="primary" /> </div> :

                <>

                    <HeroSection
                        Caption={'Partners'}
                        HeroImage={'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}
                        HeroImageIsVisible
                    />
                    <Container>
                        <GridPagination
                            title={'Partners'}
                            items={partnersData}
                            itemsPerPage={6}
                            renderItem={(item) => <PartnerCard partner={item} />}

                        />

                    </Container>

                </>}
        </>)
}