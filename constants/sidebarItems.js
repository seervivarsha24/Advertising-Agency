import { 
  Globe, 
  Megaphone, 
  Wallet,
  FileText, 
  BarChart2, 
  MessageSquare, 
  User, 
  Shield, 
  LogOut,
  Users, 
  DollarSign, 
  Lightbulb, 
  TrendingUp, 
  Bell, 
  List,
  LayoutDashboard,
  ChartLine,
} from "lucide-react";

export const sidebarItems = [
      { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/AdvertiserDash" },
      { icon: <ChartLine size={20} />, label: "Campaigns", path: "/AdvertiserDash/campaigns" },
      { icon: <Users size={20} />, label: "Audience", path: "/AdvertiserDash/audience" },
      { icon: <List size={20} />, label: "Tags", path: "/AdvertiserDash/keywords" },
      { icon: <TrendingUp size={20} />, label: "Ad Creatives", path: "/AdvertiserDash/creatives" },
      { icon: <DollarSign size={20} />, label: "Budget", path: "/AdvertiserDash/budget" },
      { icon: <Lightbulb size={20} />, label: "Recommendations", path: "/AdvertiserDash/recommendations" },
      { icon: <Bell size={20} />, label: "Alerts", path: "/AdvertiserDash/alerts" },
    ];

export const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/PublisherDash" },
    { icon: <Globe size={20} />, label: 'Manage Domain', path: '/PublisherDash/manage-domain' },
    { icon: <Megaphone size={20} />, label: 'Advertisements', path: '/PublisherDash/advertisements' },
    { icon: <Wallet size={20} />, label: 'Withdraw Money', path: '/PublisherDash/withdraw/money' },
    { icon: <Wallet size={20} />, label: 'Withdraw Pages', path: '/PublisherDash/withdraw/pages'  },
    { icon: <BarChart2 size={20} />, label: 'Per Day Ad Reports', path: '/PublisherDash/per-day-ad-reports' },
    { icon: <FileText size={20} />, label: 'Per Day Earning Logs', path: '/PublisherDash/per-day-earning-logs' },
    { icon: <MessageSquare size={20} />, label: 'Support Ticket', path: '/PublisherDash/support-ticket' },
    { icon: <User size={20} />, label: 'Profile Setting', path: '/PublisherDash/profile-setting' },
    { icon: <Shield size={20} />, label: '2FA Security', path: '/PublisherDash/2fa-security' },
    { icon: <LogOut size={20} />, label: 'Logout', path: '/' },
];
 