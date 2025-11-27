"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import StatsCard from "@/components/StatsCard";
import BarChart from "@/components/BarChart";
import { Cpu, Wallet, ShieldCheck, Menu } from 'lucide-react';

interface RegistrationData {
  month: string;
  year: number;
  total: number;
}

interface DepositData {
  month: string;
  year: number;
  total: number;
}

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [deposits, setDeposits] = useState<DepositData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [regRes, depRes] = await Promise.all([
          fetch('/api/stats/registrations'),
          fetch('/api/stats/deposits')
        ]);
        
        const regData = await regRes.json();
        const depData = await depRes.json();
        
        setRegistrations(regData);
        setDeposits(depData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalDeposits = deposits.reduce((acc, curr) => acc + curr.total, 0);
  const totalRegistrations = registrations.reduce((acc, curr) => acc + curr.total, 0);
  
  // Prepare chart data (using deposits for the chart as an example)
  const chartData = deposits.map(d => d.total);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="flex-1 md:ml-64 p-4 md:p-8 transition-all duration-300">
        <div className="md:hidden mb-4">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-white hover:bg-gray-800 rounded">
                <Menu className="w-6 h-6" />
            </button>
        </div>

        <DashboardHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: Chart */}
            <div className="h-96">
                <BarChart data={chartData} />
            </div>

            {/* Right Column: Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatsCard 
                    icon={Cpu}
                    title="Total Deposit"
                    value={`IDR ${new Intl.NumberFormat('id-ID', { notation: "compact" }).format(totalDeposits)}`}
                    subtext={`${deposits.length} Month(s)`}
                />
                <StatsCard 
                    icon={Wallet}
                    title="Total Withdraw"
                    value="IDR 0"
                    subtext="0 Withdraw(s)"
                />
                <StatsCard 
                    icon={ShieldCheck}
                    title="Total Verified KYC"
                    value="0 Verified"
                    subtext=""
                />
                <StatsCard 
                    icon={Cpu} 
                    title="Total Registration"
                    value={`${totalRegistrations} Registered`}
                    subtext={`${registrations.length} Month(s)`}
                />
            </div>
        </div>
      </main>
    </div>
  );
}
