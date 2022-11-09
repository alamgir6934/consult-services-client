import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Consaltent from './Consaltent/Consaltent';
import Services from './services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Consaltent></Consaltent>
        </div>
    );
};

export default Home;