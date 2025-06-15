import { Header } from "../components/Header1.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { BudgetUtilization } from "../components/BudgetUtilization.jsx";
import { useState } from "react";
import { sidebarItems } from "../constants/sidebarItems.js";

const Budget = () => {
  const [collapsed,setCollapsed]=useState(false);
  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={sidebarItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <main className="p-6 md:p-12 bg-[#fff] mt-16">
          <div>
            <h1 className="text-3xl font-bold mb-2">Budget</h1>
            <p className="text-gray-500">Track and manage your advertising budget</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
            <BudgetUtilization />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Budget;
