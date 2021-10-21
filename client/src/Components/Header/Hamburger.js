import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

import ListItemIcon from '@mui/material/ListItemIcon';
import ForumIcon from '@mui/icons-material/Forum';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logout from '@mui/icons-material/Logout';
import AuthModal from './AuthModal';
import { ItemsContext } from '../ItemsContext';

const Hamburger = () => {
  const { isLoggedInState } = useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isReturningUser, setIsReturningUser] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignInClick = () => {
    setShowAuthModal(true);
    setIsReturningUser(true);
    setAnchorEl(null);
  };

  const handleCreateAcctClick = () => {
    setShowAuthModal(true);
    setAnchorEl(null);
    setMenuOpen(true);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  // React Router Navigation
  const history = useHistory();

  const handleSignOut = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    setIsReturningUser(false);
    setShowAuthModal(false);
    setMenuOpen(false);
    history.push('/');
  };

  const handleHomeClick = () => {
    history.push('/');
    setMenuOpen(false);
  };

  const handleMyProfileClick = () => {
    history.push('/profile');
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleChatsClick = () => {
    history.push('/chat');
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleAdminClick = () => {
    history.push('/admin');
    setMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        sx={{ mr: 38 }}
      >
        <MenuIcon />
      </IconButton>
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
        {isLoggedIn ? (
          <Box>
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
          </Box>
        ) : (
          <Box>
            <MenuItem onClick={handleSignInClick}>Sign In</MenuItem>
            <MenuItem onClick={handleCreateAcctClick}>Create Account</MenuItem>
          </Box>
        )}
      </Menu>
      {showAuthModal && (
        <AuthModal
          setMenuOpen={setMenuOpen}
          anchorEl={anchorEl}
          menuOpen={menuOpen}
          handleMenuOpen={handleMenuOpen}
          showAuthModal={showAuthModal}
          setShowAuthModal={setShowAuthModal}
          isReturningUser={isReturningUser}
        />
      )}
    </Box>
  );
};

export default Hamburger;
