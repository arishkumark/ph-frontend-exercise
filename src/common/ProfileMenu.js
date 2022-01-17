import React from 'react';
import { withStyles } from '@mui/styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';

const Styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  }
})
const data = [
  {
    id: 'account',
    label: 'Account',
    url: ''
  },
  {
    id: 'user',
    label: 'User Managment',
    url: ''
  },
  {
    id: 'team',
    label: 'Team',
    url: ''
  },
  {
    id: 'logout',
    label: 'Logout',
    url: ''
  }
]
const ProfileMenu = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.container} data-testid="profileMenu">
      <Typography>Arish</Typography>
      <IconButton
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleRoundedIcon color="primary" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          data.map((item) => (
            <MenuItem key={item.id}>{item.label}</MenuItem>
          ))
        }
      </Menu>
    </Box>
  )
}

export default withStyles(Styles)(ProfileMenu);

