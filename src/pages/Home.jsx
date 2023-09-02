import React, { Component } from 'react';
import {
    ComponentSlider,
    CoreValuesSection,
    GridPagination,
    HeroSection,
    TeamMemberCard,
    PartnerCard
} from '../components';
import { CoreValuesData, HomePageHeroSectionData, PartnersData, TeamMembersData } from '../assets/data/data';
import { Container } from 'react-bootstrap';

const Home = () => {
    const { ButtonCaption, Caption, ButtonUrl, HeroImage } = HomePageHeroSectionData
    return (
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
                values={CoreValuesData}
            />
            <Container>

                <ComponentSlider
                    items={TeamMembersData}
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
                    items={PartnersData}
                    itemsPerPage={3}
                    renderItem={(item) => <PartnerCard partner={item}/>}
                    seeMoreUrl={'/partners'}
                  
                />

            </Container>
        </>
    );
}

export default Home;
