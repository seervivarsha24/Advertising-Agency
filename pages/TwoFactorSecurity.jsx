
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { menuItems } from "../constants/sidebarItems.js";
import { Header } from "../components/Header1.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import {
  Shield,
  Smartphone,
  Mail,
  Key,
  CheckCircle,
  AlertCircle,
  Copy,
  RefreshCw,
  Download,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

const TwoFactorSecurity = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [recoveryCodesVisible, setRecoveryCodesVisible] = useState(false);
  const { toast } = useToast();

  // Sample recovery codes
  const recoveryCodes = [
    "ABCD-EFGH-IJKL-MNOP",
    "QRST-UVWX-YZ12-3456",
    "7890-ABCD-EFGH-IJKL",
    "MNOP-QRST-UVWX-YZ12",
    "3456-7890-ABCD-EFGH",
    "IJKL-MNOP-QRST-UVWX",
    "YZ12-3456-7890-ABCD",
    "EFGH-IJKL-MNOP-QRST",
  ];

  // Toggle 2FA setup
  const handleToggle2FA = () => {
    if (twoFactorEnabled) {
      // If currently enabled, disable it
      setTwoFactorEnabled(false);
      setShowQRCode(false);
      toast({
        title: "2FA Disabled",
        description: "Two-factor authentication has been disabled.",
      });
    } else {
      // If currently disabled, show QR code setup
      setShowQRCode(true);
      // setTwoFactorEnabled(true);
    }
  };

  // Handle verification code submission
  const handleVerificationSubmit = () => {
    if (verificationCode.length === 6) {
      setTwoFactorEnabled(true);
      setShowQRCode(false);
      toast({
        title: "2FA Enabled",
        description: "Two-factor authentication has been enabled successfully.",
      });
      setVerificationCode("");
      setRecoveryCodesVisible(true);
    } else {
      toast({
        title: "Invalid Code",
        description: "Please enter a valid 6-digit verification code.",
        variant: "destructive",
      });
    }
  };

  // Copy recovery codes
  const handleCopyRecoveryCodes = () => {
    toast({
      title: "Recovery Codes Copied",
      description: "Recovery codes have been copied to your clipboard.",
    });
  };

  // Download recovery codes
  const handleDownloadRecoveryCodes = () => {
    toast({
      title: "Recovery Codes Downloaded",
      description: "Your recovery codes have been downloaded.",
    });
  };

  // Generate new recovery codes
  const handleGenerateNewCodes = () => {
    toast({
      title: "New Recovery Codes Generated",
      description: "Your recovery codes have been updated. Please save them securely.",
    });
  };

  // Handle code input
  const handleCodeInput = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setVerificationCode(value);
    }
  };

  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">2FA Security</h1>
            <p className="text-[#64748b]">
              Enhance your account security with two-factor authentication
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account by enabling two-factor authentication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${twoFactorEnabled ? "bg-green-100" : "bg-amber-100"}`}>
                      <Shield className={`h-5 w-5 ${twoFactorEnabled ? "text-green-600" : "text-amber-600"}`} />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-[#64748b]">
                        {twoFactorEnabled 
                          ? "Your account is protected with 2FA" 
                          : "Enhance your account security"}
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={twoFactorEnabled} 
                    onCheckedChange={handleToggle2FA}
                  />
                </div>

                {showQRCode && (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className="p-3 rounded-full bg-[#4b43e51a]">
                          <Smartphone className="h-6 w-6 text-[#4b43e5]" />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Set up Two-Factor Authentication</h3>
                          <p className="text-sm text-[#64748b] max-w-md mx-auto">
                            Scan the QR code below with your authenticator app (such as Google Authenticator or Authy)
                          </p>
                        </div>

                        {/* QR Code Placeholder */}
                        <div className="border !border-dashed p-4 bg-[#f1f5f933]">
                          <div className="w-48 h-48 bg-[#f1f5f9] flex items-center justify-center">
                            <span className="text-[#64748b]">QR Code Placeholder</span>
                          </div>
                        </div>

                        <div className="space-y-2 w-full max-w-xs">
                          <p className="text-sm font-[550]">Manual entry code:</p>
                          <div className="relative">
                            <Input
                              value="ABCD EFGH IJKL MNOP"
                              readOnly
                              className="pr-10 font-mono text-center"
                            />
                            <Button
                              size="sm"
                              variant="ghost"
                              className="absolute right-1 top-1 h-7 w-7 p-0"
                              onClick={() => {
                                toast({
                                  title: "Code Copied",
                                  description: "Manual entry code copied to clipboard.",
                                });
                              }}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2 w-full max-w-xs">
                          <Label htmlFor="verification-code" className="font-[550]">
                            Enter the 6-digit verification code from your app
                          </Label>
                          <Input
                            id="verification-code"
                            placeholder="000000"
                            value={verificationCode}
                            onChange={handleCodeInput}
                            maxLength={6}
                            className="text-center font-mono text-lg"
                          />
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" onClick={() => setShowQRCode(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleVerificationSubmit}>
                            Verify and Enable
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {twoFactorEnabled && (
                  <div className="space-y-4">
                    <div className="flex items-center p-4 border rounded-md bg-green-50">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-700">Two-factor authentication is enabled</span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start p-4 border rounded-md">
                        <div className="p-2 rounded-full bg-blue-100 mr-3">
                          <Smartphone className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Authenticator App</p>
                          <p className="text-sm text-[#64748b]">
                            You're using an authenticator app to generate 2FA codes
                          </p>
                          <Button variant="link" className="p-0 h-auto mt-1" onClick={() => setShowQRCode(true)}>
                            Change app
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start p-4 border rounded-md">
                        <div className="p-2 rounded-full bg-blue-100 mr-3">
                          <Mail className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Backup Email</p>
                          <p className="text-sm text-[#64748b]">
                            john.d***@example.com
                          </p>
                          <Button variant="link" className="p-0 h-auto mt-1">
                            Update email
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {twoFactorEnabled && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Recovery Codes</CardTitle>
                      <CardDescription>
                        Save these recovery codes in a secure place to regain access to your account if you lose your 2FA device
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setRecoveryCodesVisible(!recoveryCodesVisible)}
                    >
                      {recoveryCodesVisible ? "Hide" : "Show"} Codes
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {recoveryCodesVisible ? (
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md bg-amber-50">
                        <div className="flex items-center">
                          <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
                          <span className="text-amber-700">
                            Keep these codes private and store them safely
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {recoveryCodes.map((code, index) => (
                          <code key={index} className="block p-2 text-black bg-[#f1f5f9] rounded font-mono text-sm">
                            {code}
                          </code>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant="outline" 
                          className="flex items-center" 
                          onClick={handleCopyRecoveryCodes}
                        >
                          <Copy className="h-4 w-4 mr-2" /> Copy Codes
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex items-center" 
                          onClick={handleDownloadRecoveryCodes}
                        >
                          <Download className="h-4 w-4 mr-2" /> Download
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex items-center" 
                          onClick={handleGenerateNewCodes}
                        >
                          <RefreshCw className="h-4 w-4 mr-2" /> Generate New Codes
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="p-3 rounded-full bg-[#4b43e51a] mb-3">
                          <Key className="h-6 w-6 text-[#4b43e5]" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Recovery Codes Hidden</h3>
                        <p className="text-sm text-[#64748b] max-w-xs">
                          Recovery codes are hidden for your security. Click "Show Codes" to reveal them.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Security Recommendations</CardTitle>
                <CardDescription>
                  Additional steps you can take to enhance your account security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start p-4 border rounded-md">
                  <div className={`p-2 rounded-full ${twoFactorEnabled ? "bg-green-100" : "bg-amber-100"} mr-3`}>
                    <Shield className={`h-4 w-4 ${twoFactorEnabled ? "text-green-600" : "text-amber-600"}`} />
                  </div>
                  <div>
                    <p className="font-medium">Enable Two-Factor Authentication</p>
                    <p className="text-sm text-[#64748b]">
                      Protect your account with an additional layer of security
                    </p>
                    <div className="mt-2">
                      {twoFactorEnabled ? (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Completed
                        </span>
                      ) : (
                        <Button size="sm" variant="outline" onClick={handleToggle2FA}>
                          Enable
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 border rounded-md">
                  <div className="p-2 rounded-full bg-amber-100 mr-3">
                    <Key className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium">Use a Strong Password</p>
                    <p className="text-sm text-[#64748b]">
                      Create a unique password with at least 12 characters including letters, numbers, and symbols
                    </p>
                    <div className="mt-2">
                      <Button size="sm" variant="outline">
                        Update Password
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 border rounded-md">
                  <div className="p-2 rounded-full bg-amber-100 mr-3">
                    <Mail className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium">Verify Email Address</p>
                    <p className="text-sm text-[#64748b]">
                      Ensure your email is verified to maintain account access
                    </p>
                    <div className="mt-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorSecurity;
