import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ForumIcon from '@mui/icons-material/Forum';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logout from '@mui/icons-material/Logout';
import AuthModal from './AuthModal';
import { ItemsContext } from '../ItemsContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 600,
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: '#2C2C2C',
      color: '#FFFFFF',
      border: '2px solid white',
    },
  },
}));

const Hamburger = () => {
  const classes = useStyles();

  const {
    isLoggedInState,
    currentUserState,
    showAuthModalState,
    activeItemState,
    menuOpenState,
    handleMenuOpen,
    anchorElState,
  } = useContext(ItemsContext);
  const [activeItem, setActiveItem] = activeItemState;
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [currentUser, setCurrentUser] = currentUserState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;
  const [menuOpen, setMenuOpen] = menuOpenState;
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [anchorEl, setAnchorEl] = anchorElState;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignInClick = () => {
    setShowAuthModal(true);
    setIsReturningUser(true);
    setAnchorEl(null);
  };

  const handleCreateAcctClick = () => {
    setIsReturningUser(false);
    setShowAuthModal(true);
    setAnchorEl(null);
    setMenuOpen(true);
  };

  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setMenuOpen(true);
  // };

  // React Router Navigation
  const history = useHistory();

  const handleSignOut = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    setIsReturningUser(false);
    setShowAuthModal(false);
    setMenuOpen(false);
    setAnchorEl(null);
    setCurrentUser({
      userFirst: '',
      userLast: '',
      userPFP: '',
      userPhone: '',
      userEmail: '',
      userZIP: '',
      availableItem: '',
      tradeHistory: [],
      watchedItems: {},
    });
    setActiveItem({
      createdAt: '',
      itemOwner: '',
      active: false,
      itemOwnerPhoto: '',
      report: 0,
      itemDescription: '',
      itemOwnerUID: '',
      itemCategory: '',
      itemPhoto: '',
      itemName: '',
      itemLocation: '',
    });
    history.push('/');
  };

  const handleHomeClick = () => {
    history.push('/');
    setMenuOpen(false);
    setAnchorEl(null);
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
      >
        <MenuIcon />
      </IconButton>
      <Menu
        className={classes.menu}
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
          <Box style={{ margin: '15px' }}>
            <MenuItem onClick={handleHomeClick}>
              <ListItemIcon>
                <HomeIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              Home
            </MenuItem>
            <MenuItem onClick={handleMyProfileClick}>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleChatsClick}>
              <ListItemIcon>
                <ForumIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              My Chats
            </MenuItem>
            <Divider />
            {currentUser.permissions === 'admin' && (
              <MenuItem onClick={handleAdminClick}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon fontSize="small" color="secondary" />
                </ListItemIcon>
                Admin
              </MenuItem>
            )}
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <Logout fontSize="small" color="secondary" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Box>
        ) : (
          <Box style={{ margin: '15px' }}>
            <MenuItem onClick={handleSignInClick}>
              <ListItemIcon>
                <LoginIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              Sign In
            </MenuItem>
            <MenuItem onClick={handleCreateAcctClick}>
              <ListItemIcon>
                <PersonAddIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              Create Account
            </MenuItem>
          </Box>
        )}
      </Menu>
      {showAuthModal && (
        <AuthModal
          setMenuOpen={setMenuOpen}
          anchorEl={anchorEl}
          menuOpen={menuOpen}
          handleMenuOpen={handleMenuOpen}
          isReturningUser={isReturningUser}
        />
      )}
    </Box>
  );
};

export default Hamburger;
