import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import UserSidebar from './UserSidebar';

export default function UserDashboardLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <UserSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}