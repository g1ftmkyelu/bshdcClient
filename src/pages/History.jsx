import React from 'react';
import { HeroSection, ModularTimeline } from '../components';
import { Container } from 'react-bootstrap';
import { TimelineItemsData } from '../assets/data/data';

const History = () => {

    const desc = `Established in 1992, Blantyre Synod Health and Development Commission (BSHDC) is the development arm of the Church of Central Africa Presbyterian (CCAP) Blantyre Synod. BSHDC was incorporated under the “Trustees Incorporation Act” in 1963 in Malawi and is registered with the Council of NGOs in Malawi (CONGOMA). Legal and administrative oversight is provided by a Board which is represented by leaders in business, finance, civil society and the Church. The rationale behind setting up BSHDC was that the institution should evangelize through facilitating and implementing development work. 
    BSHDC has undergone a lot of structural and administrative changes. At first, this development arm was Projects Office and had several projects which were working independently. Some notable projects then were Church and Society which were implementing projects in governance, human rights and justice. After some consultations, attempts were made to merge all projects and that gave birth to Blantyre Synod Development Commission (BSDC). Later on the health department was added to the Commission and that made the institution change its identity to Blantyre Synod Health and Development Commission (BSHDC). With these changes, the organization also changed its administrative structure.  
    Currently BSHDC is implementing programs in the Southern Region of Malawi and also covering parts of Ntcheu District.  The main focus areas of its work are sustainable Livelihoods, Health, Child Protection and Governance. 
    For the past years, BSHDC has implemented its development programs with support from various partners both local and international including the faith based community and development partners. Some of the partners include; Church of Scotland, PC Canada, PC USA, Pittsburgh Presbytery, GZB, PC Ireland, Presbyterian World Service and Development, Orbus.  UNICEF, ICCO, Oxfam, EU, CIDA, Dan Church Aid, Norwegian Church Aid, EED, KFW, USAID, We See Hope, KNH, and UNDP.  One key local partner who has supported the work of BSHDC in HIV and AIDS is National AIDS Commission (NAC).`
    return (

        <>
            <HeroSection
                HeroImage={'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
                Caption={'Our History'}
            />
            <Container className=' my-5'>
                <p style={{textAlign:'justify'}}>
                    {desc}
                </p>
            </Container>
        </>
    );
}

export default History;
