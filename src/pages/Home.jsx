import React from 'react';
import Hero from '../components/Hero';
import Founder from '../components/Founder';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Founder />
            <About />
            <WhyChooseUs />
        </div>
    );
};

export default Home;
