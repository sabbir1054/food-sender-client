import React from 'react';
import Feature from '../Feature/Feature';
import Foods from '../Foods/Foods';
import Hero from '../Hero/Hero';
import MobileApp from '../MobileApp/MobileApp';
import './Home.css'

const Home = () => {
    return (
      <div>
            <Hero></Hero>
            <Feature></Feature>
        <MobileApp></MobileApp>
      </div>
    );
};

export default Home;