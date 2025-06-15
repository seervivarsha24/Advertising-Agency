
import React from "react";
import { Dashboard } from "../components/Dashboard.jsx";
import { Header } from "../components/Header1.jsx";
import { 
  ChartBar, 
  Users, 
  DollarSign, 
  Lightbulb, 
  TrendingUp, 
  Bell, 
  List,
  ArrowLeft,
  ArrowRight, 
  LayoutDashboard,
  ChartLine,
  Menu
} from "lucide-react"; 
import { sidebarItems } from "../constants/sidebarItems.js";
import { Sidebar } from "../components/Sidebar.jsx";
import { useState } from "react";

const Index2 = () => {
  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="flex h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={sidebarItems}/>
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
              <Header collapsed={collapsed} setCollapsed={setCollapsed} />
              <main className="flex-1 overflow-y-auto  bg-[#fff] mt-16">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index2;
