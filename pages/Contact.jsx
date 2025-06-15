import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PhoneIcon, AtSymbolIcon,MapPinIcon } from '@heroicons/react/20/solid';

function ContactUs() {
  return (
    <div>
      <div style={{ backgroundColor: '#0B2238' }}>
        <Header style={{ color: "FFFFFF" }} />
      </div>
      
      <div className="min-h-screen flex items-center justify-center px-6 lg:px-16 mt-20" style={{ backgroundColor: '#0B2238' }}>
        <div className="w-full max-w-6xl flex flex-col lg:flex-row rounded-lg overflow-hidden" style={{ backgroundColor: '#0B2238' }}>
          
          {/* Left Section */}
          <div className="text-white p-8 lg:w-1/2 flex flex-col justify-center space-y-8">
            <h1 className="text-5xl font-bold">Contact us</h1>
            <p className="text-sm">Any questions or remarks? Just write us a message!</p>

            {/* Contact Details */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-purple-700 p-3 rounded-full">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <span>+1 002 297 0112</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-purple-700 p-3 rounded-full">
                  <AtSymbolIcon className="h-6 w-6 text-white" />
                </div>
                <span>support@mail.com</span>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <div className="bg-purple-700 p-3 rounded-full">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <span>Sleeknote ApS Jens Baggesens Vej 90A, 8200 Aarhus</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-8 w-3/4 lg:w-1/2 flex flex-col justify-center space-y-4 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-900">Send us a message</h2>

            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-purple-900">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="ex. john@mail.com"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
              />
            </div>

            {/* Name Field */}
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-purple-900">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="ex. John Doe"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-semibold text-purple-900">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type Message Here..."
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
