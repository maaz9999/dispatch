import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#020506] bg-opacity-90 shadow flex justify-between items-center px-4 py-3 md:px-6 lg:px-12">
      
      {/* Logo Section */}
      <div className="flex flex-col items-center md:items-start">
        <Link to="/">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            RouteSpark
          </h1>
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
        <li>
          <Link to="/" className="text-lg text-white hover:text-blue-400 transition-all duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="text-lg text-white hover:text-blue-400 transition-all duration-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-lg text-white hover:text-blue-400 transition-all duration-200">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg text-white hover:text-blue-400 transition-all duration-200">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/carrieragreement" className="text-lg text-white hover:text-blue-400 transition-all duration-200">
            Company Agreement
          </Link>
        </li>
        <li>
          <Link to="/privacypolicy" className="text-lg text-white hover:text-blue-400 transition-all duration-200">
            Privacy Policy
          </Link>
        </li>
      </ul>

      {/* Desktop CTA Button */}
      <Link
        to="/contact"
        className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-md font-semibold transition-transform duration-300 hover:scale-105"
      >
        Get a Quote
      </Link>

      {/* Hamburger Icon for Mobile & iPad */}
      <button onClick={toggleMenu} className="md:hidden text-white text-3xl focus:outline-none">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile & iPad Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[#020506] w-60 rounded-xl shadow-xl p-6 space-y-4 z-50 border border-gray-700">
          <ul className="space-y-4 text-center">
            <li>
              <Link to="/" className="block text-white hover:text-blue-400" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="block text-white hover:text-blue-400" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block text-white hover:text-blue-400" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block text-white hover:text-blue-400" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/carrieragreement" className="block text-white hover:text-blue-400" onClick={toggleMenu}>
                Company Agreement
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="block text-white hover:text-blue-400" onClick={toggleMenu}>
                Privacy Policy
              </Link>
            </li>
          </ul>

          {/* CTA Button for Mobile & iPad */}
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-semibold"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
