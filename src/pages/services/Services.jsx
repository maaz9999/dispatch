import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = "Our Services - RouteSpark Logistics LLC";
  }, []);

  // Services Data
  const services = [
    { name: "Flatbed", description: "Heavy-duty flatbed truck dispatch service contributing to the national economy with customized solutions.", fee: "6%" },
    { name: "Step Deck", description: "Oversized cargo and step deck loads managed for compliance and efficiency.", fee: "6%" },
    { name: "Reefer", description: "Temperature-sensitive freight moved safely and reliably with expert dispatch services.", fee: "6%" },
    { name: "Box Truck", description: "Reliable box truck dispatch service covering industries from HVAC to construction.", fee: "10%" },
    { name: "Power Only", description: "Power-only dispatch services where you supply the truck, and we supply the loads.", fee: "6%" },
    { name: "Dry Van", description: "Maximizing opportunities with Dry Van dispatch services designed for consistent high-paying loads.", fee: "6%" },
    { name: "HotShot", description: "Fast HotShot dispatch for urgent, high-priority loads delivered on time.", fee: "12%" },
    { name: "Sprinter Van", description: "Efficient dispatching for Sprinter Vans covering time-sensitive deliveries.", fee: "12%" },
  ];

  const commonFeatures = [
    "24/7 Personal dispatcher",
    "No forced dispatch",
    "Load booking after approval",
    "Handling all paperwork",
    "Access to Network of Shippers",
    "No Upfront / No Hidden Charges",
  ];

  return (
    <div className="bg-[#020506] min-h-screen py-16 px-6 md:px-20 text-white">

      {/* Header */}
      <div className="text-center space-y-4 mb-16" data-aos="fade-down">
        <h1 className="text-5xl font-extrabold leading-tight">
          Our <span className="text-blue-500">Services</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Explore our dispatch services tailored to your needs — transparent, high-value, and built for growth.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center" data-aos="fade-up">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#0d1522] border border-gray-700 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            style={{ minHeight: '360px' }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">{service.name}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>

            <div className="mt-6 space-y-2 text-gray-400 text-xs">
              {commonFeatures.slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <span>✔️</span>
                  <span>{item}</span>
                </div>
              ))}

              {/* Fee Badge */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-white font-medium text-sm">
                  💰 Only {service.fee} of gross
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        className="w-full py-12 mt-24 bg-gradient-to-r from-blue-600 to-blue-700 flex flex-col items-center justify-center space-y-6 rounded-2xl shadow-xl"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Ready to Maximize Your Profits?
        </h2>
        <p className="text-base text-gray-200 text-center max-w-2xl">
          Partner with RouteSpark Logistics LLC for dispatch solutions designed to keep you on the road and earning more.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get Started Today
        </a>
      </div>

    </div>
  );
};

export default Services;
