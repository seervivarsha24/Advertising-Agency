
import React from "react";
import { Toaster } from "../components/ui/toaster.jsx";
import { Toaster as Sonner } from "../components/ui/sonner.jsx";
import { TooltipProvider } from "../components/ui/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index2.jsx";
// import Campaigns from "./pages/Campaigns";
// import Audience from "./pages/Audience";
// import Keywords from "./pages/Keywords";
// import Creatives from "./pages/Creatives";
// import Budget from "./pages/Budget";
// import Recommendations from "./pages/Recommendations";
// import Alerts from "./pages/Alerts";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AdvertiserDash1 = () => (
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

export default AdvertiserDash1;
