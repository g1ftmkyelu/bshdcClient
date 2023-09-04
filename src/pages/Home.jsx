import React, { Component } from 'react';
import {
    ComponentSlider,
    CoreValuesSection,
    GridPagination,
    HeroSection,
    TeamMemberCard,
    PartnerCard,
    EventCard
} from '../components';
import { useFetchAllTeamMembers } from '../hooks/teamMembersAPI';
import { HomePageHeroSectionData } from '../assets/data/data';
import { useFetchAllPartners } from '../hooks/partnersAPI';
import { useFetchAllCoreValues } from '../hooks/coreValuesAPI';
import { useFetchAllEvents } from '../hooks/eventsAPI';
import { Container, Spinner } from 'react-bootstrap';

const Home = () => {
    const { ButtonCaption, Caption, ButtonUrl, HeroImage } = HomePageHeroSectionData
    const { data: teamMembersData, isLoading: isLoadingTeamMembers } = useFetchAllTeamMembers();
    const { data: partnersData, isLoading: isLoadingParteners } = useFetchAllPartners();
    const { data: coreValuesData, isLoading: isLoadingCoreValues } = useFetchAllCoreValues();
    const { data: eventsData, isLoading: isLoadingEvents } = useFetchAllEvents();

    return (
        <>

            {isLoadingParteners || isLoadingTeamMembers || isLoadingCoreValues || isLoadingEvents ? <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner animation="border" variant="primary" /> </div> :

                <>
                    <HeroSection
                        ButtonCaption={ButtonCaption}
                        ButtonIsVisible
                        ButtonUrl={ButtonUrl}
                        Caption={Caption}
                        HeroImage={HeroImage}

                        HeroImageIsVisible
                    />
                    <CoreValuesSection
                        values={coreValuesData}
                    />
                    <Container>

                        <ComponentSlider
                            items={teamMembersData}
                            title={'Team Members'}
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

                    <Container>
                        <GridPagination
                            title={'Partners'}
                            items={partnersData}
                            itemsPerPage={3}
                            renderItem={(item) => <PartnerCard partner={item} />}
                            seeMoreUrl={'/partners'}

                        />

                    </Container>

                    <Container>

                        <ComponentSlider
                            items={eventsData}
                            title={'Our Events'}
                            renderItem={(item) => <EventCard event={item}/>}
                        />
                    </Container>
                </>
            }



        </>
    );
}

export default Home;
