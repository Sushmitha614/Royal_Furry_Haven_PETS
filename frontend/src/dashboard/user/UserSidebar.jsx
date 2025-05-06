import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/LOGO.png';

const drawerWidthExpanded = 240;
const drawerWidthCollapsed = 85;

const navItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'My Orders', icon: <ShoppingCartIcon /> },
  { text: 'Profile', icon: <AccountCircleIcon /> },
  { text: 'Wishlist', icon: <FavoriteIcon /> },
];

export default function UserSidebar({ open: propOpen, onToggle, selectedIndex, onSelect }) {
  const [open, setOpen] = useState(propOpen ?? true);

  // Sync with parent if prop changes
  React.useEffect(() => {
    if (typeof propOpen === 'boolean') setOpen(propOpen);
  }, [propOpen]);

  const toggleDrawer = () => {
    setOpen(!open);
    if (onToggle) onToggle();
  };

  const handleListItemClick = (index) => {
    if (onSelect) onSelect(index);
  };

  return (
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 72,
          px: open ? 1.5 : 6, // Match admin sidebar: 1.5 (12px) when open, 6 (48px) when collapsed
          py: 2,
          justifyContent: open ? 'space-between' : 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            marginRight: open ? 10 : 0,
            transition: 'margin 0.6s',
            objectFit: 'cover',
          }}
        />
        {open && (
          <span
            style={{
              fontWeight: 600,
              fontSize: 16,
              whiteSpace: 'nowrap',
              flex: 1,
              marginLeft: 1,
            }}
          >
            Royal Furry Haven
          </span>
        )}
        <IconButton
          onClick={onToggle}
          sx={{
            color: 'white',
            ml: open ? 1 : 0,
            alignSelf: 'center',
          }}
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
              <ListItemIcon sx={{  color: 'white',
    minWidth: 0,
    mr: open ? 2 : 0,
    justifyContent: 'center',
    display: 'flex',
    width: open ? 'auto' : '100%', }}>
                {item.icon}
              </ListItemIcon>
            </Tooltip>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
