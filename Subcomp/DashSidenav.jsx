import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDarkMode } from "../Context/DarkModeContext"; // Import useDarkMode
import Logo from "../Images/logoopng@2x.png";
import adver from "../Images/advertisement (1).png";
import home from "../Images/home.png";
import depo from "../Images/retirement.png";
import trans from "../Images/money-transfer.png";
import perday from "../Images/log.png";
import support from "../Images/support-ticket.png";
import logout from "../Images/logout.png";
import "../assets/css/bootstrap.min.css";

function DashSidebar({ isSidebarExpanded }) {
  const { darkMode } = useDarkMode(); // Get darkMode from context
  const [isSidebarAdsOpen, setIsSidebarAdsOpen] = useState(false);
  const [isSidebarDepositOpen, setIsSidebarDepositOpen] = useState(false);
  const[isHovered,setIsHovered]=useState(false);
  // const handleMouseEnter=()=>{
  //   // setIsHovered(true);
  //   isSidebarExpanded?"w-[270px]" : "w-20";
  // }
  const handleMounseEnter = () => setIsHovered(true);
  const handleMounseLeave = () => setIsHovered(false);

  return (
    <aside
      className={`left-sidebar with-vertical fixed h-full border-r border-solid border-[#ebf1f6] bg-[#fff] block z-[99] left-0 right-0  transition duration-700 ease-in-out ${
        isSidebarExpanded ? "w-[270px]" : "w-20"
      } ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}
      // onMouseEnter={handleMouseEnter}
      // onMouseEnter={()=>}
    >
      <div className="p-4 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        {isSidebarExpanded && <h1 className="text-2xl font-bold ml-4">AdsRock</h1>}
      </div>
      <nav className="mx-auto max-w-[1200px] overflow-y-auto h-[cal(100vh-175px)] rounded-[7px] w-full">
        <ul className="list-none p-0 mt-0 mb-1">
          <li className="flex items-center px-4 py-3 hover:bg-blue-50 hover:text-[#5d87ff] dark:hover:bg-gray-700 rounded-lg cursor-pointer">
            <img src={home} alt="Home" className="w-8 h-8" />
            {isSidebarExpanded && <span className="ml-4"><Link to="/AdvertiserDash" className="!no-underline">Dashboard</Link></span>}
          </li>
          <li>
            <div
              className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 hover:text-[#5d87ff] dark:hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => setIsSidebarAdsOpen(!isSidebarAdsOpen)}
            >
              <div className="flex items-center">
                <img src={adver} alt="Ads" className="w-8 h-8" />
                {isSidebarExpanded && <span className="ml-4">Advertisements</span>}
              </div>
              {isSidebarExpanded && (isSidebarAdsOpen ? <FaChevronUp /> : <FaChevronDown />)}
            </div>
            {isSidebarAdsOpen && isSidebarExpanded && (
              <ul className="ml-16 space-y-1 space-x-3">
                <li className="hover:bg-blue-50 hover:text-[#5d87ff]"><Link to="/AllAds" className="!no-underline">All Ads</Link></li>
                <li className="hover:bg-blue-50 hover:text-[#5d87ff]"><Link to="/CreateAds" className="!no-underline">Create Ad</Link></li>
                <li className="hover:bg-blue-50 hover:text-[#5d87ff]"><Link to="/AdReports" className="!no-underline">Ad Reports</Link></li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 hover:text-[#5d87ff] dark:hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => setIsSidebarDepositOpen(!isSidebarDepositOpen)}
            >
              <div className="flex items-center">
                <img src={depo} alt="Deposit" className="w-8 h-8" />
                {isSidebarExpanded && <span className="ml-4">Deposit Plans</span>}
              </div>
              {isSidebarExpanded && (isSidebarDepositOpen ? <FaChevronUp /> : <FaChevronDown />)}
            </div>
            {isSidebarDepositOpen && isSidebarExpanded && (
              <ul className="ml-12 space-y-1">
                <li className="hover:bg-blue-50 hover:text-[#5d87ff]"><Link to="/DepositMoney" className="!no-underline">Deposit Money</Link></li>
                <li className="hover:bg-blue-50 hover:text-[#5d87ff]"><Link to="/DepositLog" className="!no-underline">Deposit Log</Link></li>
              </ul>
            )}
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-blue-50 hover:text-[#5d87ff] dark:hover:bg-gray-700 rounded-lg cursor-pointer">
            <img src={trans} alt="Transactions" className="w-8 h-8" />
            {isSidebarExpanded && <span className="ml-4"><Link to="/TransactionLog" className="!no-underline">Transaction Log</Link></span>}
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-blue-50 hover:text-[#5d87ff] dark:hover:bg-gray-700 rounded-lg cursor-pointer">
            <img src={perday} alt="Logs" className="w-8 h-8" />
            {isSidebarExpanded && <span className="ml-4"><Link to="/PerDayLogs" className="!no-underline">Per Day Logs</Link></span>}
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-blue-50 hover:text-[#5d87ff] dark:hover:bg-gray-700 rounded-lg cursor-pointer">
            <img src={support} alt="Support" className="w-8 h-8" />
            {isSidebarExpanded && <span className="ml-4"><Link to="/SupportTicket" className="!no-underline">Support Ticket</Link></span>}
          </li>
          <li className="flex items-center px-4 py-3 text-red-500 hover:bg-red-600 hover:text-white rounded-lg cursor-pointer">
            <img src={logout} alt="Logout" className="w-8 h-8" />
            {isSidebarExpanded && <span className="ml-4">Logout</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default DashSidebar;