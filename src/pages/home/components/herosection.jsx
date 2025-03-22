import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [opacity, setOpacity] = useState(0);
  const heroImage = `${process.env.PUBLIC_URL}/assets/hero.jpg`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100); // Fade-in effect delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center h-[600px] sm:h-[700px] md:h-[800px] bg-cover bg-center transition-opacity duration-500 ease-in-out"
      style={{ backgroundImage: `url(${heroImage})`, opacity: opacity }}
    >
      <div className="p-4 sm:p-6 rounded-lg text-center text-white transform hover:scale-105 transition-transform duration-500 animate-slide-in-left max-w-4xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 tracking-wide leading-snug sm:leading-snug md:leading-tight drop-shadow-lg">
          Independent truck dispatch services for <br className="hidden md:block" />
          Carriers and Owner Operators
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed drop-shadow-md">
          Stay Loaded 24/7, 365 Days. <br className="hidden md:block" /> Best Dispatcher Win Relationship
        </p>

        {/* CTA Button */}
        <a href="/services" className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-500 ease-in-out text-white rounded-full text-base sm:text-lg shadow-lg">
          Our Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
