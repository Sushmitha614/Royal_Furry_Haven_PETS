import React from 'react';
import { Box, Grid } from '@mui/material';
import OverviewCards from './OverviewCards';
import SalesChart from './SalesChart';
import RecentOrders from './RecentOrders';

export default function DashboardMain() {
  return (
    <Box sx={{ width: '100%', p: { xs: 1, md: 2 } }}>
      <OverviewCards />
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={8}>
          <SalesChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentOrders />
        </Grid>
      </Grid>
    </Box>
  );
}
