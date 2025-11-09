"use client";

import { useEffect, useState } from "react";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin&order=market_cap_desc&per_page=3&page=1&sparkline=false'
        );
        const data = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchCryptoData();
    // Refresh every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="container py-8">
        <div className="flex justify-center items-center gap-8">
          <div className="text-muted-foreground">Loading crypto prices...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-8">
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
        {cryptoData.map((crypto) => (
          <div
            key={crypto.id}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-muted/40 hover:bg-muted/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm uppercase">
                {crypto.symbol}
              </span>
              <span className="font-bold text-base">
                ${crypto.current_price.toLocaleString('en-US', { 
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2 
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

