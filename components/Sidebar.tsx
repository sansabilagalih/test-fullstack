import Link from 'next/link';
import { LayoutDashboard, Wallet, ArrowDownToLine, Users, ShieldCheck, RefreshCw, FileText, Settings, LogOut, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 h-screen bg-card-bg border-r border-gray-800 flex flex-col z-50 transition-transform duration-300
        w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6 flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-accent-yellow flex items-center justify-center text-accent-yellow font-bold text-xl">
                C
            </div>
          </div>
          <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-accent-yellow bg-accent-yellow/10 rounded-lg transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-text-gray hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <Wallet className="w-5 h-5" />
            <span className="font-medium">Deposit</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-text-gray hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <ArrowDownToLine className="w-5 h-5" />
            <span className="font-medium">Withdraw</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-text-gray hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Member</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-text-gray hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-medium">Verification (KYC)</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-text-gray hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <RefreshCw className="w-5 h-5" />
            <span className="font-medium">Reset 2FA Request</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-text-gray hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Daily Report</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-text-gray hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Setting</span>
          </Link>
        </nav>

        <div className="p-4 mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 text-text-gray hover:text-white w-full transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Keluar</span>
          </button>
        </div>
      </div>
    </>
  );
}
