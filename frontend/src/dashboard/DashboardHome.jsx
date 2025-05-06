import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const stats = [
  { label: 'Total Sales', value: 'Rs. 1,200,000', icon: <AttachMoneyIcon fontSize="large" />, color: '#2196f3' },
  { label: 'Orders', value: 320, icon: <ShoppingCartIcon fontSize="large" />, color: '#9c27b0' },
  { label: 'Products', value: 120, icon: <CategoryIcon fontSize="large" />, color: '#2196f3' },
  { label: 'Users', value: 80, icon: <PeopleIcon fontSize="large" />, color: '#9c27b0' },
];

export default function DashboardHome() {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <Box sx={{ mr: 2, color: stat.color }}>{stat.icon}</Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}