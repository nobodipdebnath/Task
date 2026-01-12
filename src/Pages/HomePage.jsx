import React from 'react';
import Hero from '../Components/Home/Hero';
import Features from '../Components/Home/Features';
import Pricing from '../Components/Home/Pricing';
import Cat from '../Components/Home/Cat';

const HomePage = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Features></Features>
            <Pricing></Pricing>
            <Cat></Cat>
        </div>
    );
};

export default HomePage;