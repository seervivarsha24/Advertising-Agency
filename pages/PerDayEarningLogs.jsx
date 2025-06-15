
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { menuItems } from "../constants/sidebarItems.js";
import { Header } from "../components/Header1.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { 
  Calendar as CalendarIcon, 
  Download,
  Search,
  DollarSign,
  ArrowDown,
  ArrowUp,
  TrendingUp
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

// Sample data for earnings
const earningsData = [
  {
    id: 1,
    date: "2023-12-20",
    domain: "example1.com",
    adType: "Banner",
    impressions: 4562,
    earnings: "$45.67",
  },
  {
    id: 2,
    date: "2023-12-19",
    domain: "example1.com",
    adType: "Native",
    impressions: 3241,
    earnings: "$32.14",
  },
  {
    id: 3,
    date: "2023-12-19",
    domain: "example2.com",
    adType: "Banner",
    impressions: 2879,
    earnings: "$28.25",
  },
  {
    id: 4,
    date: "2023-12-18",
    domain: "example1.com",
    adType: "Popup",
    impressions: 1123,
    earnings: "$21.35",
  },
  {
    id: 5,
    date: "2023-12-18",
    domain: "example3.com",
    adType: "Video",
    impressions: 986,
    earnings: "$19.54",
  },
  {
    id: 6,
    date: "2023-12-17",
    domain: "example1.com",
    adType: "Banner",
    impressions: 3865,
    earnings: "$37.40",
  },
  {
    id: 7,
    date: "2023-12-17",
    domain: "example2.com",
    adType: "Native",
    impressions: 2732,
    earnings: "$27.65",
  },
  {
    id: 8,
    date: "2023-12-16",
    domain: "example1.com",
    adType: "Banner",
    impressions: 3532,
    earnings: "$35.20",
  },
];

// Chart data for earnings trend
const chartData = [
  { date: "Dec 14", earnings: 92.76 },
  { date: "Dec 15", earnings: 86.45 },
  { date: "Dec 16", earnings: 98.36 },
  { date: "Dec 17", earnings: 118.65 },
  { date: "Dec 18", earnings: 142.89 },
  { date: "Dec 19", earnings: 127.42 },
  { date: "Dec 20", earnings: 136.83 },
];

// Earnings summary cards
const summaryCards = [
  {
    title: "Today's Earnings",
    value: "$136.83",
    change: "+7.4%",
    trend: "up",
    background: "bg-blue-100"
  },
  {
    title: "This Week",
    value: "$803.36",
    change: "+12.3%",
    trend: "up",
    background: "bg-purple-100"
  },
  {
    title: "This Month",
    value: "$3,247.65",
    change: "+5.2%",
    trend: "up",
    background: "bg-amber-100"
  },
  {
    title: "All Time",
    value: "$15,432.98",
    change: "-",
    trend: "neutral",
    background: "bg-teal-100"
  },
];

const PerDayEarningLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("2023-12-14");
  const [endDate, setEndDate] = useState("2023-12-20");
  const { toast } = useToast();

  // Filter earnings data based on search term
  const filteredEarnings = earningsData.filter((earning) =>
    earning.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
    earning.adType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle export
  // const handleExport = () => {
  //   toast({
  //     title: "Exporting Earnings Report",
  //     description: "Your earnings report is being exported to CSV.",
  //   });
  // };

  const handleExport = () => {
  // Generate CSV content
  const headers = ["Date", "Domain", "Ad Type", "Impressions", "Earnings"];
  const rows = filteredEarnings.map((earning) => [
    earning.date,
    earning.domain,
    earning.adType,
    earning.impressions,
    earning.earnings,
  ]);

  const csvContent =
    [headers, ...rows]
      .map((row) =>
        row
          .map((field) =>
            typeof field === "string" && field.includes(",")
              ? `"${field}"`
              : field
          )
          .join(",")
      )
      .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "earnings_report.csv");
  link.click();

  // Show toast notification
  toast({
    title: "Exporting Earnings Report",
    description: "Your earnings report has been exported to CSV.",
  });
};


  // Calculate total earnings from filtered data
  const totalEarnings = filteredEarnings.reduce((acc, curr) => {
    return acc + parseFloat(curr.earnings.replace("$", ""));
  }, 0);
    
  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className=" h-screen bg-[#fff] ">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Per Day Earning Logs</h1>
            <p className="text-[#64748b]">
              Track and analyze your daily earnings across all domains
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4 mb-6">
            {summaryCards.map((card, i) => (
              <Card key={i} className={`${card.background} !border-none`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-[#64748b]">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  {card.trend !== "neutral" && (
                    <div className="flex items-center mt-1">
                      {card.trend === "up" ? (
                        <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={card.trend === "up" ? "text-green-500 text-sm" : "text-red-500 text-sm"}>
                        {card.change}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Earnings Trend</CardTitle>
              <CardDescription>
                Your earnings performance over the past week
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                    width={40}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                  <Line 
                    type="monotone" 
                    dataKey="earnings" 
                    stroke="#4f46e5" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Detailed Earnings Log</CardTitle>
                  <CardDescription>
                    Breakdown of your earnings by date, domain and ad type
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={handleExport}
                >
                  <Download className="h-4 w-4 mr-2" /> Export Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                    <Input
                      placeholder="Search domains or ad types..."
                      className="!pl-9 max-w-xs"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <div className="flex items-center space-x-2"> */}
                      <CalendarIcon className="h-4 w-4 hidden md:block text-[#64748b]" />
                      <span className="text-sm">From:</span>
                      <Input
                        type="date"
                        className="w-full md:w-auto justify-center items-center "
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    {/* </div> */}
                  </div>
                  <div className="flex items-center gap-[24px] md:gap-2">
                    <span className="text-sm">To:</span>
                    <Input
                      type="date"
                      className=" md:w-auto w-full items-center justify-center"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Domain</TableHead>
                        <TableHead>Ad Type</TableHead>
                        <TableHead className="text-right">Impressions</TableHead>
                        <TableHead className="text-right">Earnings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEarnings.length > 0 ? (
                        filteredEarnings.map((earning) => (
                          <TableRow key={earning.id}>
                            <TableCell>{earning.date}</TableCell>
                            <TableCell className="font-semibold">{earning.domain}</TableCell>
                            <TableCell>{earning.adType}</TableCell>
                            <TableCell className="text-right">{earning.impressions.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{earning.earnings}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="h-24 text-center">
                            No earnings found
                          </TableCell>
                        </TableRow>
                      )}
                      {filteredEarnings.length > 0 && (
                        <TableRow>
                          <TableCell colSpan={4} className="font-bold text-right">
                            Total:
                          </TableCell>
                          <TableCell className="font-bold text-right">
                            ${totalEarnings.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#64748b]">
                    Showing {filteredEarnings.length} of {earningsData.length} entries
                  </p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PerDayEarningLogs;
