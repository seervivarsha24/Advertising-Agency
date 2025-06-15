
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.jsx";
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
  Megaphone, 
  Plus, 
  ExternalLink, 
  Edit, 
  Trash2, 
  Image, 
  Code 
} from "lucide-react";
import { useToast } from "../hooks/use-toast.jsx";

const adTypes = [
  {
    id: "banner",
    icon: <Image className="h-5 w-5" />,
    name: "Banner",
    description: "Image ads in various sizes"
  },
  {
    id: "native",
    icon: <Megaphone className="h-5 w-5" />,
    name: "Native",
    description: "Ads that match the look of your site"
  },
  {
    id: "video",
    icon: <ExternalLink className="h-5 w-5" />,
    name: "Video",
    description: "Engaging video advertisements"
  },
  {
    id: "popup",
    icon: <Code className="h-5 w-5" />,
    name: "Popup",
    description: "Overlay or popup ads"
  }
];

const advertisements = [
  {
    id: 1,
    name: "Homepage Banner",
    type: "Banner",
    size: "728x90",
    domain: "example1.com",
    impressions: 24680,
    clicks: 385,
    ctr: "1.56%",
    earnings: "$123.45",
  },
  {
    id: 2,
    name: "Sidebar Ad",
    type: "Native",
    size: "300x250",
    domain: "example2.com",
    impressions: 18920,
    clicks: 412,
    ctr: "2.18%",
    earnings: "$98.76",
  },
  {
    id: 3,
    name: "Article Footer",
    type: "Banner",
    size: "970x250",
    domain: "example1.com",
    impressions: 15640,
    clicks: 278,
    ctr: "1.78%",
    earnings: "$87.32",
  },
  {
    id: 4,
    name: "Video Pre-roll",
    type: "Video",
    size: "16:9",
    domain: "example3.com",
    impressions: 8420,
    clicks: 196,
    ctr: "2.33%",
    earnings: "$143.28",
  },
  {
    id: 5,
    name: "Exit Intent",
    type: "Popup",
    size: "600x400",
    domain: "example2.com",
    impressions: 12340,
    clicks: 187,
    ctr: "1.52%",
    earnings: "$54.90",
  },
];

const Advertisements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("all");
  const { toast } = useToast();
  
  const filteredAds = advertisements.filter((ad) => {
    // Filter by search term
    const matchesSearch = ad.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ad.domain.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by tab
    const matchesTab = currentTab === "all" || ad.type.toLowerCase() === currentTab.toLowerCase();

    return matchesSearch && matchesTab;
  });

  const handleCreateAd = () => {
    toast({
      title: "Advertisement Created",
      description: "Your new advertisement has been created successfully.",
    });
    setDialogOpen(false);
  };

  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Advertisements</h1>
            <p className="text-[#64748b]">
              Create and manage your advertising units
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Your Advertisements</CardTitle>
                  <CardDescription>
                    Create and manage ad units across your domains
                  </CardDescription>
                </div>

                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="flex items-center">
                      <Plus className="h-4 w-4 mr-2" /> Create Ad
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Create New Advertisement</DialogTitle>
                      <DialogDescription>
                        Select the type of advertisement you want to create
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                      {adTypes.map((adType) => (
                        <button
                          key={adType.id}
                          className="flex flex-col items-center focus:outline-none p-4 rounded-lg border border-border hover:!border-[#4b43e5] hover:bg-[#4b43e50d] text-center transition-colors"
                          onClick={() => {
                            toast({
                              title: `Creating ${adType.name} Ad`,
                              description: `You selected a ${adType.name} advertisement type.`,
                            });
                            setDialogOpen(false);
                          }}
                        >
                          <div className="p-2 rounded-full bg-[#4b43e51a] mb-3">
                            {adType.icon}
                          </div>
                          <h3 className="font-medium mb-1">{adType.name}</h3>
                          <p className="text-xs text-[#64748b]">
                            {adType.description}
                          </p>
                        </button>
                      ))}
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setDialogOpen(false)}>
                        Cancel
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <Input
                    placeholder="Search advertisements..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                  <Tabs defaultValue="all" value={currentTab} onValueChange={setCurrentTab}>
                    <TabsList className="w-full grid grid-cols-5 gap-1 ">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="banner">Banner</TabsTrigger>
                      <TabsTrigger value="native">Native</TabsTrigger>
                      <TabsTrigger value="video">Video</TabsTrigger>
                      <TabsTrigger value="popup">Popup</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Domain</TableHead>
                        <TableHead className="text-right">Impressions</TableHead>
                        <TableHead className="text-right">Clicks</TableHead>
                        <TableHead className="text-right">CTR</TableHead>
                        <TableHead className="text-right">Earnings</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAds.length > 0 ? (
                        filteredAds.map((ad) => (
                          <TableRow key={ad.id}>
                            <TableCell className="font-semibold">{ad.name}</TableCell>
                            <TableCell>{ad.type}</TableCell>
                            <TableCell>{ad.size}</TableCell>
                            <TableCell>{ad.domain}</TableCell>
                            <TableCell className="text-right">{ad.impressions.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{ad.clicks.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{ad.ctr}</TableCell>
                            <TableCell className="text-right">{ad.earnings}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                <Button size="sm" variant="outline">
                                  <Code className="h-4 w-4" />
                                </Button>
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
                          <TableCell colSpan={9} className="h-24 text-center">
                            No advertisements found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
