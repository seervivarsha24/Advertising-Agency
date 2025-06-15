import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PublisherDash from "../pages/PublisherDash";

const PublisherSidebar = () => {
  const [isAdsOpen, setIsAdsOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-blue-600 text-white shadow-md">
      {/* Logo and Title */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Publisher Panel</h1>
      </div>

      {/* Navigation Items */}
      <nav className="mt-4">
   
        <ul>
        <li className="px-4 py-2 hover:bg-blue-700 font-bold">
            <a>HOME</a>
          </li>
          {/* Dashboard */}
          <li className="px-4 py-2 hover:bg-blue-700 text-white">
            <a href="/PublisherDash">Dashboard</a>
          </li>
          {/* Manage Domain */}
          <li className="px-4 py-2 hover:bg-blue-700 font-bold">
            <a href="/manage-domain">Manage Domain</a>
          </li>

          {/* Advertisements */}
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/advertisements">Advertisements</a>
          </li>

          {/* Withdraw Dropdown */}
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

          {/* Per Day Ad Reports */}
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/per-day-ad-reports">Per Day Ad Reports</a>
          </li>

          {/* Per Day Earning Logs */}
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/per-day-earning-logs">Per Day Earning Logs</a>
          </li>

          {/* Support Ticket */}
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/support-ticket">Support Ticket</a>
          </li>

          {/* Profile Setting */}
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/profile-setting">Profile Setting</a>
          </li>

          {/* 2FA Security */}
          <li className="px-4 py-2 hover:bg-blue-700">
            <a href="/2fa-security">2FA Security</a>
          </li>

          {/* Logout */}
          <li className="px-4 py-2 hover:bg-red-700 text-red-300">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PublisherSidebar;
