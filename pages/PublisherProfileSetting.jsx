
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
import { menuItems } from "../constants/sidebarItems.js";
import { Header } from "../components/Header1.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar.jsx";
import { Switch } from "../components/ui/switch.jsx";
import { User, Mail, Phone, MapPin, Download, Upload, Bell, Globe } from "lucide-react";
import { useToast } from "../hooks/use-toast.jsx";

const PublisherProfileSetting = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    country: "United States",
    city: "New York",
    address: "123 Main St, Apt 4B",
    zipCode: "10001",
    companyName: "Acme Inc.",
    website: "https://johndoe.com",
  });
  const [notificationSettings, setNotificationSettings] = useState({
    emailUpdates: true,
    securityAlerts: true,
    marketingEmails: false,
    newAds: true,
    paymentConfirmations: true,
    newsletterSub: false,
  });
  const { toast } = useToast();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle notification switch toggle
  const handleSwitchChange = (key) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  // Handle notification settings save
  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    
    // In a real app you would validate passwords here
    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully.",
    });
    
    // Clear form fields
    e.target.reset();
  };

  // Handle profile picture upload
  const handleProfilePicture = () => {
    toast({
      title: "Profile Picture",
      description: "Your profile picture has been updated.",
    });
  };

  // Get user initials for avatar fallback
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
            <p className="text-[#64748b]">
              Manage your account settings and preferences
            </p>
          </div>

          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid grid-cols-3 max-w-md">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {/* General settings tab */}
            <TabsContent value="general">
              <div className="grid gap-6 md:grid-cols-1">
                <Card className="col-span-1 !border-none shadow-none">
                  {/* <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                    <CardDescription>
                      Update your profile photo
                    </CardDescription>
                  </CardHeader> */}
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{getInitials(formData.fullName)}</AvatarFallback>
                    </Avatar>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        className="flex items-center"
                        onClick={handleProfilePicture}
                      >
                        <Upload className="h-4 w-4 mr-2" /> Upload
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="flex items-center text-red-500"
                      >
                        <Download className="h-4 w-4 mr-2" /> Remove
                      </Button>
                    </div>
                    <p className="text-xs text-[#64748b] mt-4">
                      Recommended size: 300x300px. Max file size: 2MB.
                    </p>
                  </CardContent>
                </Card>

                <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                            <Input
                              id="fullName"
                              name="fullName"
                              placeholder="John Doe"
                              className="!pl-9"
                              value={formData.fullName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            name="username"
                            placeholder="johndoe"
                            value={formData.username}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john.doe@example.com"
                              className="!pl-9"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="+1 (555) 123-4567"
                              className="!pl-9"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input
                            id="country"
                            name="country"
                            placeholder="United States"
                            value={formData.country}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            placeholder="New York"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                            <Input
                              id="address"
                              name="address"
                              placeholder="123 Main St, Apt 4B"
                              className="!pl-9"
                              value={formData.address}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">Zip/Postal Code</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            placeholder="10001"
                            value={formData.zipCode}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name (Optional)</Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            placeholder="Acme Inc."
                            value={formData.companyName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website (Optional)</Label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                            <Input
                              id="website"
                              name="website"
                              placeholder="https://johndoe.com"
                              className="!pl-9"
                              value={formData.website}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end mt-6">
                        <Button variant="outline" className="mr-2">
                          Cancel
                        </Button>
                        <Button type="submit">Save Changes</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Notifications settings tab */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage when and how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Account Updates</p>
                        <p className="text-sm text-[#64748b]">
                          Receive emails about your account activity
                        </p>
                      </div>
                      <Switch 
                        checked={notificationSettings.emailUpdates}
                        onCheckedChange={() => handleSwitchChange("emailUpdates")}
                      />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Security Alerts</p>
                        <p className="text-sm text-[#64748b]">
                          Get notified about security issues and login attempts
                        </p>
                      </div>
                      <Switch 
                        checked={notificationSettings.securityAlerts}
                        onCheckedChange={() => handleSwitchChange("securityAlerts")}
                      />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Marketing Emails</p>
                        <p className="text-sm text-[#64748b]">
                          Receive promotional offers and news
                        </p>
                      </div>
                      <Switch 
                        checked={notificationSettings.marketingEmails}
                        onCheckedChange={() => handleSwitchChange("marketingEmails")}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Platform Notifications</h3>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">New Advertisements</p>
                        <p className="text-sm text-[#64748b]">
                          Get notified when new ad opportunities are available
                        </p>
                      </div>
                      <Switch 
                        checked={notificationSettings.newAds}
                        onCheckedChange={() => handleSwitchChange("newAds")}
                      />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Payment Confirmations</p>
                        <p className="text-sm text-[#64748b]">
                          Receive notifications about payouts and earnings
                        </p>
                      </div>
                      <Switch 
                        checked={notificationSettings.paymentConfirmations}
                        onCheckedChange={() => handleSwitchChange("paymentConfirmations")}
                      />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-sm text-[#64748b]">
                          Receive our monthly newsletter with industry insights
                        </p>
                      </div>
                      <Switch 
                        checked={notificationSettings.newsletterSub}
                        onCheckedChange={() => handleSwitchChange("newsletterSub")}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline" className="mr-2">
                    Cancel
                  </Button>
                  <Button onClick={handleSaveNotifications}>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Security settings tab */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Password Settings</CardTitle>
                  <CardDescription>
                    Update your password to keep your account secure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordChange}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input
                          id="current-password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="••••••••"
                        />
                        <p className="text-xs text-[#64748b]">
                          Password must be at least 8 characters long and include a number and special character.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="pt-4">
                        <Button type="submit">Change Password</Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Account Activity</CardTitle>
                  <CardDescription>
                    Review your recent account activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-md">
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Login from New York, United States</p>
                            <p className="text-sm text-[#64748b]">Chrome on Windows</p>
                          </div>
                          <p className="text-sm">Today at 10:45 AM</p>
                        </div>
                      </div>
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Password Changed</p>
                            <p className="text-sm text-[#64748b]">Security setting updated</p>
                          </div>
                          <p className="text-sm">Dec 18, 2023</p>
                        </div>
                      </div>
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Login from New York, United States</p>
                            <p className="text-sm text-[#64748b]">Safari on macOS</p>
                          </div>
                          <p className="text-sm">Dec 15, 2023</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Profile Updated</p>
                            <p className="text-sm text-[#64748b]">Contact information changed</p>
                          </div>
                          <p className="text-sm">Dec 12, 2023</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Full Activity Log
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Sessions</CardTitle>
                  <CardDescription>
                    Manage your active sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <div className="bg-[#4b43e51a] p-2 rounded-full mr-3">
                          <Bell className="h-4 w-4 text-[#4b43e5]" />
                        </div>
                        <div>
                          <p className="font-medium">Chrome on Windows</p>
                          <p className="text-sm text-[#64748b]">New York, United States • Current session</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        Current
                      </Button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <div className="bg-[#4b43e51a] p-2 rounded-full mr-3">
                          <Bell className="h-4 w-4 text-[#4b43e5]" />
                        </div>
                        <div>
                          <p className="font-medium">Safari on iPhone</p>
                          <p className="text-sm text-[#64748b]">New York, United States • 2 hours ago</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center">
                        <div className="bg-[#4b43e51a] p-2 rounded-full mr-3">
                          <Bell className="h-4 w-4 text-[#4b43e5]" />
                        </div>
                        <div>
                          <p className="font-medium">Safari on Mac</p>
                          <p className="text-sm text-[#64748b]">Boston, United States • 1 day ago</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full">
                      Revoke All Other Sessions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PublisherProfileSetting;
