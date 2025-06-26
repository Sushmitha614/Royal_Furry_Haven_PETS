import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function FeaturedInfoCard({ title, value, icon }) {
  return (
    <Card sx={{ minWidth: 180, m: 1, display: 'flex', alignItems: 'center' }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {value}
        </Typography>
      </CardContent>
      {icon && <div style={{ fontSize: 40, marginRight: 16 }}>{icon}</div>}
    </Card>
  );
}