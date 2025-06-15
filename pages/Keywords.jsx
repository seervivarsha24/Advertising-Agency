
import React from "react";
import { Header } from "../components/Header1.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { KeywordPerformance } from "../components/KeywordPerformance.jsx";
import "./Keywords.css";
import { useState } from "react";
import { sidebarItems } from "../constants/sidebarItems.js";

const Keywords = () => {
  const [collapsed,setCollapsed]=useState(false);
  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={sidebarItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <main className="p-6 md:p-12 bg-[#fff] mt-16">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tags</h1>
            <p className="text-gray-500">Track and analyze tag performance</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mt-6">
            <KeywordPerformance />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Keywords;
