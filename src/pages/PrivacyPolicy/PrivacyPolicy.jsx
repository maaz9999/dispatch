import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaShieldAlt, FaUserShield, FaFileContract, FaMobileAlt, FaUserEdit, FaBalanceScale } from 'react-icons/fa';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - RouteSpark Logistics LLC";
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#020506] min-h-screen text-white py-12 px-4 sm:px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Page Heading */}
        <div className="text-center space-y-4" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Privacy Policy</h1>
          <p className="text-gray-400 text-base sm:text-lg">Last Updated: 21-Aug-24</p>
        </div>

        {/* Introduction */}
        <section className="space-y-6" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaUserShield /> Introduction</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            This Privacy Policy explains how RouteSpark Logistics LLC ("we", "our", "us") collects, uses, shares, and protects your personal information when you interact with our services, including our website, products, and communication channels.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="space-y-6" data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaFileContract /> 1. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-5">
            <li><strong>Personal Information:</strong> Name, email, phone number, and contact details.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited.</li>
            <li><strong>Communication Data:</strong> Emails, messages, and call content.</li>
            <li><strong>Consent Data:</strong> Consent for communication and data usage.</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="space-y-6" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaShieldAlt /> 2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-5">
            <li><strong>Service Provision:</strong> Improve services and support.</li>
            <li><strong>Communication:</strong> Updates, newsletters, and marketing.</li>
            <li><strong>Compliance:</strong> Legal and security obligations.</li>
          </ul>
        </section>

        {/* How We Share Information */}
        <section className="space-y-6" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaFileContract /> 3. How We Share Your Information</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-5">
            <li><strong>Marketing:</strong> Only with explicit consent.</li>
            <li><strong>Affiliates:</strong> Under confidentiality agreements.</li>
            <li><strong>Partners:</strong> For service provision (e.g., payment).</li>
            <li><strong>Third Parties:</strong> Only with your consent.</li>
          </ul>
        </section>

        {/* TCPA & SMS Compliance */}
        <section className="space-y-6" data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaMobileAlt /> 4. TCPA & SMS Compliance</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-5">
            <li>Opt-in via website forms.</li>
            <li>Verbal consent during calls.</li>
            <li>Inbound SMS as consent.</li>
          </ul>
        </section>

        {/* Messaging & Opt-out */}
        <section className="space-y-6" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaMobileAlt /> 5. Messaging & Opt-out</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-5">
            <li><strong>Opt-in:</strong> Required for SMS communications.</li>
            <li><strong>Opt-out:</strong> Text "STOP".</li>
            <li><strong>Help:</strong> Text "HELP".</li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="space-y-6" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaShieldAlt /> 6. Security</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            We use strong security measures, including encryption and access controls, to protect your data.
          </p>
        </section>

        {/* User Rights */}
        <section className="space-y-6" data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaUserEdit /> 7. Your Rights</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            You can access, correct, or delete your personal information. You may withdraw consent at any time.
          </p>
        </section>

        {/* Changes to Policy */}
        <section className="space-y-6" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaFileContract /> 8. Changes to This Policy</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            We may update this policy and notify you of any major changes.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-6" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><FaBalanceScale /> 9. Contact Us</h2>
          <ul className="list-none text-gray-300 space-y-2 pl-1">
            <li><strong>Email:</strong> info@routesparklogisticsllc.com</li>
            <li><strong>Phone:</strong> ----</li>
            <li><strong>Address:</strong> 7901 4th St N #10544, St. Petersburg, FL 33702</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
