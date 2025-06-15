import React, { useState, useEffect } from "react";
import {
  FaEye,
  FaBars,
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
import Visible from "../Images/visible.png";
import Home from "../Images/home.png";
import { IoNotificationsOutline } from "react-icons/io5";
//import Chartpage from "../Subcomp/Chart";
import { Link } from "react-router-dom";
import Gradientchart from "../Subcomp/Gradientchat";
import CampaignOverview from "../Subcomp/CampaignOverview";
import SimpleLineChart from "../Subcomp/Linechart";
import eye from "../Images/eye-care.png";
import click from "../Images/increase.png";
import pie from "../Images/pie-chart.png";
import ads from "../Images/advertising.png";
import balance from "../Images/balance.png";
import AdHeader from "../Subcomp/AdDasheader";
import AdSidebar from "../Subcomp/DashSidenav";
import "../assets/css/bootstrap.min.css";
import { Lightbulb } from "lucide-react";
//import { Avatar, Stack } from "@mui/material";
//import { LineChart } from "@mui/x-charts";


const Header = () => {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isAdsOpen, setIsAdsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const recommendations=[
    {
      id: 1,
      title: "Increase bid on high-converting keywords",
      description: "Your top 5 converting keywords have a low impression share. Increasing bids could lead to more conversions.",
      impact: "high",
      category: "Keywords",
    },
    {
      id: 2,
      title: "Optimize ad schedule timing",
      description: "Conversions are highest between 2-6 PM, but your ad spend is evenly distributed. Adjust your ad schedule.",
      impact: "medium",
      category: "Budget",
    },
    {
      id: 3,
      title: "Create mobile-specific ads",
      description: "65% of your traffic is mobile but your conversion rate is lower on mobile devices.",
      impact: "high",
      category: "Creatives",
    },
    {
      id: 4,
      title: "Expand to similar audiences",
      description: "There are untapped similar audiences that match your current high-converting segments.",
      impact: "medium",
      category: "Audience",
    },
  ];

  const clients = [
    { name: 'Acme Corp', campaigns: '$12,000', monthlySpend: '1,55%', roi: '150%', status: 'active' },
    { name: 'Globex', campaigns: '$3,550', monthlySpend: '7,250', roi: '180%', status: 'active' },
    { name: 'Soylent Corp', campaigns: '$7,250', monthlySpend: '180%', roi: '140%', status: 'active' },
    { name: 'Initech', campaigns: '$15 100', monthlySpend: '140%', roi: '140%', status: 'active' },
  ];

  const StatusIndicator = ({ status }) => (
    <span className={`inline-block w-full h-3 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
  );
  const assets = [
    { id: 1, src: "/creative1.png", alt: "Document" },
      { id: 2, src: "/creative2.png", alt: "Design" },
      { id: 3, src: "/creative3.jpg", alt: "Image" },
      { id: 4, src: "/creative4.jpg", alt: "User" },
  ];

  // Apply dark mode class to the <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <div>
          <AdHeader
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            isSidebarExpanded={isSidebarExpanded}
            setIsSidebarExpanded={setIsSidebarExpanded}
          />
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <AdSidebar darkMode={darkMode} isSidebarExpanded={isSidebarExpanded} />

          {/* Main Content */}
          <div className="mr-12 ml-32">
            <div
              className={`transition-all duration-300 ease-in-out ${
                isSidebarExpanded ? "" : ""
              } flex-grow dark:bg-gray-800 dark:text-gray-100`}
              >
            {/* Statistics Cards */}
              <div className="mt-28 max-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
                  {
                    [
                      {
                        label: "Total Impression",
                        value: 0,
                        bgColor: "bg-blue-50",
                        textColor: "text-blue-300",
                        icon: <img src={eye} className="w-12 h-12" />,
                      },
                      {
                        label: "Total Clicked",
                        value: 0,
                        bgColor: "bg-yellow-50",
                        textColor: "text-yellow-300",
                        icon: <img src={click} className="w-12 h-12" />,
                      },
                      {
                        label: "Remain Impression",
                        value: 0,
                        bgColor: "bg-blue-100",
                        textColor: "text-blue-300",
                        icon: <img src={pie} className="w-12 h-12" />,
                      },
                      {
                        label: "Total Advertises",
                        value: 0,
                        bgColor: "bg-green-50",
                        textColor: "text-green-500",
                        icon: <img src={ads} className="w-12 h-12" />,
                      },
                      {
                        label: "Remaining Balance",
                        value: 0,
                        bgColor: "bg-blue-50",
                        textColor: "text-blue-300",
                        icon: <img src={balance} className="w-12 h-12" />,
                      },
                    ].map((card, index) => (
                      <div
                        key={index}
                        className={`p-4 lg:w-48 lg:py-12 flex-grow rounded-xl ${card.bgColor} flex flex-col items-center justify-center dark:bg-gray-700`}
                        >
                        <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 dark:text-gray-50">
                          {card.icon}
                        </div>
                        <p
                          className={`text-base sm:text-lg font-semibold text-center mb-2 ${
                            card.textColor
                          }`}
                        >
                          {card.label}
                        </p>
                        <p className={`text-lg sm:text-xl font-bold ${card.textColor}`}>
                          {card.value}
                        </p>
                      </div>
                    ))
                  }
                </div>

                {/* First Row - Cards */}
                <div className="mb-[0.5rem] row mt-10 !ml-0 !mr-0">
                  <div className="col-lg-7 flex items-stretch !pl-0">
                    <div className="w-full">
                      <div className="mb-6 dark:bg-gray-700 rounded-xl w-full">
                        <div className="h-auto flex items-center justify-center">
                          <CampaignOverview className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 !pr-0">
                    <div className="card dark:bg-gray-700 rounded-xl p-4 w-full">
                      <h2 className="text-xl font-semibold mb-4 text-[#2a3547]">Client Summary</h2>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                          <thead className="text-gray-400 border-b">
                            <tr>
                              <th className="py-2 pr-4">Client</th>
                              <th className="py-2 pr-4">Campaigns</th>
                              <th className="py-2 pr-4">Monthly Spend</th>
                              <th className="py-2 pr-4">ROI</th>
                              <th className="py-2">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {clients.map((client, idx) => (
                              <tr key={idx} className="border-b last:border-none">
                                <td className="py-3 pr-4">{client.name}</td>
                                <td className="py-3 pr-4">{client.campaigns}</td>
                                <td className="py-3 pr-4">{client.monthlySpend}</td>
                                <td className="py-3 pr-4">{client.roi}</td>
                                <td className="py-3">
                                  <StatusIndicator status={client.status} />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="h-auto card dark:bg-gray-700 rounded-xl mt-4 p-[1.67rem]">
                      <div>
                        <div className="row">
                          <div className="col-lg-8">
                            <h2 className="text-xl font-semibold text-[#2a3547] dark:text-gray-200">
                              Today's Ad Report
                            </h2>
                            <div className="mt-4 flex items-center">
                              <span className="text-4xl font-bold text-[#2a3547] dark:text-white">
                                $36,358
                              </span>
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                                <svg
                                  className="w-4 h-4 text-green-500"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                  />
                                </svg>
                              </div>
                              <span className="text-green-500 text-sm font-medium">+9%</span>
                              <span className="text-gray-500 text-sm">last year</span>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <img src="/sales.png" alt=""className="mt-6" />
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="row mb-4 ">
                  {/* Monthly Transaction Report */}
                  <div className="col-lg-8 ">
                    <div className="card dark:bg-gray-700 p-6 rounded-xl w-full">
                      <h2 className="text-xl font-semibold text-[#2a3547] dark:text-white mb-4">
                        Monthly Transaction Report
                      </h2>
                      <div className=" w-full h-56 lg:h-auto flex items-center justify-center">
                        <div className="col-lg-8 !pr-0 !pl-0">
                          <Gradientchart />
                        </div>
                        <div class="col-lg-4">
                          <div class="flex flex-row items-center self-stretch mb-4 pb-1">
                            <div class="p-[7px] bg-[#5d87ff1a] rounded-[5px] mr-[1rem] flex items-center justify-center">
                              <i class="ti text-[#2463eb] text-[1.25rem]">
                                <img src="/dots-menu.png" className="" alt="" />
                              </i>
                            </div>
                          <div>
                          <h4 class="mb-0 text-[1.5rem] text-[#2a3547] font-semibold">$63,489.50</h4>
                          <p class="text-[0.875rem] mb-0">Total Earnings</p>
                        </div>
                      </div>

                      <div>
                        <div class="flex items-baseline mb-4">
                          <span class="w-[8px] h-[8px] text-[#fff] bg-blue-600 rounded-[50%] mr-[12px]"></span>
                          <div>
                            <p class="text-[0.875rem] mb-1">Earnings this month</p>
                            <h6 class="text-[1.125rem] text-[#2a3547] font-semibold mb-0">$48,820</h6>
                          </div>
                        </div>
                        <div class="flex items-baseline mb-4 pb-1">
                          <span class="w-[8px] h-[8px] text-[#fff] bg-blue-400 rounded-[50%] mr-[12px]"></span>
                          <div>
                            <p class="text-[0.875rem] mb-1">Expense this month</p>
                            <h6 class="text-[1.125rem] text-[#2a3547] font-semibold mb-0">$26,498</h6>
                          </div>
                        </div>
                        <div>
                          <button class="btn btn-primary w-100">
                            View Full Report
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className=" p-[1rem] card dark:bg-gray-700 rounded-xl w-full h-fit">
                  <h2 className="text-xl font-semibold text-[#2a3547] mb-4">Creative Assets</h2>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {assets.map((asset) => (
                      <div key={asset.id} className="w-auto h-[7rem] rounded-md overflow-hidden">
                        <img
                          src={asset.src}
                          alt={asset.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mx-1" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
                  </div>
                </div>
                <div className=" p-[1rem] card dark:bg-gray-700 rounded-xl w-full h-fit mt-4">
                  <div className="row">
                  <div className="col-lg-7">
                    <h2 className="text-xl font-semibold text-[#2a3547] dark:text-gray-200">
                      Budget Tracking
                    </h2>
                    <div className="mt-4 flex items-center">
                      <span className="text-4xl font-bold text-[#2a3547] dark:text-white">
                        $36,358
                      </span>
                    </div>
                    <div className="flex items-center mt-4 space-x-1">
                      <div className="flex items-center justify-center  w-6 h-6 rounded-full bg-green-100">
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </div>
                      <span className="text-green-500 text-sm font-medium">+9%</span>
                      <span className="text-gray-500 text-sm">last year</span>
                    </div>
                    
                  </div>
                  <div className="col-lg-4">
                    <div className=" flex mt-2 items-center">
                      <div className="w-[90%] h-[90%] relative">
                        <svg
                          className=" top-0 left-0 w-full h-full"
                          viewBox="0 0 36 36"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="3"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="3"
                            strokeDasharray="60, 100"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4 -mr-6 -ml-3">
                      <div className="inline-flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                        <span className="text-gray-500 text-sm">2025</span>
                      </div>
                      <div className="inline-flex items-center space-x-2 ml-4">
                        <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                        <span className="text-gray-500 text-sm">2024</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="row mb-4">
                <div className="card p-6 w-full h-fit">
                  <h2 className="text-xl font-semibold text-[#2a3547] mb-3 dark:text-gray-200">Optimization Suggestions</h2>
                    <div className="space-y-4">
                      {recommendations.map((recommendation) => (
                        <div key={recommendation.id} className="border rounded-lg p-4 hover:border-blue-200 transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <Lightbulb size={18} className="text-blue-600" />
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <h3 className="font-medium text-base">{recommendation.title}</h3>
                                {/* <Badge 
                                  className={cn(
                                    "ml-2",
                                    recommendation.impact === "high" ? "bg-red-500" : 
                                    recommendation.impact === "medium" ? "bg-yellow-500" : "bg-blue-500"
                                  )}
                                >
                                  {recommendation.impact} impact
                                </Badge> */}
                              </div>
                              <p className="text-gray-600 text-sm mt-1">{recommendation.description}</p>
                              <div className="flex justify-between items-center mt-3">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[#020817]">{recommendation.category}</div>
                                <button className="btn btn-primary inline-flex items-center h-[30px]">
                                  Apply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
