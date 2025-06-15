
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { Textarea } from "../components/ui/textarea.jsx";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog.jsx";
import { 
  MessageSquare, 
  Plus, 
  Search, 
  ExternalLink,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import { useToast } from "../hooks/use-toast.jsx";

// Sample data for support tickets
const supportTickets = [
  {
    id: "#T-1234",
    subject: "Payment issue with withdrawal",
    category: "Billing",
    status: "Open",
    priority: "High",
    createdAt: "2023-12-18",
    lastUpdated: "2023-12-19",
  },
  {
    id: "#T-1233",
    subject: "Ad not displaying correctly on mobile",
    category: "Technical",
    status: "Closed",
    priority: "Medium",
    createdAt: "2023-12-15",
    lastUpdated: "2023-12-17",
  },
  {
    id: "#T-1232",
    subject: "Question about ad placement optimization",
    category: "General",
    status: "Pending",
    priority: "Low",
    createdAt: "2023-12-10",
    lastUpdated: "2023-12-12",
  },
  {
    id: "#T-1231",
    subject: "Domain verification failed",
    category: "Technical",
    status: "Open",
    priority: "High",
    createdAt: "2023-12-05",
    lastUpdated: "2023-12-08",
  },
  {
    id: "#T-1230",
    subject: "Earnings discrepancy in reports",
    category: "Billing",
    status: "Closed",
    priority: "Medium",
    createdAt: "2023-12-01",
    lastUpdated: "2023-12-03",
  },
];

// Ticket categories
const ticketCategories = [
  "Technical", "Billing", "Account", "Domain", "Advertising", "General"
];

const PublisherSupportTicket = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newTicketDialog, setNewTicketDialog] = useState(false);
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  // Filter the tickets based on search term
  const filteredTickets = supportTickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle creating a new ticket
  const handleCreateTicket = () => {
    if (!subject || !category || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Ticket Created",
      description: "Your support ticket has been submitted successfully.",
    });
    setNewTicketDialog(false);
    resetForm();
  };

  // Reset the form fields
  const resetForm = () => {
    setSubject("");
    setCategory("");
    setMessage("");
  };

  // Get status icon based on status
  const getStatusIcon = (status) => {
    if (status === "Open") return <AlertCircle className="h-4 w-4 text-amber-500" />;
    if (status === "Pending") return <Clock className="h-4 w-4 text-blue-500" />;
    return <CheckCircle className="h-4 w-4 text-green-500" />;
  };

  // Get priority style
  const getPriorityStyle = (priority) => {
    if (priority === "High") return "bg-red-500 text-[#fff]";
    if (priority === "Medium") return "bg-yellow-400 text-[#fff]";
    return "bg-green-500 text-[#fff]";
  };

    const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Support Tickets</h1>
            <p className="text-[#64748b]">
              Manage your support requests and get help
            </p>
          </div>

          <div className="grid gap-6 mb-6 md:grid-cols-3">
            {/* Ticket Stats Cards */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Tickets</CardTitle>
                <CardDescription>All support tickets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{supportTickets.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Open Tickets</CardTitle>
                <CardDescription>Awaiting response</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {supportTickets.filter(t => t.status === "Open" || t.status === "Pending").length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Closed Tickets</CardTitle>
                <CardDescription>Resolved issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {supportTickets.filter(t => t.status === "Closed").length}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Your Support Tickets</CardTitle>
                  <CardDescription>
                    View and manage your support requests
                  </CardDescription>
                </div>

                <Dialog open={newTicketDialog} onOpenChange={setNewTicketDialog}>
                  <DialogTrigger asChild>
                    <Button className="flex items-center">
                      <Plus className="h-4 w-4 mr-2" /> New Ticket
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Create New Support Ticket</DialogTitle>
                      <DialogDescription>
                        Please provide details about your issue or question.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Brief description of your issue"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <select
                          id="category"
                          className="w-full rounded-md border border-input bg-[#f8fafc] px-3 py-2 text-sm"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Select a category</option>
                          {ticketCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Describe your issue in detail"
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="attachment">Attachment (optional)</Label>
                        <Input id="attachment" type="file" />
                        <p className="text-xs text-[#64748b]">
                          Max file size: 5MB. Supported formats: JPG, PNG, PDF
                        </p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => {
                        setNewTicketDialog(false);
                        resetForm();
                      }}>
                        Cancel
                      </Button>
                      <Button onClick={handleCreateTicket}>Submit Ticket</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                  <Input
                    placeholder="Search tickets..."
                    className="!pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTickets.length > 0 ? (
                        filteredTickets.map((ticket) => (
                          <TableRow key={ticket.id}>
                            <TableCell className="font-semibold">{ticket.id}</TableCell>
                            <TableCell>{ticket.subject}</TableCell>
                            <TableCell>{ticket.category}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-1">
                                {getStatusIcon(ticket.status)}
                                <span>{ticket.status}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 hover:bg-[#2463ebcc] rounded-full text-xs ${getPriorityStyle(ticket.priority)}`}>
                                {ticket.priority}
                              </span>
                            </TableCell>
                            <TableCell>{ticket.createdAt}</TableCell>
                            <TableCell>{ticket.lastUpdated}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline" className="h-8">
                                <ExternalLink className="h-4 w-4 mr-2" /> View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={8} className="h-24 text-center">
                            No tickets found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Previous</Button>
              <Button variant="outline">Next</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Help Center</CardTitle>
              <CardDescription>
                Find answers to common questions in our help resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center p-4 text-center border rounded-lg">
                  <div className="p-3 rounded-full bg-[#4b43e51a] mb-3">
                    <MessageSquare className="h-6 w-6 text-[#4b43e5]" />
                  </div>
                  <h3 className="font-medium mb-2">Knowledge Base</h3>
                  <p className="text-sm text-[#64748b] mb-4">
                    Browse articles and tutorials on our platform
                  </p>
                  <Button variant="outline" size="sm">Browse Articles</Button>
                </div>
                <div className="flex flex-col items-center p-4 text-center border rounded-lg">
                  <div className="p-3 rounded-full bg-[#4b43e51a] mb-3">
                    <MessageSquare className="h-6 w-6 text-[#4b43e5]" />
                  </div>
                  <h3 className="font-medium mb-2">Video Tutorials</h3>
                  <p className="text-sm text-[#64748b] mb-4">
                    Learn how to maximize your earnings with video guides
                  </p>
                  <Button variant="outline" size="sm">Watch Videos</Button>
                </div>
                <div className="flex flex-col items-center p-4 text-center border rounded-lg">
                  <div className="p-3 rounded-full bg-[#4b43e51a] mb-3">
                    <MessageSquare className="h-6 w-6 text-[#4b43e5]" />
                  </div>
                  <h3 className="font-medium mb-2">Live Chat</h3>
                  <p className="text-sm text-[#64748b] mb-4">
                    Connect with our support team for immediate assistance
                  </p>
                  <Button variant="outline" size="sm">Start Chat</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PublisherSupportTicket;
