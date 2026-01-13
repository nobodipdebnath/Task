import React from 'react';
import Hero from '../Components/Home/Hero';
import Features from '../Components/Home/Features';
import Pricing from '../Components/Home/Pricing';
import Cat from '../Components/Home/Cat';
import FAQSection from '../Components/Home/FAQSection';
import Testimonials from '../Components/Home/Testimonials';

const HomePage = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Features></Features>
            <Pricing></Pricing>
            <Testimonials></Testimonials>
            <FAQSection></FAQSection>
            <Cat></Cat>
        </div>
    );
};

export default HomePage;