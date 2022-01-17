import React from 'react';
import { withStyles, useTheme } from '@mui/styles';
import clsx from 'clsx';
import { Box, AppBar, Toolbar, useMediaQuery } from '@mui/material';
import HomeLogo from './icons/HomeLogo';
import ProfileMenu from './ProfileMenu';

const drawerWidth = 270;
const Styles = theme => ({
  appBarRoot: {
    padding: '0 1%',
  },
  appBarRootHide: {
    display: 'none'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  logo: {
    flexGrow: 1,
    paddingLeft: 60
  },
  logoShift: {
    paddingLeft: 0
  }
})

const CustomAppBar = ({ classes, drawerOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
      classes={{ root: (isMobile && drawerOpen) ? classes.appBarRootHide : classes.appBarRoot }} 
      position="relative"
      data-testid="appBar"
    >
      <Toolbar disableGutters className={classes.toolBar}>
        <Box
          className={clsx(classes.logo, {
            [classes.logoShift]: drawerOpen,
          })}
        >
          <HomeLogo />
        </Box>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(Styles)(CustomAppBar);
