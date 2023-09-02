import React from 'react';
import {
    ComponentSlider,
    GridPagination,
    HeroSection,
    TeamMemberCard,
    PartnerCard
} from '../components';
import { HomePageHeroSectionData, PartnersData, TeamMembersData } from '../assets/data/data';
import { Container } from 'react-bootstrap';
import Paragraph from 'antd/es/typography/Paragraph';

const About = () => {

    const { ButtonCaption, Caption, ButtonUrl, HeroImage } = HomePageHeroSectionData
    return (
        <>
            <HeroSection
                Caption={'About Us'}
                HeroImage={'https://scontent.fblz1-1.fna.fbcdn.net/v/t31.18172-8/25188982_1879621718952677_211932171013531122_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGHV_qv1zuvpZVLPjXUSG4PDoPtMlcKNo8Og-0yVwo2j5Q4sToOzxST2-oj_3cUid7pqe4CpU_Vwnh7CmXNl8YN&_nc_ohc=t11dsNMzS_oAX9gicPD&_nc_pt=5&_nc_ht=scontent.fblz1-1.fna&oh=00_AfDONRZbl6oqR1KHIqnBVbqps_Upe2xhWAzKI-dBDNoTFw&oe=651AE34B'}
                HeroImageIsVisible
            />

            <Container>
                <Paragraph>
                    BSHDC is the health and development arm of the Church of Central African Presbyterian Blantyre. We are dedicated to making a positive impact on the health and well-being of our community. Our mission is to provide healthcare services, education, and support to improve the lives of those in need.
                </Paragraph>

                {/* Vision and Mission */}
                <h2>Vision and Mission</h2>
                <Paragraph>
                    Our vision is to create a healthier and more prosperous community where everyone has access to quality healthcare and opportunities for development. Our mission is to achieve this vision by working closely with our community, partners, and dedicated team members.
                </Paragraph>

                {/* Our Team */}
                <h2>Our Team</h2>
                <Paragraph>
                    Meet the dedicated individuals who drive our mission forward. Our team is comprised of healthcare professionals, educators, and community leaders who are passionate about making a difference.
                </Paragraph>
                {/* You can use the TeamMemberCard component to display team members here */}

                {/* Partnerships */}
                <h2>Partnerships</h2>
                <Paragraph>
                    We believe in the power of collaboration. Our organization collaborates with various partners, including local and international organizations, to expand our reach and impact. Together, we can achieve more.
                </Paragraph>
                {/* You can use the PartnerCard component to display partnership information here */}

                {/* Get Involved */}
                <h2>Get Involved</h2>
                <Paragraph>
                    Want to support our cause? There are many ways you can get involved. Whether you want to volunteer, donate, or partner with us, your contribution can make a significant difference in the lives of those we serve.
                </Paragraph>
                {/* You can provide information on how to get involved, including contact details */}
            </Container>
        </>
    );
}

export default About;
