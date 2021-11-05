import React from 'react';
import { useState } from 'react';

import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

const drawerWidth = 240;

const Navigation = () => {

    const [drawer, setDrawer] = useState({
        open: false,
    })


    const toggleDrawer = () => {

        console.log(drawer.open)
        
        const open = !drawer.open

        setDrawer({open});

    }

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));


      

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar position="fixed" open={drawer.open}>
        <Toolbar variant="dense">
          <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawer.open} onClose={toggleDrawer} variant="persistent" sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}>
      <button onClick={toggleDrawer}>click</button>
      <Typography variant="h6" color="inherit" compnent="div">
          Menu Test
      </Typography>
      </Drawer>
    </Box>
  );
}

export default Navigation;