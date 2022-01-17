import React, { useState, useEffect } from 'react';
import { withStyles } from '@mui/styles';
import clsx from 'clsx';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryList from '../modules/navigation/CategoryList';
import logo from '../logo.svg';
import ErrorCard from './ErrorCard';

const drawerWidth = 270;
const Styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    zIndex: 1202,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 60,
    zIndex: 1202
  },
  drawerIcon: {
    padding: '10px 0 14px 8px'
  },
  loader: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: '50%',
    left: '50%',
    animation: 'App-logo-spin infinite 20s linear'
  }
})

const NAVIGATION_URL = 'https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms';

const CustomDrawer = ({ classes, open, onDrawerClick, onNodeToggle }) => {
  const [navigation, setNavigation] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(NAVIGATION_URL);
      const navData = await response.json();
      setNavigation(navData);
    } catch(e) {
      setNavigation('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  if (!navigation) {
    return (
      <Box data-testid="navigationLoading">
        <img className={classes.loader} src={logo} alt="logo" />
      </Box>
    )
  }

  if (navigation === 'error') {
    return <ErrorCard />
  }

  return (
    <Box data-testid="navigationContent">
      <Drawer
        open={open}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Box className={classes.drawerIcon}>
          <IconButton onClick={onDrawerClick}>
            <MenuIcon color="primary" />
          </IconButton>
        </Box>
        <CategoryList
          data={navigation}
          drawerOpen={open}
          onNodeToggle={onNodeToggle}
        />
      </Drawer>
    </Box>
  )
}

export default withStyles(Styles)(CustomDrawer);

