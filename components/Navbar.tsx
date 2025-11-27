"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#0B0E11] border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-accent-yellow flex items-center justify-center text-accent-yellow font-bold">
                    C
                </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link href="#" className="hover:text-accent-yellow transition-colors">Pasar</Link>
            <Link href="#" className="hover:text-accent-yellow transition-colors">Tentang Kami</Link>
            <Link href="#" className="hover:text-accent-yellow transition-colors">Kontak Kami</Link>
            </div>
        </div>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-1.5 text-sm font-medium text-gray-200 hover:text-accent-yellow transition-colors">
            SIGN IN
            </button>
            <button className="px-4 py-1.5 text-sm font-medium text-gray-200 border border-accent-yellow rounded hover:bg-accent-yellow/10 transition-colors">
            SIGN UP
            </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0E11] border-b border-gray-800 py-4 px-6 flex flex-col gap-4 z-50">
            <Link href="#" className="text-gray-300 hover:text-accent-yellow transition-colors">Pasar</Link>
            <Link href="#" className="text-gray-300 hover:text-accent-yellow transition-colors">Tentang Kami</Link>
            <Link href="#" className="text-gray-300 hover:text-accent-yellow transition-colors">Kontak Kami</Link>
            <div className="flex flex-col gap-3 mt-2">
                <button className="w-full px-4 py-2 text-sm font-medium text-gray-200 hover:text-accent-yellow transition-colors text-left">
                SIGN IN
                </button>
                <button className="w-full px-4 py-2 text-sm font-medium text-gray-200 border border-accent-yellow rounded hover:bg-accent-yellow/10 transition-colors text-center">
                SIGN UP
                </button>
            </div>
        </div>
      )}
    </nav>
  );
}
