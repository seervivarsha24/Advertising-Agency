import React, { useState } from "react";
import {
  FaEye,
  FaMousePointer,
  FaChartPie,
  FaAd,
  FaBalanceScale,
  FaPiggyBank,
  FaExchangeAlt,
  FaChevronDown,
  FaChevronUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

const PublisherSidebar = ({ darkMode }) => {
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-blue-600 text-white"
      } shadow-md`}
    >
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Publisher Panel</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-blue-700 font-bold">
            <a>HOME</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/PublisherDash">Dashboard</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/manage-domain">Manage Domain</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/advertisements">Advertisements</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsWithdrawOpen(!isWithdrawOpen)}
            >
              <span>Withdraw</span>
              {isWithdrawOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isWithdrawOpen && (
              <ul className="ml-4 mt-2">
                <li className="py-1">
                  <a href="/withdraw/money">Withdraw Money</a>
                </li>
                <li className="py-1">
                  <a href="/withdraw/logs">Withdraw Logs</a>
                </li>
              </ul>
            )}
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/per-day-ad-reports">Per Day Ad Reports</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/per-day-earning-logs">Per Day Earning Logs</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/support-ticket">Support Ticket</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/profile-setting">Profile Setting</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/2fa-security">2FA Security</a>
          </li>
          <li className="px-4 py-2 hover:bg-red-700 text-red-300">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const PublisherHeader = ({ darkMode, toggleDarkMode }) => {
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-64 w-[calc(100%-16rem)] ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-black"
      } shadow-md z-10`}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-blue-600">AdsRock</h1>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsWithdrawOpen(!isWithdrawOpen)}
            >
              <span>Withdraw</span>
              {isWithdrawOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </div>
            {isWithdrawOpen && (
              <ul
                className={`absolute right-0 mt-2 ${
                  darkMode ? "bg-gray-900 text-gray-200" : "bg-white"
                } shadow-md rounded-md w-40`}
              >
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Withdraw Money
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Withdraw Log
                </li>
              </ul>
            )}
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-600 text-xl" />
            )}
          </div>
          <IoNotificationsOutline className="text-2xl cursor-pointer" />
          <div className="w-10 h-10 bg-blue-300 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

const PublisherDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <PublisherSidebar darkMode={darkMode} />
      <div className="ml-64 w-full">
        <PublisherHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className={`mt-8 p-6 ${darkMode ? "text-gray-200" : "text-gray-900"}`}>
          {/* Content Section */}
        <div className="mt-20 p-6">
          {/* Top Cards - Vertically stacked */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
                label: "Total Impression",
                value: 0,
                bgColor: "bg-blue-50",
                icon: <FaEye className="text-xl text-blue-500" />,
                height: "h-32"
              },
              {
                label: "Total Clicked",
                value:0,
                bgColor: "bg-yellow-50",
                icon: <FaMousePointer className="text-xl text-yellow-500" />,
                height: "h-32"
              },
              {
                label: "Remain Impression Credit",
                value: 0,
                bgColor: "bg-blue-100",
                icon: <FaChartPie className="text-xl text-blue-600" />,
                height: "h-32"
              },
              {
                label: "Remain Click Credit",
                value: 0,
                bgColor: "bg-red-50",
                icon: <FaMousePointer className="text-xl text-red-500" />,
                height: "h-32"
              },
              {
                label: "Total Advertises",
                value: 0,
                bgColor: "bg-green-50",
                icon: <FaAd className="text-xl text-green-500" />,
                height: "h-32"
              },
              {
                label: "Remaining Balance",
                value: 0,
                bgColor: "bg-blue-50",
                icon: <FaBalanceScale className="text-xl text-blue-500" />,
                height: "h-32"
              },
              {
                label: "Total Deposited",
                value: 0,
                bgColor: "bg-green-100",
                icon: <FaPiggyBank className="text-xl text-green-600" />,
                height: "h-32"
              },
              {
                label: "Total Transaction",
                value: 0,
                bgColor: "bg-blue-50",
                icon: <FaExchangeAlt className="text-xl text-blue-500" />,
                height: "h-32"
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-md ${card.bgColor} shadow-md flex items-center justify-between hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out ${card.height}`}
              >
                <div className="flex items-center gap-3 ">
                  
                <div className="text-5xl"> {/* Increase the icon size here */}
      {card.icon}
    </div>
                  <p className="text-sm text-gray-600 font-medium">{card.label}</p>
                </div>
                <p className="text-xl font-bold text-gray-900">{card.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Updates - Vertically stacked */}
        <div
  className={`${
    darkMode ? "bg-gray-900 text-gray-200" : "bg-white"
  } p-6 min-h-screen`}
>
      {/* Revenue Updates Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Revenue Updates</h2>
          <select className="border bg-gray-100 p-2 rounded">
            <option>March 2025</option>
          </select>
        </div>
        <p className="text-gray-500 mb-6">Overview of Profit</p>

        {/* Chart Placeholder */}
        <div className="bg-gray-50 rounded h-40 mb-6">
          {/* Placeholder for Chart (use a library like Chart.js or Recharts) */}
        </div>

        {/* Total Earnings */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400">Total Earnings</p>
            <h3 className="text-3xl font-semibold">$63,489.50</h3>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <span className="h-3 w-3 bg-blue-500 rounded-full mr-2"></span>
              <p className="text-gray-500">Earnings this month</p>
            </div>
            <p className="font-medium text-gray-700">$48,820</p>

            <div className="flex items-center mt-4">
              <span className="h-3 w-3 bg-teal-400 rounded-full mr-2"></span>
              <p className="text-gray-500">Expense this month</p>
            </div>
            <p className="font-medium text-gray-700">$26,498</p>
          </div>
        </div>

        <button className="mt-4 bg-blue-600 text-white p-2 rounded">View Full Report</button>
      </div>

      {/* Yearly Breakup Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">$36,358</h2>
            <p className="text-gray-500">+9% last year</p>
          </div>

          {/* Yearly Breakup Donut Chart Placeholder */}
          <div className="bg-gray-50 h-20 w-20 rounded-full">
            {/* Placeholder for Donut Chart */}
          </div>
        </div>
      </div>

      {/* Monthly Earnings Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700">$6,820</h2>
        <p className="text-gray-500">+9% last year</p>
      </div>
    </div>

      
        
     
        </div>
      </div>
    </div>
  );
};

export default PublisherDashboard;
