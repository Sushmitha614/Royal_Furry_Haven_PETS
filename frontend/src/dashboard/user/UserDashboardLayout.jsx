import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import UserSidebar from './UserSidebar';

export default function UserDashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <UserSidebar open={sidebarOpen} onToggle={handleToggleSidebar} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: theme =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: sidebarOpen ? '240px' : '60px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
