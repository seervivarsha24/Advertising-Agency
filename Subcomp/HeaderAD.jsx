import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronUp, FaChevronDown, FaSun, FaMoon } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import profile from "../Images/profile.png";
import secure from "../Images/authorization.png";
import logout from "../Images/logout.png";

function AdHeader({ darkMode, toggleDarkMode, isSidebarExpanded, setIsSidebarExpanded }) {
  const [isHeaderAdsOpen, setIsHeaderAdsOpen] = useState(false);
  const [isHeaderDepositOpen, setIsHeaderDepositOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 p-4 flex justify-between items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <button
        className={`flex items-center text-black transition-all duration-300 outline-none ${
          isSidebarExpanded ? "translate-x-[220px]" : "translate-x-20"
        }`}
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
      >
        <FaBars size={20} />
      </button>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsHeaderDepositOpen(!isHeaderDepositOpen)}
          >
            <span>Deposit</span>
            {isHeaderDepositOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </div>
          {isHeaderDepositOpen && (
            <ul className="absolute top-8 right-0 bg-white text-black shadow-md rounded-md w-40">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/DepositMoney">Deposit Money</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/DepositLog">Deposit Log</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsHeaderAdsOpen(!isHeaderAdsOpen)}
          >
            <span>Advertisements</span>
            {isHeaderAdsOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </div>
          {isHeaderAdsOpen && (
            <ul className="absolute top-8 right-0 bg-white text-black shadow-md rounded-md w-40">
              <li className="px-4 py-2 hover:bg-gray-200"><Link to="/AllAds">All Ads</Link></li>
              <li className="px-4 py-2 hover:bg-gray-200"><Link to="/CreateAds">Create Ads</Link></li>
              <li className="px-4 py-2 hover:bg-gray-200"><Link to="/AdReports">Ad Reports</Link></li>
            </ul>
          )}
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center cursor-pointer" onClick={toggleDarkMode}>
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-600 text-xl" />
            )}
          </div>
          <div className="relative">
            <IoNotificationsOutline className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              5
            </span>
          </div>
          <div
            className="flex items-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen && (
              <ul className="absolute top-12 right-5 mt-4 bg-white text-black shadow-md rounded-md w-48 border border-gray-200 z-10">
                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <span className="mr-2">
                    <img src={profile} className="w-6 h-6" alt="Profile" />
                  </span>
                  <Link to="/ProfileSetting">Profile Settings</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <span className="mr-2">
                    <img src={secure} className="w-6 h-6" alt="2FA Security" />
                  </span>
                  <Link to="/2FAsecurity">2FA Security</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                  <span className="mr-2">
                    <img src={logout} className="w-6 h-6" alt="Logout" />
                  </span>
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdHeader;