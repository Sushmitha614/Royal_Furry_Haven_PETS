import React, { useState } from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import UserSidebar from './UserSidebar';

const contentComponents = [
  <div>Home Content</div>,
  <div>My Orders Content</div>,
  <div>Profile Content</div>,
  <div>Wishlist Content</div>,
];

export default function UserDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <UserSidebar
        open={sidebarOpen}
        onToggle={handleToggleSidebar}
        selectedIndex={selectedIndex}
        onSelect={handleSidebarSelect}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          flexShrink: 1,
          p: 0,
          backgroundColor: '#fff',
          overflow: 'auto',
        }}
      >
        <Box sx={{ p: 3, minHeight: '100vh' }}>
          {contentComponents[selectedIndex]}
        </Box>
      </Box>
    </Box>
  );
}
