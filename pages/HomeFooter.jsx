import React from "react";
import logo from "../Images/logoopng@2x.png";
import img from "../Images/image-1@2x.png";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <footer className="bg-gray-50 py-8 relative overflow-hidden mt-[60.4rem]">
      <div className="container px-6 sm:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mt-5">
        {/* Logo and description */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </div>
          <p className="text-[#6C7A87] text-[15.5px] font-medium mb-4 ">
            Rakon is a simple, elegant, and secure way to build your bitcoin and
            crypto portfolio.
          </p>
          <p className="text-gray-500 text-sm ">1989 Don Jackson Lane</p>
          <p className="text-gray-500 text-sm">
            Call us:{" "}
            <a href="tel:9599" className="text-blue-600">
            808-956-9599
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-gray-800 text-lg font-semibold mb-4">Social</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-gray-800 text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/About" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Affiliates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Legal & Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="text-gray-800 text-lg font-semibold mb-4">
            Subscribe
          </h4>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to get the latest news from us
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            <i className="fab fa-facebook-f text-gray-600"></i>
          </a>
          <a
            href="#"
            className="p-2 bg-gray-100 rounded-full hover:bg-blue-400 transition-colors duration-300"
          >
            <i className="fab fa-twitter text-gray-600"></i>
          </a>
          <a
            href="#"
            className="p-2 bg-gray-100 rounded-full hover:bg-pink-500 transition-colors duration-300"
          >
            <i className="fab fa-instagram text-gray-600"></i>
          </a>
          <a
            href="#"
            className="p-2 bg-gray-100 rounded-full hover:bg-blue-500 transition-colors duration-300"
          >
            <i className="fab fa-skype text-gray-600"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-gray-500">
          &copy; 2021 Steelthemes. All Rights Reserved.
        </p>
      </div>

      {/* Decorative Design Elements (Optional, can be customized) */}
      <div className="absolute top-2.5 left-[80%] right-[-70%] bottom-0 max-w-full max-h-full border-radius-lg overflow-hidden">
        <img
          src={img}
          alt="Decoration"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </footer>
  );
};

export default HomeFooter;
