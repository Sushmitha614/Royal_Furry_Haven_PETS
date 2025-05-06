import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from '../../assets/LOGO.png';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/user/profile' },
  { text: 'My Orders', icon: <ShoppingCartIcon />, path: '/user/orders' },
  { text: 'Wishlist', icon: <FavoriteIcon />, path: '/user/wishlist' },
];

export default function UserSidebar() {
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