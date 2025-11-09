'use client';

import "./globals.css";
import Sidebar from "@/components/Sidebar";

import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar, Typography } from "@mui/material";

const drawerWidth = 250;

interface MainBarProps {
  open?: boolean
};

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open'})<MainBarProps>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: `-${drawerWidth}px`,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean,
};

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open'})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px) !important`,
    marginLeft: `${drawerWidth}px !important`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handlerDrawerClose = () => {
    setOpen(false);
  };

  return (
    <html lang='en'>
      <body>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position='fixed' open={open}>
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={[
                  {
                    mr: 2
                  },
                  open && { display: 'none' }
                ]}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1}}>
                Traider
              </Typography>
            </Toolbar>
          </AppBar>
          <Sidebar drawerWidth={drawerWidth} open={open} onClose={handlerDrawerClose}/>
          <Main open={open}>
            <DrawerHeader />
            {children}
          </Main>
        </Box>
      </body>
    </html>
  );
}