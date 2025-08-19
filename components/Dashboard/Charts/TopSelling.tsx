'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export type BookData = {
  title: string;
  sales: number;
};

export default function TopSellingBooksChart({ data }: { data: BookData[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-8 antialiased">
      <h2 className="text-xl font-semibold mb-4">Top Selling Books</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="title" type="category" width={150} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value: number) => [value, 'Units Sold']} />
          <Bar dataKey="sales" fill="#15278c" radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}