import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Global AOS CSS import

const CoreValues = () => {
  const imageURL = `${process.env.PUBLIC_URL}/assets/corevalues.jpg`; // Core values image from assets

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 bg-[#020506] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="mb-12 text-center space-y-3 sm:space-y-5" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            Our Core Values
          </h2>
          <p className="text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
            We guarantee strict compliance to all procedures in journeys.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          
          {/* Image */}
          <div
            className="w-full md:w-1/2 transform transition-transform duration-700 ease-out hover:scale-105 rounded-xl shadow-xl overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src={imageURL}
              alt="Trucking Operations"
              className="w-full h-[250px] sm:h-[320px] md:h-[100%] object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-8 sm:space-y-10" data-aos="fade-left">
            
            {/* Item 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center text-base sm:text-lg font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Fast Dispatching</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  RouteSpark Logistics LLC provides fast delivery of trucks within the specified time. We coordinate trip schedules, manage routes, and handle calls and requests from operators, third-party vendors, and supervisors to provide the fastest dispatching across the USA.
                </p>
              </div>
            </div>

            <hr className="border-gray-600" />

            {/* Item 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center text-base sm:text-lg font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Cultivating Relationships</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  We develop meaningful relationships with companies. We work closely with carrier companies and owner-operators to fully understand their preferences on routes and revenue maximization — no forced dispatching at all.
                </p>
              </div>
            </div>

            <hr className="border-gray-600" />

            {/* Item 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center text-base sm:text-lg font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Our Specialty</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  We are a multitasking dispatching company, handling all kinds of truck dispatching including Dry Van, Reefer Van, Step Decks, Flatbeds, and Power Only. We provide invoicing for each dispatch, helping clients manage all their dispatching at one platform.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
