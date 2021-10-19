import * as React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ForumIcon from '@mui/icons-material/Forum';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logout from '@mui/icons-material/Logout';
import SignInForm from './SignInForm';

const Hamburger = (props) => {
  const { auth, setAuth } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

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

  const history = useHistory();

  const handleHomeClick = () => {
    console.log('home clicked!');
    history.push('/');
    setOpen(false);
    setAnchorEl(null);
  };

  const handleMyProfileClick = () => {
    console.log('my profile clicked!');
    history.push('/profile');
    setOpen(false);
    setAnchorEl(null);
  };

  const handleChatsClick = () => {
    console.log('chats clicked!');
    history.push('/chat');
    setOpen(false);
    setAnchorEl(null);
  };

  const handleAdminClick = () => {
    console.log('chats clicked!');
    history.push('/chat');
    setOpen(false);
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
        onClick={handleMenu}
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
          <MenuItem label={auth ? 'LogOut' : 'LogIn'}>
            <SignInForm
              auth={auth}
              handleAuthChange={handleAuthChange}
              setAnchorEl={setAnchorEl}
            />
          </MenuItem>
          {auth && (
            <>
              <MenuItem onClick={handleHomeClick}>
                <ListItemIcon>
                  <HomeIcon fontSize="small" />
                </ListItemIcon>
                Home
              </MenuItem>
              <MenuItem onClick={handleMyProfileClick}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                My Profile
              </MenuItem>
              <MenuItem onClick={handleChatsClick}>
                <ListItemIcon>
                  <ForumIcon fontSize="small" />
                </ListItemIcon>
                My Chats
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleAdminClick}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon fontSize="small" />
                </ListItemIcon>
                Admin
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
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Hamburger;
