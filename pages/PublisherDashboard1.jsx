import { Toaster } from "../components/ui/toaster.jsx";
import { Toaster as Sonner } from "../components/ui/sonner.jsx";
import { TooltipProvider } from "../components/ui/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Index from "./Index.jsx";
import NotFound from "./NotFound.jsx";
import Sidebar from "../components/PublisherSidebar1.jsx";
import ManageDomain from "./ManageDomain.jsx";
import Advertisements from "./Advertisements.jsx";
import Withdraw from "./Withdraw.jsx";
import WithdrawMoney from "./WithdrawMoney.jsx";
import WithdrawPages from "./WithdrawPages.jsx";
import PerDayAdReports from "./PerDayAdReports.jsx";
import PerDayEarningLogs from "./PerDayEarningLogs.jsx";
import SupportTicket from "./PublisherSupportTicket.jsx";
import ProfileSetting from "./PublisherProfileSetting.jsx";
import TwoFactorSecurity from "./TwoFactorSecurity.jsx";

const queryClient = new QueryClient();

const PublisherDashboard1 = () => (
  
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Index />
      {/* <Campaigns />
      <Audience />
      <Keywords />
      <Creatives />
      <Budget />
      <Recommendations />
      <Alerts />
      <NotFound /> */}
    </TooltipProvider>
  </QueryClientProvider>
      
);

export default PublisherDashboard1;
