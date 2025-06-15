
import React from "react";
import Dashboard from "../components/PublisherDashboard.jsx";
import { Header } from "../components/Header1.jsx";
import { menuItems } from "../constants/sidebarItems.js";

import { Sidebar } from "../components/Sidebar.jsx";
import { useState } from "react";

const Index = () => {
  const [collapsed,setCollapsed]=useState(false);

    return (
      <div className="flex h-screen bg-[#fff]">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
        <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <main className="flex-1 overflow-y-auto  bg-[#fff] mt-16">
            <Dashboard />
          </main>
        </div>
      </div>
  );
};

export default Index;
