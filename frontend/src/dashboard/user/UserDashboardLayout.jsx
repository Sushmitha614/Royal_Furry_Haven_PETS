import React, { useState } from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import UserSidebar from './UserSidebar';
import Home from './Home';
import Orders from './Orders';
import Profile from './Profile';
import Wishlist from './Wishlist';

const contentComponents = [
  <Home />,
  <Orders />,
  <Profile />,
  <Wishlist />,
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
