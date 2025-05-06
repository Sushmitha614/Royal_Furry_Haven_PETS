import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, IconButton, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/LOGO.png';
import { NavLink } from 'react-router-dom';

const drawerWidthExpanded = 240;
const drawerWidthCollapsed = 60;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin/products' },
  { text: 'Products', icon: <ShoppingCartIcon />, path: '/admin/products' },
  { text: 'Categories', icon: <CategoryIcon />, path: '/admin/categories' },
  { text: 'Orders', icon: <ShoppingCartIcon />, path: '/admin/orders' },
  { text: 'Users', icon: <PeopleIcon />, path: '/admin/users' },
  { text: 'Reports', icon: <AssessmentIcon />, path: '/admin/analytics' },
];

export default function AdminSidebar() {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected item

  // Add this function to fix the error
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  // Placeholder content for each nav item
  const contentComponents = [
    <div>Dashboard Content</div>,
    <div>Products Content</div>,
    <div>Categories Content</div>,
    <div>Orders Content</div>,
    <div>Users Content</div>,
    <div>Reports Content</div>,
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={(theme) => ({
          width: open ? drawerWidthExpanded : drawerWidthCollapsed,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          [`& .MuiDrawer-paper`]: {
            width: open ? drawerWidthExpanded : drawerWidthCollapsed,
            boxSizing: 'border-box',
            background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
            color: 'white',
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          display: { xs: 'none', md: 'block' },
        })}
        open={open}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, justifyContent: open ? 'flex-start' : 'center' }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              marginRight: open ? 12 : 0,
              transition: 'margin 0.3s',
            }}
          />
          {open && <span style={{ fontWeight: 700, fontSize: 18 }}>Royal Furry Haven</span>}
          <IconButton
            onClick={toggleDrawer}
            sx={{ marginLeft: 'auto', color: 'white' }}
            size="small"
            aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <List>
          {navItems.map((item, idx) => (
            <ListItem
              button
              key={item.text}
              selected={selectedIndex === idx}
              onClick={() => handleListItemClick(idx)}
              // REMOVE component={NavLink} and to={item.path}
              sx={{
                '&.active': {
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: 2,
                },
                mb: 1,
                justifyContent: open ? 'initial' : 'center',
                px: open ? 2 : 1,
              }}
            >
              <Tooltip title={open ? '' : item.text} placement="right">
                <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
              </Tooltip>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Main content area */}
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          background: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        {contentComponents[selectedIndex]}
      </Box>
    </Box>
  );
}
