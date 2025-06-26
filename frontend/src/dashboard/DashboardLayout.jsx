import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/LOGO.png';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';

// Reuse the theme from LoginPage
const theme = createTheme({
  palette: {
    primary: { main: "#2196f3" },
    secondary: { main: "#9c27b0" },
    background: { default: "#fff" },
    text: { primary: "#333", secondary: "#666" },
  },
  typography: { fontFamily: "'Roboto', sans-serif" },
});

const drawerWidth = 240;

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
        <CssBaseline />
        <AdminTopbar handleDrawerToggle={handleDrawerToggle} />
        <Box component="nav" sx={{ width: { md: 240 }, flexShrink: { md: 0 } }}>
          <AdminSidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}