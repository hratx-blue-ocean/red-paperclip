import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ForumIcon from '@mui/icons-material/Forum';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logout from '@mui/icons-material/Logout';
import { ItemsContext } from '../ItemsContext';

const DropDownMenu = () => {
  const [isLoggedInState, menuOpenState] = useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [menuOpen, setMenuOpen] = menuOpenState;

  const handleSignOut = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    setMenuOpen(false);
  };

  // React Router Navigation
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
    setMenuOpen(false);
  };

  const handleMyProfileClick = () => {
    history.push('/profile');
    setMenuOpen(false);
  };

  const handleChatsClick = () => {
    history.push('/chat');
    setMenuOpen(false);
  };

  const handleAdminClick = () => {
    history.push('/admin');
    setMenuOpen(false);
  };

  return (
    <div>
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
    </div>
  );
};

export default DropDownMenu;
