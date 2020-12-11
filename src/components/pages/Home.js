import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Avatar from '../Avatar';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            {/* <Avatar /> */}
            <Footer />
        </>
    );
}

export default Home;