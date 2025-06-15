
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "../components/ui/card";
import { menuItems } from "../constants/sidebarItems.js";
import { Header } from "../components/Header1.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { ArrowDown, CreditCard, Landmark, CheckCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const withdrawHistory = [
  {
    id: 1,
    method: "PayPal",
    amount: "$250.00",
    status: "Completed",
    date: "2023-12-20",
  },
  {
    id: 2,
    method: "Bank Transfer",
    amount: "$1,200.00",
    status: "Processing",
    date: "2023-12-15",
  },
  {
    id: 3,
    method: "PayPal",
    amount: "$175.50",
    status: "Completed",
    date: "2023-12-01",
  },
  {
    id: 4,
    method: "Bank Transfer",
    amount: "$890.00",
    status: "Completed",
    date: "2023-11-28",
  },
  {
    id: 5,
    method: "PayPal",
    amount: "$320.75",
    status: "Completed",
    date: "2023-11-15",
  },
];

const paymentMethods = [
  {
    id: "paypal",
    name: "PayPal",
    icon: <CreditCard className="h-4 w-4" />,
    description: "Withdraw to your PayPal account"
  },
  {
    id: "bank",
    name: "Bank Transfer",
    icon: <Landmark className="h-4 w-4" />,
    description: "Direct transfer to your bank account"
  }
];

const WithdrawMoney = () => {
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("paypal");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const availableBalance = 1876.42;

  const handleWithdraw = () => {
    if (parseFloat(amount) > availableBalance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough balance for this withdrawal.",
        variant: "destructive",
      });
      return;
    }
    
    if (parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid withdrawal amount.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Withdrawal Requested",
      description: `Your withdrawal request for $${parseFloat(amount).toFixed(2)} has been submitted successfully.`,
    });
    setDialogOpen(false);
    setAmount("");
  };

  const [collapsed,setCollapsed]=useState(false);

  return (
    <div className="  h-screen bg-[#fff]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItems={menuItems}/>
      <div className={`transition-all duration-300 ${collapsed?"md:ml-16":"md:ml-64"}`}>
        <Header collapsed={collapsed} />
        <div className="p-6 md:p-12 mt-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Withdraw Money</h1>
            <p className="text-[#64748b]">
              Withdraw your earnings to your preferred payment method
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Balance</CardTitle>
                <CardDescription>
                  Your current available balance for withdrawal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-3xl font-bold">${availableBalance.toFixed(2)}</p>
                    <p className="text-sm text-[#64748b] mt-1">
                      Last updated: Today at 12:30 PM
                    </p>
                  </div>
                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex items-center">
                        <ArrowDown className="h-4 w-4 mr-2" /> Withdraw
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Withdraw Funds</DialogTitle>
                        <DialogDescription>
                          Enter the amount you want to withdraw and select your payment method.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="amount">Amount</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                            <Input
                              id="amount"
                              type="number"
                              placeholder="0.00"
                              className="!pl-7"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </div>
                          <p className="text-xs text-[#64748b]">
                            Available balance: ${availableBalance.toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Payment Method</Label>
                          <RadioGroup 
                            value={selectedMethod} 
                            onValueChange={setSelectedMethod}
                            className="space-y-2"
                          >
                            {paymentMethods.map((method) => (
                              <div 
                                key={method.id}
                                className="flex items-center space-x-3 border rounded-md p-3"
                              >
                                <RadioGroupItem value={method.id} id={method.id} />
                                <Label 
                                  htmlFor={method.id}
                                  className="flex items-center flex-1 cursor-pointer"
                                >
                                  <div className="p-1 rounded-full bg-[#4b43e51a] mr-3">
                                    {method.icon}
                                  </div>
                                  <div>
                                    <p className="font-medium">{method.name}</p>
                                    <p className="text-xs text-[#64748b]">
                                      {method.description}
                                    </p>
                                  </div>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleWithdraw}>Withdraw</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Withdrawal Information</CardTitle>
                <CardDescription>
                  Important details about withdrawals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-[#4b43e51a]">
                    <CheckCircle className="h-4 w-4 text-[#4b43e5]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Minimum Withdrawal</h4>
                    <p className="text-sm text-[#64748b]">
                      The minimum withdrawal amount is $50.00
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-[#4b43e51a]">
                    <CheckCircle className="h-4 w-4 text-[#4b43e5]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Processing Time</h4>
                    <p className="text-sm text-[#64748b]">
                      PayPal: 1-2 business days
                      <br />
                      Bank Transfer: 3-5 business days
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-[#4b43e51a]">
                    <CheckCircle className="h-4 w-4 text-[#4b43e5]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Withdrawal Fee</h4>
                    <p className="text-sm text-[#64748b]">
                      PayPal: 2% of the withdrawal amount
                      <br />
                      Bank Transfer: $15 flat fee
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Withdrawal History</CardTitle>
              <CardDescription>
                Review your recent withdrawal requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {withdrawHistory.map((withdrawal) => (
                      <TableRow key={withdrawal.id}>
                        <TableCell className="font-semibold">#{withdrawal.id}</TableCell>
                        <TableCell>{withdrawal.method}</TableCell>
                        <TableCell>{withdrawal.amount}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            withdrawal.status === "Completed" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-amber-100 text-amber-800"
                          }`}>
                            {withdrawal.status}
                          </span>
                        </TableCell>
                        <TableCell>{withdrawal.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Previous</Button>
              <Button variant="outline">Next</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WithdrawMoney;
