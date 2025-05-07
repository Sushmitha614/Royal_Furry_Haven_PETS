import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Fade, TextField, MenuItem } from '@mui/material';

export default function SalesReports() {
  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#673ab7,#00bcd4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Sales Reports
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <TextField label="Date Range" type="date" size="small" InputLabelProps={{ shrink: true }} />
          <TextField label="Category" select size="small" sx={{ minWidth: 150 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="local">Local Products</MenuItem>
            <MenuItem value="dog">Dog Food</MenuItem>
            <MenuItem value="cat">Cat Food</MenuItem>
            {/* ...other categories */}
          </TextField>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, background: 'linear-gradient(90deg,#00bcd4,#8bc34a)', color: '#fff' }}>
              <CardContent>
                <Typography variant="subtitle2">Total Orders</Typography>
                <Typography variant="h4" fontWeight={700}>1,234</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, background: 'linear-gradient(90deg,#673ab7,#00bcd4)', color: '#fff' }}>
              <CardContent>
                <Typography variant="subtitle2">Total Revenue (LKR)</Typography>
                <Typography variant="h4" fontWeight={700}>Rs. 2,450,000</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, background: 'linear-gradient(90deg,#ff9800,#ffb300)', color: '#fff' }}>
              <CardContent>
                <Typography variant="subtitle2">Avg. Order Value</Typography>
                <Typography variant="h4" fontWeight={700}>Rs. 1,986</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, background: 'linear-gradient(90deg,#009688,#00bcd4)', color: '#fff' }}>
              <CardContent>
                <Typography variant="subtitle2">Transactions</Typography>
                <Typography variant="h4" fontWeight={700}>1,120</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Placeholder for charts */}
        <Box mt={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>Sales Chart</Typography>
            <Box sx={{ height: 250, background: 'linear-gradient(90deg,#e1bee7,#b2ebf2)', borderRadius: 2 }} />
          </Card>
        </Box>
      </Box>
    </Fade>
  );
}