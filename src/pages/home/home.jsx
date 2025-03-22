import React from 'react';
import HeroSection from './components/herosection';
import Navbar from '../../components/navbar';
import AboutCompany from './components/aboutcompany';
import CoreValues from './components/corevalues';
import MissionStatement from './components/missionstatement';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/footer'; // Imported Footer

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Navbar fixed on top */}
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* About Company Section */}
      <div className="">
        <AboutCompany />
      </div>

      {/* Core Values Section */}
      <div className="">
        <CoreValues />
      </div>

      {/* Mission Statement Section */}
      <div className="">
        <MissionStatement />
      </div>

      {/* Contact Us Section */}
      <div className="">
        <ContactUs />
      </div>

      {/* Footer Section */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
