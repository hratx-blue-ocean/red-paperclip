import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ForumIcon from '@mui/icons-material/Forum';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SignInForm from './SignInForm';

const Hamburger = (props) => {
  const { auth, setAuth } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAuthChange = (bool) => {
    setAuth(bool);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = (event) => {
    event.preventDefault();
    handleAuthChange(false);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem label={auth ? 'Logout' : 'Login'}>
            <SignInForm
              auth={auth}
              handleAuthChange={handleAuthChange}
              setAnchorEl={setAnchorEl}
            />
          </MenuItem>
          {auth && (
            <>
              <MenuItem>
                <ListItemIcon>
                  <HomeIcon fontSize="small" />
                </ListItemIcon>
                Home
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                My Profile
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ForumIcon fontSize="small" />
                </ListItemIcon>
                My Chats
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleSignOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </>
          )}
        </Menu>
        <MenuIcon onClick={handleMenu} />
      </IconButton>
    </>
  );
};

export default Hamburger;
