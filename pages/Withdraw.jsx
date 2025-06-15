
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowDown, Wallet, FileText } from "lucide-react";

const Withdraw = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Withdraw</h1>
        <p className="text-[#64748b]">
          Manage your withdrawals and payment methods
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link to="/withdraw/money" className="transition-transform duration-200 hover:scale-[1.01]">
          <Card className="overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center">
                <Wallet className="mr-3 h-6 w-6 text-[#4b43e5]" />
                Withdraw Money
              </CardTitle>
              <CardDescription>
                Withdraw your earnings to your preferred payment method
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex items-center justify-center p-6">
                <div className="rounded-full bg-[#4b43e51a] p-8">
                  <ArrowDown className="h-16 w-16 text-[#4b43e5]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/withdraw/pages" className="transition-transform duration-200 hover:scale-[1.01]">
          <Card className="overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center">
                <FileText className="mr-3 h-6 w-6 text-[#4b43e5]" />
                Withdraw Pages
              </CardTitle>
              <CardDescription>
                Manage page withdrawals and configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex items-center justify-center p-6">
                <div className="rounded-full bg-[#4b43e51a] p-8">
                  <FileText className="h-16 w-16 text-[#4b43e5]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Withdraw;
