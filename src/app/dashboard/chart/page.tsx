'use client';

import React from 'react';
import { users } from '@/components/data';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const cityCounts: { city: string; users: number }[] = [];

users.forEach((user) => {
  const existing = cityCounts.find((item) => item.city === user.city);

  if (existing) {
    existing.users += 1;
  } else {
    cityCounts.push({ city: user.city, users: 1 });
  }
});

const ChartPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Users per City</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={cityCounts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPage;
