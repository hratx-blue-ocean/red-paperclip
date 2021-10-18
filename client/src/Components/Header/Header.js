import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Hamburger from './Hamburger';

const Header = () => {
  const [auth, setAuth] = React.useState(false);

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
      <AppBar position="absolute">
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
          <Hamburger auth={auth} setAuth={setAuth} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
