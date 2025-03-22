import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const MissionStatement = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/assets/missionstatement.jpg`; // Using local image

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1200, // Smooth animation duration
      once: true,     // Animate only once when scrolled into view
      easing: 'ease-in-out', // Optional: smooth easing
    });
  }, []);

  return (
    <section
      className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text content with AOS animation on scroll */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 md:px-12"
        data-aos="fade-up" // AOS attribute for scroll effect
      >
        <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-semibold font-poppins leading-relaxed max-w-4xl mx-auto tracking-wide drop-shadow-xl">
          Our goal is to bring joy and prosperity to the people we serve.
          <br className="hidden sm:block" />
          We always offer creative solutions to prepare for dispatch challenges in the future.
        </h2>
      </div>
    </section>
  );
};

export default MissionStatement;
