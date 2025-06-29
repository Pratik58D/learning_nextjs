'use client';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const barData = [
  { year: '2018', runs: 1200 },
  { year: '2019', runs: 900 },
  { year: '2020', runs: 600 },
  { year: '2021', runs: 750 },
  { year: '2022', runs: 1100 },
];

const pieData = [
  { name: 'ODI', value: 18000 },
  { name: 'Test', value: 8500 },
  { name: 'T20I', value: 4000 },
];

export default function ChartDashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Virat Kohli - Cricket Stats</h1>

      {/* Bar Chart */}
      <div className="w-full h-72">
        <h2 className="text-lg font-semibold mb-2">Runs per Year</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="runs" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="w-full h-72">
        <h2 className="text-lg font-semibold mb-2">Runs by Format</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
