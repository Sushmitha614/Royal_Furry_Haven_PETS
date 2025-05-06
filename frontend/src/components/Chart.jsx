import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Chart({ data, xKey, yKey, title }) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h4>{title}</h4>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={yKey} fill="#2196f3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}