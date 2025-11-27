import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoCardProps {
  pair: string;
  price: string;
  change: string;
  volume: string;
  isUp: boolean;
}

export default function CryptoCard({ pair, price, change, volume, isUp }: CryptoCardProps) {
  return (
    <div className="bg-card-bg p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-medium text-gray-400">{pair}</span>
        {/* Placeholder for chart - using simple SVG for now */}
        <svg className="w-24 h-10" viewBox="0 0 100 40">
            <path
                d={isUp ? "M0 30 L20 20 L40 35 L60 15 L80 25 L100 5" : "M0 10 L20 20 L40 5 L60 25 L80 15 L100 35"}
                fill="none"
                stroke={isUp ? "#0ECB81" : "#F6465D"}
                strokeWidth="2"
            />
        </svg>
      </div>
      <div className="mb-1">
        <span className="text-lg font-bold">{price}</span>
      </div>
      <div className="flex justify-between items-center text-xs">
        <span className={isUp ? "text-up-green" : "text-down-red"}>{change}</span>
        <span className="text-text-gray">Volume : {volume}</span>
      </div>
    </div>
  );
}
