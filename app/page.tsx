import Navbar from "@/components/Navbar";
import MarketHeader from "@/components/MarketHeader";
import CryptoCard from "@/components/CryptoCard";
import CryptoTable from "@/components/CryptoTable";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <main className="px-6 pt-8">
        <MarketHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <CryptoCard 
            pair="TKO/IDR" 
            price="Rp 5,261.3" 
            change="-3.82%" 
            volume="2,258 IDR" 
            isUp={false} 
          />
          <CryptoCard 
            pair="TKO/IDR" 
            price="Rp 5,261.3" 
            change="-3.82%" 
            volume="2,258 IDR" 
            isUp={false} 
          />
          <CryptoCard 
            pair="TKO/IDR" 
            price="Rp 5,261.3" 
            change="+3.82%" 
            volume="2,258 IDR" 
            isUp={true} 
          />
          <CryptoCard 
            pair="TKO/IDR" 
            price="Rp 5,261.3" 
            change="+3.82%" 
            volume="2,258 IDR" 
            isUp={true} 
          />
        </div>

        <CryptoTable />
      </main>
    </div>
  );
}
