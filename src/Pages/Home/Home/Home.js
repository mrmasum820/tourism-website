import React from 'react';
import Banner from '../Banner/Banner';
import SurpriseBody from '../SurpriseBody/SurpriseBody';
import Services from '../Services/Services';
import IntensiveUnit from '../IntensiveUnit/IntensiveUnit';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SurpriseBody></SurpriseBody>
            <Services></Services>
            <IntensiveUnit></IntensiveUnit>

        </div>
    );
};

export default Home;