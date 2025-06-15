import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaMoon, FaSun } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

const PublisherHeader = () => {
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-md z-10">
      <header className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex items-center justify-between p-4">
          {/* Logo or Title */}
          <h1 className="text-xl font-bold text-blue-600">AdsRock</h1>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Withdraw Dropdown */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setIsWithdrawOpen(!isWithdrawOpen)}
              >
                <span>Withdraw</span>
                {isWithdrawOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
              </div>
              {isWithdrawOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Withdraw Money</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Withdraw Log</li>
                </ul>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  🌐
                </div>
              </div>
              {isLanguageOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Chinese</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hindi</li>
                </ul>
              )}
            </div>

            {/* Dark/Light Mode Toggle */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-gray-600 text-xl" />
              )}
            </div>

            {/* Notification Icon */}
            <div className="relative">
              <IoNotificationsOutline className="text-2xl cursor-pointer" />
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                5
              </span>
            </div>

            {/* Admin Profile */}
            <div className="w-10 h-10 bg-blue-300 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PublisherHeader;
