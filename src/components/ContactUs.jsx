import React, { useRef, useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('success');

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // Auto-hide popup after 4 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  // Handle Form Submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fxpx1z4', 'template_tixldpi', form.current, '4G-lALucZDxhPUT6_')
      .then(
        (result) => {
          setPopupMessage('✅ Your message has been sent successfully!');
          setPopupType('success');
          setShowPopup(true);
        },
        (error) => {
          setPopupMessage('❌ Failed to send message. Please try again later.');
          setPopupType('error');
          setShowPopup(true);
        }
      );

    e.target.reset(); // Reset form
  };

  return (
    <section className="flex items-center justify-center w-full bg-[#020506] py-12 px-4 sm:px-6 lg:px-8">
      {/* Outer Wrapper */}
      <div
        className="bg-black rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl border border-gray-800 shadow-xl"
        data-aos="zoom-in-up"
      >
        {/* Left Contact Info Section */}
        <div
          className="md:w-1/2 text-white p-8 sm:p-10 space-y-6"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">Get in touch with us</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Contact us directly, by phone or fill out the form to receive a free consultation from our enthusiastic staff.
          </p>

          {/* Address */}
          <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
            <FaMapMarkerAlt className="text-2xl sm:text-3xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Address</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                7901 4th St N #10544, <br /> St. Petersburg, FL 33702
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-2xl sm:text-3xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Email</h3>
              <p className="text-sm sm:text-base">info@routesparklogisticsllc.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
            <FaPhoneAlt className="text-2xl sm:text-3xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Phone Number</h3>
              <p className="text-sm sm:text-base">----</p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div
          className="md:w-1/2 bg-gray-100 p-8 sm:p-10"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 leading-tight">Send Us Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-black"
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              required
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-black"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 resize-none text-black"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3 sm:py-4 rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Popup */}
      {showPopup && (
        <div
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white border ${
            popupType === 'success' ? 'border-green-500' : 'border-red-500'
          } py-3 px-4 sm:px-6 rounded-full shadow-xl flex items-center space-x-3 transition-all duration-500 ${
            showPopup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {popupType === 'success' ? (
            <FaCheckCircle className="text-green-500 text-lg sm:text-xl" />
          ) : (
            <FaTimesCircle className="text-red-500 text-lg sm:text-xl" />
          )}
          <span className="text-gray-800 text-sm sm:text-base">{popupMessage}</span>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
