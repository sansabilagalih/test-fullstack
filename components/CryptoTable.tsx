import { Star } from 'lucide-react';

const tableData = [
  { id: 1, pair: 'BTC/DAI', price: '98,832.93 / Rp 1,612,213,281.72', change: '+3.89%', highLow: '102,451.34 / Rp 94,288.07', marketCap: 'Rp 31,953.008T', volume: '1.538M', isUp: true },
  { id: 2, pair: 'ETH/DAI', price: '98,832.93 / Rp 1,612,213,281.72', change: '+3.89%', highLow: '102,451.34 / Rp 94,288.07', marketCap: 'Rp 31,953.008T', volume: '1.538M', isUp: true },
  { id: 3, pair: 'XRP/ETH', price: '98,832.93 / Rp 1,612,213,281.72', change: '-3.89%', highLow: '102,451.34 / Rp 94,288.07', marketCap: 'Rp 31,953.008T', volume: '1.538M', isUp: false },
  { id: 4, pair: 'BTC/DAI', price: '98,832.93 / Rp 1,612,213,281.72', change: '+3.89%', highLow: '102,451.34 / Rp 94,288.07', marketCap: 'Rp 31,953.008T', volume: '1.538M', isUp: true },
  { id: 5, pair: 'BTC/DAI', price: '98,832.93 / Rp 1,612,213,281.72', change: '+3.89%', highLow: '102,451.34 / Rp 94,288.07', marketCap: 'Rp 31,953.008T', volume: '1.538M', isUp: true },
];

export default function CryptoTable() {
  return (
    <div className="mt-8">
      <div className="flex gap-6 mb-6 border-b border-gray-800">
        <button className="pb-2 font-bold text-white border-b-2 border-transparent">Favorit</button>
        <button className="pb-2 font-bold text-accent-yellow border-b-2 border-accent-yellow">IDR</button>
        <button className="pb-2 font-bold text-text-gray hover:text-white transition-colors">USD</button>
        <button className="pb-2 font-bold text-text-gray hover:text-white transition-colors">BNB</button>
        <button className="pb-2 font-bold text-text-gray hover:text-white transition-colors">BTC</button>
        <button className="pb-2 font-bold text-text-gray hover:text-white transition-colors">ALTS</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead>
            <tr className="text-xs text-text-gray border-b border-gray-800">
              <th className="pb-4 font-medium pr-4">Pasangan</th>
              <th className="pb-4 font-medium text-right pr-4">Harga Terakhir</th>
              <th className="pb-4 font-medium text-right pr-4">Perubahan 24jam</th>
              <th className="pb-4 font-medium text-right pr-4">Tertinggi / Terendah 24jam</th>
              <th className="pb-4 font-medium text-right pr-4">Kapitalisasi Pasar</th>
              <th className="pb-4 font-medium text-right">Volume 24 Jam</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors">
                <td className="py-4 flex items-center gap-3 pr-4">
                  <Star className="w-4 h-4 text-text-gray hover:text-accent-yellow cursor-pointer" />
                  <span className="font-medium">{row.pair}</span>
                </td>
                <td className="py-4 text-right font-medium pr-4">{row.price}</td>
                <td className={`py-4 text-right font-medium pr-4 ${row.isUp ? 'text-up-green' : 'text-down-red'}`}>
                  {row.change}
                </td>
                <td className="py-4 text-right text-white pr-4">{row.highLow}</td>
                <td className="py-4 text-right text-white pr-4">{row.marketCap}</td>
                <td className="py-4 text-right text-white">{row.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
