'use client';

import { useEffect, useState } from 'react';
import { generatePlayers, Player } from '../app/(pagination)/data';

const ITEMS_PER_PAGE = 10;

export default function PaginatedTable() {
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // ✅ Generate random data only on the client
    const data = generatePlayers(100);
    setAllPlayers(data);
  }, []);

  const totalPages = Math.ceil(allPlayers.length / ITEMS_PER_PAGE);
  const currentData = allPlayers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Cricket Players</h2>

      {allPlayers.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <>
          <table className="w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Country</th>
                <th className="px-4 py-2 border">Runs</th>
                <th className="px-4 py-2 border">Matches</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((player) => (
                <tr key={player.id} className="text-center">
                  <td className="border px-4 py-2">{player.id}</td>
                  <td className="border px-4 py-2">{player.name}</td>
                  <td className="border px-4 py-2">{player.country}</td>
                  <td className="border px-4 py-2">{player.runs}</td>
                  <td className="border px-4 py-2">{player.matches}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`px-3 py-1 border rounded ${
                  page === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
