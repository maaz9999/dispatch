import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ✅ Import AOS CSS globally
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home'; // Your Home component
import AboutUs from './pages/aboutus/aboutus'; // Your AboutUs component
import Contact from './pages/contact/contact'; // Your Contact component
import Services from './pages/services/Services';
import CarrierAgreementForm from './pages/CarrierAgreement/CarrierAgreement'; // Your CarrierAgreement component
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'; // Your PrivacyPolicy component
import Navbar from './components/navbar'; // Your Navbar component
import Footer from './components/footer'; // Your Footer component

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true,     // Animation happens only once when scrolled into view
      easing: 'ease-in-out', // Optional: add smooth easing
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<><Navbar /><AboutUs /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/getquote" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
        <Route path="/carrieragreement" element={<><Navbar /><CarrierAgreementForm /><Footer /></>} />
        <Route path="/privacypolicy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
