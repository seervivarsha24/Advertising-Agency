
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { menuItems } from "../constants/sidebarItems.js";
import { Header } from "../components/Header1.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { 
  Calendar as CalendarIcon, 
  ChevronDown,
  Download,
  Filter,
  BarChart2
} from "lucide-react";
import { useToast } from "../hooks/use-toast.jsx";

// Sample data for the reports
const adReportsData = [
  {
    id: 1,
    date: "2023-12-20",
    domain: "example1.com",
    impressions: 4562,
    clicks: 187,
    ctr: "1.91%",
    earnings: "$45.67",
  },
  {
    id: 2,
    date: "2023-12-19",
    domain: "example1.com",
    impressions: 5241,
    clicks: 203,
    ctr: "1.97%",
    earnings: "$52.14",
  },
  {
    id: 3,
    date: "2023-12-18",
    domain: "example2.com",
    impressions: 3879,
    clicks: 175,
    ctr: "1.93%",
    earnings: "$38.25",
  },
  {
    id: 4,
    date: "2023-12-18",
    domain: "example1.com",
    impressions: 4123,
    clicks: 179,
    ctr: "1.92%",
    earnings: "$41.35",
  },
  {
    id: 5,
    date: "2023-12-17",
    domain: "example3.com",
    impressions: 2986,
    clicks: 158,
    ctr: "1.94%",
    earnings: "$29.54",
  },
  {
    id: 6,
    date: "2023-12-17",
    domain: "example1.com",
    impressions: 3865,
    clicks: 174,
    ctr: "1.91%",
    earnings: "$37.40",
  },
  {
    id: 7,
    date: "2023-12-16",
    domain: "example2.com",
    impressions: 4732,
    clicks: 194,
    ctr: "1.99%",
    earnings: "$47.65",
  },
];

// Chart data
const chartData = [
  { date: "Dec 14", impressions: 4120, clicks: 178, earnings: 41.23 },
  { date: "Dec 15", impressions: 3890, clicks: 172, earnings: 38.76 },
  { date: "Dec 16", impressions: 4732, clicks: 194, earnings: 47.65 },
  { date: "Dec 17", impressions: 6851, clicks: 332, earnings: 66.94 },
  { date: "Dec 18", impressions: 8002, clicks: 454, earnings: 79.60 },
  { date: "Dec 19", impressions: 5241, clicks: 203, earnings: 52.14 },
  { date: "Dec 20", impressions: 4562, clicks: 187, earnings: 45.67 },
];

// Available domains
const domains = ["All Domains", "example1.com", "example2.com", "example3.com"];

const PerDayAdReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All Domains");
  const { toast } = useToast();

  // Filter the report data based on search term and selected domain
  const filteredReports = adReportsData.filter((report) => {
    const matchesSearch = report.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === "All Domains" || report.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  // Handle export reports
  // const handleExport = () => {
  //   toast({
  //     title: "Exporting Reports",
  //     description: "Your reports are being exported to CSV.",
  //   });
  // };

  const handleExport = () => {
  if (filteredReports.length === 0) {
    toast({
      title: "No Data",
      description: "There are no reports to export.",
    });
    return;
  }

  const csvRows = [
    ["Date", "Domain", "Impressions", "Clicks", "CTR", "Earnings"], // headers
    ...filteredReports.map((report) => [
      report.date,
      report.domain,
      report.impressions,
      report.clicks,
      report.ctr,
      report.earnings,
    ]),
  ];

  const csvContent = csvRows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "per_day_ad_reports.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  toast({
    title: "Export Successful",
    description: "Your reports have been downloaded.",
  });
};


  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Per Day Ad Reports</h1>
            <p className="text-[#64748b]">
              Detailed daily reports of your advertisement performance
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>
                Daily performance metrics for the past week
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
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
                  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="impressions" name="Impressions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="clicks" name="Clicks" fill="#3e76d1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Daily Reports</CardTitle>
                  <CardDescription>
                    <p className="mt-1">Detailed breakdown of your daily advertisement performance</p>
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={handleExport}
                >
                  <Download className="h-4 w-4 mr-2" /> Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                    <Input
                      placeholder="Search domains..."
                      className="!pl-9 max-w-xs"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-[#64748b]" />
                    <Input
                      type="date"
                      className="max-w-xs"
                      defaultValue="2023-12-20"
                    />
                  </div>
                  <Select 
                    value={selectedDomain} 
                    onValueChange={setSelectedDomain}
                  >
                    <SelectTrigger className="max-w-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {domains.map((domain) => (
                        <SelectItem key={domain} value={domain}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Domain</TableHead>
                        <TableHead className="text-right">Impressions</TableHead>
                        <TableHead className="text-right">Clicks</TableHead>
                        <TableHead className="text-right">CTR</TableHead>
                        <TableHead className="text-right">Earnings</TableHead>
                        <TableHead className="text-right">Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReports.length > 0 ? (
                        filteredReports.map((report) => (
                          <TableRow key={report.id}>
                            <TableCell>{report.date}</TableCell>
                            <TableCell className="font-semibold">{report.domain}</TableCell>
                            <TableCell className="text-right">{report.impressions.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{report.clicks.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{report.ctr}</TableCell>
                            <TableCell className="text-right">{report.earnings}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <BarChart2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className="h-24 text-center">
                            No reports found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#64748b]">
                    Showing {filteredReports.length} of {adReportsData.length} reports
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

export default PerDayAdReports;
