import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="bg-[#020506] text-white min-h-screen py-12 sm:py-16 px-4 sm:px-6 md:px-20 space-y-16 sm:space-y-20 md:space-y-24">

      {/* Hero Section */}
      <section className="text-center space-y-6 sm:space-y-8" data-aos="fade-down">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide leading-tight">
          About <span className="text-blue-500">RouteSpark Logistics LLC</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-loose max-w-5xl mx-auto">
          Delivering excellence every mile. Your trusted partner for high-paying dispatch loads and 24/7 logistics solutions, built on a foundation of trust, dedication, and results.
        </p>
      </section>

      {/* Who We Are */}
      <section className="flex flex-col md:flex-row items-center gap-10 sm:gap-12 md:gap-16" data-aos="fade-up">
        <div className="md:w-1/2 space-y-5 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Who We Are</h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            RouteSpark Logistics LLC is a trustworthy and accurate truck dispatch service provider. Meeting customer needs with top solutions is our priority. We create a friendly environment and deliver exceptional customer service to enhance your business.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/assets/whoweare.jpg" alt="Who We Are" className="rounded-3xl shadow-2xl object-cover h-[300px] sm:h-[350px] md:h-[400px] w-full border border-gray-700" />
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12" data-aos="fade-up">
        {[
          {
            title: "Why Choose Us",
            desc: "We offer top-notch dispatch services that include answering calls, dispatching trips, and monitoring your fleet efficiently. With real-time updates via proprietary software, you’ll always stay informed and in control.",
          },
          {
            title: "Benefits of Working With Us",
            desc: "From sourcing and negotiating loads to handling paperwork and offering 24/7 support, we ensure your focus remains on driving while we manage the rest, maximizing your profit and efficiency.",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#101825] p-8 sm:p-10 rounded-3xl shadow-xl space-y-4 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">{item.title}</h3>
            <p className="text-gray-300 leading-loose text-base sm:text-lg">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CEO Message */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576765607924-75b121977708?auto=format&fit=crop&w=1000&q=80')` }}></div>
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
          <h3 className="text-3xl sm:text-4xl font-black">Message from the CEO</h3>
          <p className="text-base sm:text-lg text-gray-200 leading-loose">
            Welcome to RouteSpark Logistics LLC. Customer satisfaction is our driving force. We ensure that every mile driven is backed by outstanding support and professional dispatching, building strong, lasting relationships with our partners.
          </p>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="space-y-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">What Makes Us Special</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {[
            { title: "Competitive Rates", icon: "💰", desc: "Affordable and transparent pricing for dispatching & back-office." },
            { title: "Always On Time", icon: "⏰", desc: "Guaranteed punctual delivery for every client." },
            { title: "Fast & Reliable", icon: "🚚", desc: "Industry-best dispatch speed and accuracy." },
            { title: "24/7 Support", icon: "📞", desc: "Dedicated around-the-clock dispatchers." },
            { title: "Safe Dispatching", icon: "🛡️", desc: "Safety-first mindset for drivers and loads." },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#101825] p-6 sm:p-8 rounded-3xl space-y-4 text-center shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="space-y-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Our Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Consultation", desc: "Understand trucking needs and align goals." },
            { title: "Load Sourcing", desc: "Find high-paying, well-suited loads." },
            { title: "Dispatch & Support", desc: "Full service from paperwork to optimization." },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#101825] p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center space-y-8" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold">Client Testimonials</h2>
        <p className="italic text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          "RouteSpark Logistics has completely transformed my operations. Their dispatchers are professional, and I’m earning more while focusing on the road!" — <span className="text-white font-bold">John D., Owner-Operator</span>
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center pt-12 sm:pt-16 space-y-6" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide">Let's Move Forward Together!</h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">Partner with RouteSpark Logistics LLC to grow your trucking business and maximize every mile.</p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-xl transition-transform duration-300 hover:scale-110">
          Get Started Now
        </button>
      </section>

    </div>
  );
};

export default AboutUs;
