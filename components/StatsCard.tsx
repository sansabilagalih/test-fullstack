import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtext: string;
}

export default function StatsCard({ icon: Icon, title, value, subtext }: StatsCardProps) {
  return (
    <div className="bg-card-bg p-6 rounded-xl border border-gray-800/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 border border-white/20 rounded-lg">
            <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="font-bold text-lg">{title}</span>
      </div>
      
      <div className="mb-1">
        <span className="text-2xl font-medium">{value}</span>
      </div>
      
      <div className="text-sm text-text-gray">
        {subtext}
      </div>
    </div>
  );
}
