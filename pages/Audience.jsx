import { Header } from "../components/Header1.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { AudienceInsights } from "../components/AudienceInsights.jsx";
import { DashboardCard } from "../components/DashboardCard.jsx";
import { useState } from "react";
import { sidebarItems } from "../constants/sidebarItems.js";

const Audience = () => {
  const [collapsed,setCollapsed]=useState(false);
  return (
    <div className="h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={sidebarItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <main className="p-6 md:p-12 bg-[#fff] mt-16">
          <div>
            <h1 className="text-3xl font-bold mb-2">Audience</h1>
            <p className="text-gray-500">Analyze your audience demographics and behavior</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <AudienceInsights />

            <DashboardCard title="Audience Engagement">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-sm mb-2">Top Engagement Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Average Session Duration</span>
                      <span className="font-medium">2m 45s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pages Per Session</span>
                      <span className="font-medium">3.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Bounce Rate</span>
                      <span className="font-medium">42%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-sm mb-2">Top Audience Locations</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">United States</span>
                      <span className="font-medium">42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">United Kingdom</span>
                      <span className="font-medium">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Germany</span>
                      <span className="font-medium">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Canada</span>
                      <span className="font-medium">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Australia</span>
                      <span className="font-medium">6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Audience;
