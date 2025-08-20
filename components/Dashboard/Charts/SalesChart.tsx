'use client'; // This is a Client Component

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data structure (will come from API)
export type SalesData = {
  name: string; // e.g., "Jan", "Feb"
  sales: number; // e.g., 4000
  revenue: number; // e.g., 2400
};

export default function SalesChart({ data }: { data: SalesData[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md ">
      <h2 className="text-2xl font-semibold mb-4 text-[#15278c]">Monthly Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
            formatter={(value: number, name: string) => {
              if (name === "Units Sold") return [value.toLocaleString(), "Units Sold"];
              if (name === "Revenue") return [`$${value.toLocaleString()}`, "Revenue"];
              return [value,name];
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" name="Units Sold" strokeWidth={2} dot={{ r: 2 }} />
          <Line type="monotone" dataKey="revenue" stroke="#10b981" name="Revenue" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}