import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// You can replace this with a real chart library like recharts or chart.js
export default function SalesChart() {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Sales Overview
        </Typography>
        <img
          src="https://placehold.co/600x200/6a11cb/fff?text=Sales+Chart"
          alt="Sales Chart Placeholder"
          style={{ width: '100%', borderRadius: 12 }}
        />
      </CardContent>
    </Card>
  );
}
