import React from 'react';

const AboutCompany = () => {
  const aboutImage = `${process.env.PUBLIC_URL}/assets/aboutcompany.png`;

  return (
    <section className="relative w-full bg-gradient-to-r from-[#020506] via-[#0a0f11] to-[#020506] py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10">

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 transform transition-transform duration-700 ease-out hover:scale-105 rounded-3xl shadow-xl"
          data-aos="fade-left"
        >
          <img
            src={aboutImage}
            alt="About Company"
            className="w-full h-[250px] sm:h-[320px] md:h-[500px] object-contain rounded-3xl"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 space-y-4 sm:space-y-6"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white text-center md:text-left">
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">RouteSpark Logistics LLC</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center md:text-left">
            <span className="font-semibold text-white">RouteSpark Logistics LLC</span> specializes in delivering
            <span className="font-semibold text-white"> independent truck dispatch services</span>, operated by a team of
            <span className="font-semibold text-white"> highly skilled dispatchers</span> dedicated to maximizing revenues for
            <span className="font-semibold text-white"> Owner Operators (O/O)</span> and small fleet owners.
          </p>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center md:text-left">
            Our mission is to provide <span className="font-semibold text-white">premium dispatching solutions</span>, working closely with clients to ensure optimal load assignments, consistent earnings, and stress-free operations.
          </p>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center md:text-left">
            With <span className="font-semibold text-white">dedicated dispatchers</span>, we guarantee that you remain
            <span className="italic text-white"> loaded 24/7, 365 days a year</span>, giving you complete control and peace of mind over your trucking business.
          </p>

          {/* Optional CTA Button */}
          <div className="pt-4 flex justify-center md:justify-start">
            <a href="/aboutus" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 text-sm sm:text-base">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
