import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Typography variant="h2" component="h1">
        Welcome to Dashboard
      </Typography>
    </Box>
  );
}