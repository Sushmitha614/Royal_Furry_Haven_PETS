import React, { useState } from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import AdminSidebar from './AdminSidebar';
import DashboardMain from './Dashboard/Dashboard';
import Products from './Products/Products';
import Categories from './Categories/Categories';
import Orders from './Orders/Orders';
import Users from './Users/Users';
import Reports from './Reports/Reports';

const contentComponents = [
  <DashboardMain />,
  <Products />,
  <Categories />,
  <Orders />,
  <Users />,
  <Reports />, // <-- Replace <div>Reports Content</div> with <Reports />
];

export default function AdminDashboardLayout() {
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
      <AdminSidebar
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
