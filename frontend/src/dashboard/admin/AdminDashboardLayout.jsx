import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import AdminSidebar from './AdminSidebar';

export default function AdminDashboardLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AdminSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}