import React from 'react';
import { Footer, NavBar } from '../components/';
import { WebContactDetails, WebsiteNavigationLinks } from '../assets/data/data';
import { Outlet } from 'react-router-dom';
import { useFetchAllSocialMediaLinks } from '../hooks/socialMediaLinksAPI';
import { useFetchAllcontacts } from '../hooks/contactsAPI';
import { Spinner } from 'react-bootstrap';

const WebsiteUI = () => {

    const { data: socialMediaLinks, isLoading: isLoadingSocialMediaLinks } = useFetchAllSocialMediaLinks();
    const {data:contacts, isLoading: isLoadingContacts} = useFetchAllcontacts();

    return (
        <>

            {isLoadingSocialMediaLinks|| isLoadingContacts ? 
            <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Spinner animation="border" variant="primary" />
            </div> :
                <>
                    <NavBar Links={WebsiteNavigationLinks} />
                    <Outlet />
                    <Footer Links={WebsiteNavigationLinks} SociaMediaLinks={socialMediaLinks} details={contacts[0]} />

                </>
            }

        </>

    );
}

export default WebsiteUI;
