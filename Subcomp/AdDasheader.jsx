import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronUp, FaChevronDown, FaSun, FaMoon } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDarkMode } from "../Context/DarkModeContext";  
import profile from "../Images/profile.png";
import secure from "../Images/authorization.png";
import logout from "../Images/logout.png";

function AdHeader({ isSidebarExpanded, setIsSidebarExpanded }) {
  const [isHeaderAdsOpen, setIsHeaderAdsOpen] = useState(false);
  const [isHeaderDepositOpen, setIsHeaderDepositOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();  // Use the context
  const timeoutRef=useRef(null);
  const handleMounseEnter = () =>{ 
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current);
    }
    setIsHeaderAdsOpen(true);
  };
  const handleMouseLeave =()=>{
    timeoutRef.current=setTimeout(()=>{
      setIsHeaderAdsOpen(false);
    },100);
  };
  const handleMoseEnter = () =>{ 
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current);
    }
    setIsHeaderDepositOpen(true);
  };
  const handleMoseLeave =()=>{
    timeoutRef.current=setTimeout(()=>{
      setIsHeaderDepositOpen(false);
    },100);
  };
  // const handleMouseLeave=()=>{
  //   setIsHovered(false);
  // }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 p-4 flex justify-between  items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <button
        className={`flex items-center transition-all hover:bg-blue-100 duration-700 !outline-0 ${
          darkMode ? "text-white" : "text-black"
        } ${isSidebarExpanded ? "transition duration-700 translate-x-[250px]" : "transition duration-700 translate-x-20"}`}
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        // onMouseLeave={handleMouseLeave}
      >
        <FaBars size={22} />
      </button>

      <div className="flex items-center space-x-4">
        {/* Deposit Dropdown */}
        <div className="relative"
        onMouseEnter={handleMoseEnter}
        onMouseLeave={handleMoseLeave}
        >
          <div
            className="flex items-center hover:text-[#5d87ff] hover:bg-blue-50 cursor-pointer"
            
          >
            <span>Deposit</span>
            {isHeaderDepositOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </div>
          {isHeaderDepositOpen && (
            <ul className={`absolute top-8 right-0  shadow-md rounded-md w-40 ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}>
              <li className="px-4 py-2 ">
                <Link to="/DepositMoney" className="!no-underline">Deposit Money</Link>
              </li>
              <li className="px-4 py-2">
                <Link to="/DepositLog" className="!no-underline">Deposit Log</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Ads Dropdown */}
        <div className=" relative"
          onMouseEnter={ handleMounseEnter }
          onMouseLeave={handleMouseLeave}
          >
          <div
            className="flex group hover:text-[#5d87ff] items-center cursor-pointer"
            // onClick={() => setIsHeaderAdsOpen(!isHeaderAdsOpen)}
            
          >
            <span>Advertisements</span>
            {isHeaderAdsOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </div>
          {isHeaderAdsOpen && (
            <ul className={`absolute top-8 right-0 shadow-md rounded-md w-40 ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
            >
              <li className="px-4 py-2"><Link to="/AllAds" className="!no-underline">All Ads</Link></li>
              <li className="px-4 py-2"><Link to="/CreateAds" className="!no-underline">Create Ads</Link></li>
              <li className="px-4 py-2"><Link to="/AdReports" className="!no-underline">Ad Reports</Link></li>
            </ul>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center cursor-pointer" onClick={toggleDarkMode}>
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-600 text-xl" />
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
            <IoNotificationsOutline className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              5
            </span>
          </div>

          {/* Profile Dropdown */}
          <div
            className="flex items-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen && (
              <ul className={`absolute top-12 right-5 mt-4 shadow-md rounded-md w-48 border ${
                darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-200"
              }`}>
                <li className="flex items-center px-4 py-2 cursor-pointer">
                  <img src={profile} className="w-6 h-6 mr-2" alt="Profile" />
                  <Link to="/ProfileSetting"className="!no-underline">Profile Settings</Link>
                </li>
                <li className="flex items-center px-4 py-2 cursor-pointer">
                  <img src={secure} className="w-6 h-6 mr-2" alt="2FA Security" />
                  <Link to="/2FAsecurity"className="!no-underline">2FA Security</Link>
                </li>
                <li className="flex items-center px-4 py-2 cursor-pointer text-red-600">
                  <img src={logout} className="w-6 h-6 mr-2" alt="Logout" />
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