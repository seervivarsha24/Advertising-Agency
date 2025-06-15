
import React, { useState } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog.jsx";
import { Globe, Plus, Edit, Trash2, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast.jsx";

const domains = [
  {
    id: 1,
    domain: "example1.com",
    status: "Active",
    trafficSource: "Organic",
    added: "2023-12-01",
  },
  {
    id: 2,
    domain: "example2.com",
    status: "Pending",
    trafficSource: "Social",
    added: "2023-12-05",
  },
  {
    id: 3,
    domain: "example3.com",
    status: "Active",
    trafficSource: "Direct",
    added: "2023-12-10",
  },
  {
    id: 4,
    domain: "example4.com",
    status: "Rejected",
    trafficSource: "Referral",
    added: "2023-12-15",
  },
  {
    id: 5,
    domain: "example5.com",
    status: "Active",
    trafficSource: "Organic",
    added: "2023-12-20",
  },
];

const ManageDomain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newDomain, setNewDomain] = useState("");
  const [trafficSource, setTrafficSource] = useState("");
  const { toast } = useToast();

  const filteredDomains = domains.filter((domain) =>
    domain.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDomain = () => {
    if (newDomain && trafficSource) {
      toast({
        title: "Domain Added",
        description: `${newDomain} has been added successfully and is pending review.`,
      });
      setDialogOpen(false);
      setNewDomain("");
      setTrafficSource("");
    }
  };

  const getStatusIcon = (status) => {
    if (status === "Active")
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (status === "Pending")
      return <Globe className="h-5 w-5 text-amber-500" />;
    return <XCircle className="h-5 w-5 text-red-500" />;
  };

  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Manage Domains</h1>
            <p className="text-[#64748b]">
              Add and manage your domains for monetization
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Your Domains</CardTitle>
                  <CardDescription>
                    List of all domains you've added to your account
                  </CardDescription>
                </div>

                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="flex items-center">
                      <Plus className="h-4 w-4 mr-2" /> Add Domain
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add New Domain</DialogTitle>
                      <DialogDescription>
                        Enter your domain name and select traffic source. The domain will be reviewed before activation.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label htmlFor="domain" className="text-sm font-medium">
                          Domain Name
                        </label>
                        <Input
                          id="domain"
                          placeholder="example.com"
                          value={newDomain}
                          onChange={(e) => setNewDomain(e.target.value)}
                        />
                        <p className="text-xs text-[#64748b]">
                          Enter without http:// or https://
                        </p>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="traffic" className="text-sm font-medium">
                          Traffic Source
                        </label>
                        <select
                          id="traffic"
                          className="w-full rounded-md border focus:outline-none border-input bg-[#f8fafc] px-3 py-2 text-sm"
                          value={trafficSource}
                          onChange={(e) => setTrafficSource(e.target.value)}
                        >
                          <option value="">Select a source</option>
                          <option value="Organic">Organic</option>
                          <option value="Social">Social</option>
                          <option value="Direct">Direct</option>
                          <option value="Referral">Referral</option>
                        </select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddDomain}>Add Domain</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input
                  placeholder="Search domains..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Domain</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Traffic Source</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDomains.length > 0 ? (
                      filteredDomains.map((domain) => (
                        <TableRow key={domain.id}>
                          <TableCell className="font-medium">
                            {domain.domain}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(domain.status)}
                              <span>{domain.status}</span>
                            </div>
                          </TableCell>
                          <TableCell>{domain.trafficSource}</TableCell>
                          <TableCell>{domain.added}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="h-24 text-center">
                          No domains found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageDomain;
