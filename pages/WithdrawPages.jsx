
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
} from "../components/ui/table.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.jsx";
import { 
  FileText, 
  Search, 
  Check, 
  X, 
  FileDown, 
  Edit, 
  Copy 
} from "lucide-react";
import { useToast } from "../hooks/use-toast.jsx";

const withdrawalRequests = [
  {
    id: 1,
    domain: "example1.com",
    page: "/offers",
    requestDate: "2023-12-18",
    status: "Approved",
  },
  {
    id: 2,
    domain: "example2.com",
    page: "/deals",
    requestDate: "2023-12-15",
    status: "Pending",
  },
  {
    id: 3,
    domain: "example1.com",
    page: "/products",
    requestDate: "2023-12-10",
    status: "Approved",
  },
  {
    id: 4,
    domain: "example3.com",
    page: "/services",
    requestDate: "2023-12-05",
    status: "Rejected",
  },
  {
    id: 5,
    domain: "example2.com",
    page: "/blog",
    requestDate: "2023-12-01",
    status: "Approved",
  },
];

const approvedPages = withdrawalRequests.filter(item => item.status === "Approved");
const pendingPages = withdrawalRequests.filter(item => item.status === "Pending");
const rejectedPages = withdrawalRequests.filter(item => item.status === "Rejected");

const WithdrawPages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("all");
  const { toast } = useToast();

  const filteredPages = (() => {
    let filtered = withdrawalRequests;
    
    // Filter by status tab
    if (currentTab !== "all") {
      filtered = filtered.filter(
        (page) => page.status.toLowerCase() === currentTab.toLowerCase()
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (page) =>
          page.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.page.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  })();

  // const handleCopyCode = () => {
  //   toast({
  //     title: "Code Copied",
  //     description: "The code has been copied to your clipboard.",
  //   });
  // };

  const handleCopyCode = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy).then(() => {
    toast({
      title: "Code Copied",
      description: "The code has been copied to your clipboard.",
    });
  }).catch((error) => {
    toast({
      title: "Copy Failed",
      description: "There was an error copying to clipboard.",
      variant: "destructive"
    });
    console.error("Clipboard copy failed:", error);
  });
};

  const getStatusIcon = (status) => {
    if (status === "Approved") return <Check className="h-4 w-4 text-green-500" />;
    if (status === "Pending") return <FileText className="h-4 w-4 text-amber-500" />;
    return <X className="h-4 w-4 text-red-500" />;
  };

  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Withdraw Pages</h1>
            <p className="text-[#64748b]">
              Manage your page withdrawals and scripts
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">All Pages</CardTitle>
                <CardDescription>Total withdrawal requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{withdrawalRequests.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-600">Approved</CardTitle>
                <CardDescription>Approved withdrawal requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{approvedPages.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-amber-600">Pending</CardTitle>
                <CardDescription>Pending approval requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{pendingPages.length}</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Page Withdrawals</CardTitle>
              <CardDescription>
                Manage your page withdrawal requests and integration codes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="relative max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                    <Input
                      placeholder="Search pages..."
                      className="!pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Tabs value={currentTab} onValueChange={setCurrentTab}>
                    <TabsList className="w-full grid grid-cols-4 gap-1 ">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="approved">Approved</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="rejected">Rejected</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Domain</TableHead>
                        <TableHead>Page Path</TableHead>
                        <TableHead>Request Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPages.length > 0 ? (
                        filteredPages.map((page) => (
                          <TableRow key={page.id}>
                            <TableCell className="font-semibold">#{page.id}</TableCell>
                            <TableCell>{page.domain}</TableCell>
                            <TableCell>{page.page}</TableCell>
                            <TableCell>{page.requestDate}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                {getStatusIcon(page.status)}
                                <span>{page.status}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                {page.status === "Approved" && (
                                  <>
                                    <Button size="sm" variant="outline" onClick={() => handleCopyCode(`https://${page.domain}${page.page}`)}>
                                      <Copy className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="outline">
                                      <FileDown className="h-4 w-4" />
                                    </Button>
                                  </>
                                )}
                                {page.status === "Pending" && (
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                )}
                                {page.status === "Rejected" && (
                                  <Button size="sm" variant="outline">
                                    <FileText className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center">
                            No pages found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Integration Code</CardTitle>
              <CardDescription>
                Copy and paste this code into your approved pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-[#f1f5f9] p-4 rounded-md overflow-x-auto text-sm">
                  <code>{`<script src="https://ads.example.com/script.js" 
            data-site-id="YOUR_SITE_ID"
            data-page-id="YOUR_PAGE_ID">
    </script>`}</code>
                </pre>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="absolute top-2 right-2 !bg-opacity-80 bg-[#f1f5f9] hover:bg-[#e8e8eccc]"
                  onClick={() =>
                    handleCopyCode(`<script src="https://ads.example.com/script.js" 
                      data-site-id="YOUR_SITE_ID"
                      data-page-id="YOUR_PAGE_ID">
                  </script>`)
                  }

                >
                  <Copy className="h-4 w-4 mr-2 " /> 
                  <div className="hidden md:block">Copy</div>
                </Button>
              </div>
              <p className="text-sm text-[#64748b] mt-4">
                Replace YOUR_SITE_ID and YOUR_PAGE_ID with the values specific to your domain and page.
                Add this code just before the closing &lt;/body&gt; tag for optimal performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPages;

