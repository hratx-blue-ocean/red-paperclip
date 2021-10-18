import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SignInForm from './SignInForm';

const Header = () => {
  const [auth, setAuth] = React.useState(false);
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

  const colorsArr = [
    'Brown',
    'Black',
    'Purple',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Red',
    'White',
  ];

  const itemsArr = [
    'Spatula',
    'Lamp',
    'Mirror',
    'Chair',
    'Sofa',
    'House',
    'Pen',
    'Ball',
    'Desk',
  ];

  const random1 = Math.floor(Math.random() * 9);
  const random2 = Math.floor(Math.random() * 9);

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <AttachFileIcon /> Red Paperclip <CompareArrowsIcon />{' '}
            {`${colorsArr[random1]} ${itemsArr[random2]}`}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </div>
          )}
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
                <SignInForm auth={auth} handleAuthChange={handleAuthChange} />
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
