import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Fade } from '@mui/material';

export default function UserEngagement() {
  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#00bcd4,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          User Engagement
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>New Users (Monthly)</Typography>
                <Box sx={{ height: 120, background: '#b2ebf2', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>Most Active Users</Typography>
                <Box sx={{ height: 120, background: '#c8e6c9', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>User Retention Trends</Typography>
                <Box sx={{ height: 120, background: '#fff9c4', borderRadius: 2, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}