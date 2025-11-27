interface BarChartProps {
  data?: number[];
}

export default function BarChart({ data = [] }: BarChartProps) {
  // Normalize data to percentages relative to max value for rendering
  const maxVal = Math.max(...(data.length ? data : [1]));
  const normalizedData = data.map(val => (val / maxVal) * 100);
  
  // Default dummy data if no data provided
  const displayData = data.length > 0 ? normalizedData : [60, 20, 30, 45, 80, 40, 15, 35, 35];
  const rawData = data.length > 0 ? data : [60, 20, 30, 45, 80, 40, 15, 35, 35];

  return (
    <div className="bg-card-bg p-6 rounded-xl border border-gray-800/50 h-full">
      <h3 className="font-bold mb-6">Bar Chart</h3>
      
      <div className="flex h-64 gap-2">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between text-xs text-text-gray pr-2">
          <span>{data.length ? new Intl.NumberFormat('id-ID', { notation: "compact" }).format(maxVal) : '100'}</span>
          <span>{data.length ? new Intl.NumberFormat('id-ID', { notation: "compact" }).format(maxVal * 0.8) : '80'}</span>
          <span>{data.length ? new Intl.NumberFormat('id-ID', { notation: "compact" }).format(maxVal * 0.6) : '60'}</span>
          <span>{data.length ? new Intl.NumberFormat('id-ID', { notation: "compact" }).format(maxVal * 0.4) : '40'}</span>
          <span>{data.length ? new Intl.NumberFormat('id-ID', { notation: "compact" }).format(maxVal * 0.2) : '20'}</span>
          <span>0</span>
        </div>

        {/* Chart Area */}
        <div className="flex-1 flex items-end justify-between gap-2 px-4 border-l border-b border-gray-800 relative">
            {/* Bars */}
            {displayData.map((height, i) => (
                <div key={i} className="w-full bg-up-green rounded-t-sm hover:opacity-80 transition-opacity relative group" style={{ height: `${height}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                        {new Intl.NumberFormat('id-ID').format(rawData[i])}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
