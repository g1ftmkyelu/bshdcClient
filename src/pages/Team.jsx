import React from 'react';
import {
    GridPagination,
    HeroSection,
    TeamMemberCard
} from '../components';
import { useFetchAllTeamMembers } from '../hooks/teamMembersAPI';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export default function Team() {
    const { data, isLoading } = useFetchAllTeamMembers();
    return (
        <>
            {isLoading ? <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner animation="border" variant="primary" /> </div> :

                <>
                    <HeroSection
                        Caption={'Team Members'}
                        HeroImage={'https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
                        HeroImageIsVisible
                    />
                    <Container>

                    <div style={{paddingTop:'50px', paddingBottom:'50px', textAlign:'justify'}}> 
                        <h1>Welcome to the Team Members page</h1>
                        <p>We are delighted to introduce you to the heart and soul of our organization – the incredible individuals who work tirelessly to make a positive impact on the world. As you explore this page, you'll get to know the passionate and compassionate team members who drive our mission forward, each contributing their unique skills and expertise to create meaningful change.</p>
                    </div>

                        <GridPagination
                            title={'Our Team Members'}
                            items={data}
                            itemsPerPage={6}
                            renderItem={(item) => <TeamMemberCard
                                name={item.name}
                                email={item.email}
                                phoneNumber={item.phoneNumber}
                                image={item.image}
                                role={item.role}
                                description={item.description}
                            />}


                        />

                    </Container>
                </>}

        </>)
}