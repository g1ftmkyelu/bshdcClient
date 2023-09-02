import React from 'react';
import {
    GridPagination,
    HeroSection,
    TeamMemberCard
} from '../components';
import { TeamMembersData } from '../assets/data/data';
import { Container } from 'react-bootstrap';

export default function Team() {
    return (
        <>
            <HeroSection
                Caption={'Team Members'}
                HeroImage={'https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
                HeroImageIsVisible
            />
            <Container>
                <GridPagination
                    title={'Team Members'}
                    items={TeamMembersData}
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
        </>)
}