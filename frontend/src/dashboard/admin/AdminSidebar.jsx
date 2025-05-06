import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import logo from '../../assets/LOGO.png';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard' },
  { text: 'Products', icon: <ShoppingCartIcon />, path: '/admin/dashboard/products' },
  { text: 'Categories', icon: <CategoryIcon />, path: '/admin/dashboard/categories' },
  { text: 'Orders', icon: <ShoppingCartIcon />, path: '/admin/dashboard/orders' },
  { text: 'Users', icon: <PeopleIcon />, path: '/admin/dashboard/users' },
  { text: 'Reports', icon: <AssessmentIcon />, path: '/admin/dashboard/reports' },
];

export default function AdminSidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
          color: 'white',
        },
        display: { xs: 'none', md: 'block' },
      }}
      open
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <img src={logo} alt="Logo" style={{ width: 48, height: 48, borderRadius: '50%', marginRight: 12 }} />
        <span style={{ fontWeight: 700, fontSize: 18 }}>Royal Furry Haven</span>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              '&.active': {
                background: 'rgba(255,255,255,0.15)',
                borderRadius: 2,
              },
              mb: 1,
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}