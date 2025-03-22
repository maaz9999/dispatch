import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarrierAgreementForm = () => {
  const form = useRef();

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fxpx1z4', 'template_x7amh1c', form.current, '4G-lALucZDxhPUT6_')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Form submitted successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Something went wrong. Please try again.');
        }
      );

    e.target.reset(); // Reset form
  };

  return (
    <div className="bg-[#020506] min-h-screen flex flex-col items-center justify-center py-10 sm:py-16 px-4 sm:px-6 md:px-16 space-y-10 sm:space-y-12">

      {/* Header Section */}
      <div className="text-center space-y-4" data-aos="fade-down">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Let's Partner for Success</h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl">
          Please fill out the Carrier Agreement Form below to begin working with <span className="text-blue-500 font-semibold">RouteSpark Logistics LLC</span>. We are committed to supporting your business every mile of the way.
        </p>
      </div>

      {/* Form Section */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#111827] max-w-5xl w-full rounded-2xl shadow-2xl p-6 sm:p-10 space-y-8 border border-gray-700"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">Carrier Agreement Form</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Column */}
          <div className="space-y-4">
            <Input label="Company Name" name="companyName" required />
            <Input label="DBA (If Any)" name="dba" />
            <Input label="City" name="city" required />
            <Input label="State / Province / Region" name="state" required />
            <Input label="ZIP / Postal Code" name="zip" required />
            <Input label="Address Line 1" name="address" required />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Input label="Phone Number" name="phone" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="MC #" name="mc" required />
            <Input label="FEIN/SSN" name="fein" required />
            <Input label="Number of Trucks" name="trucks" type="number" required />
            <Input label="Number of Drivers" name="drivers" type="number" required />
          </div>

        </div>

        {/* Invoice Section */}
        <div className="space-y-2">
          <label className="font-medium text-gray-200">Do you factor your invoices?</label>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0">
            <Radio label="Yes" name="factorInvoices" />
            <Radio label="No" name="factorInvoices" />
          </div>
        </div>

        {/* Equipment Field */}
        <Input label="What type of equipment do you have?" name="equipment" required />

        {/* Optional Attachments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FileInput label="MC Authority (Optional)" name="mc_authority" />
          <FileInput label="NOA/Void Check (Optional)" name="noa_void_check" />
          <FileInput label="W9 Form (Optional)" name="w9_form" />
          <FileInput label="Certificate of Insurance (Optional)" name="certificate_of_insurance" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-lg font-bold rounded-lg transition-all duration-300"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

/* ----- REUSABLE COMPONENTS ----- */

const Input = ({ label, name, required, type = "text" }) => (
  <div>
    <label className="block text-gray-300 mb-1">{label}{required && <span className="text-red-500"> *</span>}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 bg-[#1f2937] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const FileInput = ({ label, name }) => (
  <div>
    <label className="block text-gray-300 mb-1">{label}</label>
    <input
      type="file"
      name={name}
      className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-[#1f2937] text-gray-300"
    />
  </div>
);

const Radio = ({ label, name }) => (
  <label className="flex items-center space-x-2 text-gray-300">
    <input
      type="radio"
      name={name}
      value={label}
      className="form-radio h-4 w-4 text-blue-600"
      required
    />
    <span>{label}</span>
  </label>
);

export default CarrierAgreementForm;
