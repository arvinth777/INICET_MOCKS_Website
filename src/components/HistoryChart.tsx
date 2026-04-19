import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface HistoryPoint {
  date: string;
  score: number;
  percentage: number;
}

interface HistoryChartProps {
  data: HistoryPoint[];
}

export default function HistoryChart({ data }: HistoryChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 10, fill: '#94a3b8' }} 
          axisLine={false} 
          tickLine={false} 
        />
        <YAxis 
          domain={[0, 100]} 
          tick={{ fontSize: 10, fill: '#94a3b8' }} 
          axisLine={false} 
          tickLine={false} 
          tickFormatter={(val) => `${val}%`}
        />
        <Tooltip 
          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
          formatter={(value: number) => [`${value}%`, 'Accuracy']}
        />
        <Line 
          type="monotone" 
          dataKey="percentage" 
          stroke="#2563eb" 
          strokeWidth={3}
          dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }} 
          activeDot={{ r: 6 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
