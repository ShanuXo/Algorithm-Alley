import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Add MenuIcon if you're going to use it

const LandingNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    // Check authentication status on mount
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'rgba(0, 0, 0, 0.85)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="/AALogo.jpg" alt="Logo" style={{ height: 40, width: 40, marginRight: 10, borderRadius: '50%' }} />
          <span>Algorithm Alley</span>
        </Typography>
        {!isAuthenticated ? (
          <>
            <Button color="inherit" onClick={() => window.location.href = '/signin'}>Sign In</Button>
            <Button color="inherit" onClick={() => window.location.href = '/register'}>Register</Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        )}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default LandingNavBar;
