import React, { useContext } from 'react';
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
import { ItemsContext } from '../ItemsContext';
import SignInForm from './SignInForm';

const Hamburger = () => {
  const {
    isLoggedInState,
    anchorElState,
    menuOpenState,
    modalSignInState,
    modalCreateAcctState,
  } = useContext(ItemsContext);
  const [menuOpen, setMenuOpen] = menuOpenState;
  const [setSignInModalOpen] = modalSignInState;
  const [modalCreateAcctOpen, setModalCreateAcctOpen] = modalCreateAcctState;
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [anchorEl, setAnchorEl] = anchorElState;

  // updating Auth status for conditional rendering
  const handleAuthChange = (bool) => {
    setIsLoggedIn(bool);
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSignInModalOpen(false);
    setModalCreateAcctOpen(false);
    setMenuOpen(false);
  };

  const handleSignOut = (event) => {
    event.preventDefault();
    handleAuthChange(false);
    setMenuOpen(false);
    setAnchorEl(null);
  };

  // React Router Navigation
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
    setMenuOpen(false);
    setSignInModalOpen(false);
    setAnchorEl(null);
  };

  const handleMyProfileClick = () => {
    history.push('/profile');
    setMenuOpen(false);
    setSignInModalOpen(false);
    setAnchorEl(null);
  };

  const handleChatsClick = () => {
    history.push('/chat');
    setMenuOpen(false);
    setSignInModalOpen(false);
    setAnchorEl(null);
  };

  const handleAdminClick = () => {
    history.push('/admin');
    setMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
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
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem label={isLoggedIn ? 'LogOut' : 'LogIn'}>
            <SignInForm />
          </MenuItem>
          {isLoggedIn && (
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
