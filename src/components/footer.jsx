import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#020506] text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

        {/* Stylish Text Logo Section */}
        <div className="flex flex-col items-center md:items-start text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            RouteSpark
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-widest">Logistics LLC</h2>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 tracking-wider">
            Excellence Every Mile
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 sm:space-y-3">
            {[
              { name: 'Homepage', path: '/' },
              { name: 'About Us', path: '/aboutus' },
              { name: 'Our Services', path: '/services' },
              { name: 'Contact Us', path: '/contact' }
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition-all duration-300 text-sm sm:text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Expedition */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-4">Expedition</h3>
          <ul className="space-y-2 sm:space-y-3">
            {['Flatbed', 'Step Deck', 'Reefer', 'Hotshot', 'Sprinter van', 'Box truck', 'Power Only', 'Dry Van'].map((item, index) => (
              <li key={index}>
                <p className="text-gray-300 text-sm sm:text-base">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-3 leading-relaxed text-sm sm:text-base">
            7901 4th St N #10544,<br />
            St. Petersburg, FL 33702
          </p>
          <div className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
            <div className="flex justify-center sm:justify-start items-center gap-3">
              <FaEnvelope className="text-green-400 text-lg sm:text-xl" />
              <span>info@routesparklogisticsllc.com</span>
            </div>
            <div className="flex justify-center sm:justify-start items-center gap-3">
              <FaPhoneAlt className="text-green-400 text-lg sm:text-xl" />
              <span>-----</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-400 text-xs sm:text-sm pt-6 sm:pt-8 border-t border-gray-700 mt-8 sm:mt-10">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
