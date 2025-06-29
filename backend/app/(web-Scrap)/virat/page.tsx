'use client';

import { useEffect, useState } from 'react';

type ScrapedData = {
  name: string;
  intro: string;
  image: string | null;
};

export default function HomePage() {
  const [data, setData] = useState<ScrapedData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/scrape')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
         console.log(data);
      })
      .catch((err) => {
        console.error('Error fetching scraped data:', err);
        setLoading(false);
      });
  }, []);
 

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  if (!data) return <div className="p-6 text-red-500 text-center">Failed to load data.</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
      {data.image && (
        <img
          src={data.image}
          alt={data.name}
          className="w-60 h-auto rounded shadow mb-4"
        />
      )}
      <p className="text-red-700">{data.intro}</p>
    </div>
  );
}
