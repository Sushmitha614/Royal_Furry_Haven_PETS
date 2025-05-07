import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Fade } from '@mui/material';

export default function ProductPerformance() {
  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#ff9800,#00bcd4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Product Performance
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Top 10 Best-Selling Products</Typography>
                <Box sx={{ height: 180, background: '#f3e5f5', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Least-Selling Products</Typography>
                <Box sx={{ height: 180, background: '#e1f5fe', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Category-wise Sales (Pie Chart)</Typography>
                <Box sx={{ height: 180, background: '#fff9c4', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Return Rate per Product</Typography>
                <Box sx={{ height: 180, background: '#ffe0b2', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}