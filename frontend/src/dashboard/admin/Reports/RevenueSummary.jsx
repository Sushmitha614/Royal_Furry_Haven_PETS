import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Fade } from '@mui/material';

export default function RevenueSummary() {
  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#ff9800,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Revenue Summary
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Revenue Trend (This Month vs Last Month)</Typography>
                <Box sx={{ height: 180, background: '#ffe0b2', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Yearly Revenue Comparison</Typography>
                <Box sx={{ height: 180, background: '#e1f5fe', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Refund Amount Breakdown</Typography>
                <Box sx={{ height: 120, background: '#f3e5f5', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Profit Margins</Typography>
                <Box sx={{ height: 120, background: '#c8e6c9', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}