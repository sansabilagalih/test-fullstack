import { ChevronDown } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-2xl font-bold mb-1">Welcome John Doe</h1>
        <p className="text-text-gray text-sm">How are you today...</p>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-sm text-text-gray">Filter By:</span>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded text-sm text-gray-300 hover:bg-gray-700 transition-colors">
          Januari
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded text-sm text-gray-300 hover:bg-gray-700 transition-colors">
          2023
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
