import React, { useEffect } from 'react';
import ContactUs from '../../components/ContactUs';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - RouteSpark Logistics LLC";
  }, []);

  return (
    <div className="min-h-screen bg-[#020506] text-white flex flex-col">

      {/* Contact Us Heading */}
      <div className="w-full py-10 sm:py-14 md:py-16 bg-[#020506] shadow-xl flex flex-col items-center justify-center space-y-4 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-center leading-tight">
          Get in Touch with <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">RouteSpark Logistics LLC</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center max-w-3xl">
          Whether you want to collaborate, ask a question, or need professional dispatch solutions, we are here for you — 24/7.
        </p>
      </div>

      {/* Main Contact Form Component */}
      <div className="flex-grow py-10 px-4 sm:px-8 md:px-16" data-aos="fade-up">
        <ContactUs />
      </div>

      {/* Final Call to Action */}
      <div className="w-full py-12 sm:py-16 bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col items-center justify-center space-y-6 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-center leading-tight">
          Let's Grow Together
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white text-center max-w-3xl">
          Join RouteSpark Logistics LLC and experience stress-free dispatching with professional support designed for success.
        </p>
        <a
          href="/"
          className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
        >
          Start Now
        </a>
      </div>

    </div>
  );
};

export default Contact;
