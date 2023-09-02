import React from 'react';
import { Footer, NavBar } from '../components/';
import { SociaMediaLinks, WebContactDetails, WebsiteNavigationLinks } from '../assets/data/data';
import { Outlet } from 'react-router-dom';

const WebsiteUI = () => {
    return (
        <>
            <NavBar Links={WebsiteNavigationLinks} />
            <Outlet />
            <Footer Links={WebsiteNavigationLinks} SociaMediaLinks={SociaMediaLinks} details={WebContactDetails} />

        </>

    );
}

export default WebsiteUI;
