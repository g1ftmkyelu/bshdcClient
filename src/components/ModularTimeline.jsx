import React from 'react';
import { Chrono } from 'react-chrono';


const ModularTimeline = ({ items }) => {
    return (
        <Chrono mode='VERTICAL' items={items} slideShow
            slideItemDuration={4500}
            slideShowType="reveal"
            enableOutline />
    );
};

export default ModularTimeline;
