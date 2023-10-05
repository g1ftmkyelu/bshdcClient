import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import {
  HeroSection,
  TeamMemberCard,
  PartnerCard
} from '../components';
import {
  HomePageHeroSectionData,
  PartnersData,
  TeamMembersData
} from '../assets/data/data';

const About = () => {
  const { Caption, HeroImage } = HomePageHeroSectionData;

  return (
    <>
      <HeroSection
        Caption={'About Us'}
        HeroImage={HeroImage}
        HeroImageIsVisible
      />

      <Container className="my-5">
        <Row>
          <Col lg={8} className="mb-4">
            <h2>Who We Are</h2>
            <p>
              Welcome to BSHDC - the health and development arm of the Church of Central African Presbyterian Blantyre. We are dedicated to making a positive impact on the health and well-being of our community. Our mission is to provide healthcare services, education, and support to improve the lives of those in need.
            </p>

            <h2>Vision and Mission</h2>
            <p>
              Our vision is to create a healthier and more prosperous community where everyone has access to quality healthcare and opportunities for development. Our mission is to achieve this vision by working closely with our community, partners, and dedicated team members.
            </p>

            <h2>Our Team</h2>
            <p>
              Meet the dedicated individuals who drive our mission forward. Our team is comprised of healthcare professionals, educators, and community leaders who are passionate about making a difference.
            </p>
           
              {/* You can map through TeamMembersData and use the TeamMemberCard component here */}
              <a href="/team" className='btn btn-outline-primary'>View Team Members</a>
         

            <h2>Partnerships</h2>
            <p>
              We believe in the power of collaboration. Our organization collaborates with various partners, including local and international organizations, to expand our reach and impact. Together, we can achieve more.
            </p>
          
              {/* You can map through PartnersData and use the PartnerCard component here */}
              <a href="/partners" className='btn btn-outline-primary'>View Partners</a>
          
          </Col>

          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <h3>Get Involved</h3>
                <p>
                  Want to support our cause? There are many ways you can get involved. Whether you want to volunteer, donate, or partner with us, your contribution can make a significant difference in the lives of those we serve.
                </p>
                <Button role='a' href='/donate' >Donate</Button>
              </Card.Body>
            </Card>

            {/* You can add more cards or sections here */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
