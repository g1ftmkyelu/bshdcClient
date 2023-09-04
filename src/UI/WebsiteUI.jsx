import React from 'react';
import { Footer, NavBar } from '../components/';
import { WebContactDetails, WebsiteNavigationLinks } from '../assets/data/data';
import { Outlet } from 'react-router-dom';
import { useFetchAllSocialMediaLinks } from '../hooks/socialMediaLinksAPI';
import { Spinner } from 'react-bootstrap';

const WebsiteUI = () => {

    const { data: socialMediaLinks, isLoading: isLoadingSocialMediaLinks } = useFetchAllSocialMediaLinks();

    return (
        <>

            {isLoadingSocialMediaLinks ? 
            <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Spinner animation="border" variant="primary" />
            </div> :
                <>
                    <NavBar Links={WebsiteNavigationLinks} />
                    <Outlet />
                    <Footer Links={WebsiteNavigationLinks} SociaMediaLinks={socialMediaLinks} details={WebContactDetails} />

                </>
            }

        </>

    );
}

export default WebsiteUI;
