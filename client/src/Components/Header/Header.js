import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Hamburger from './Hamburger';

import { ItemsContext } from '../ItemsContext';

const Header = () => {
  const { isLoggedInState } = useContext(ItemsContext);
  const [isLoggedIn] = isLoggedInState;

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

  const history = useHistory();
  const handleLogoClick = () => {
    history.push('/');
  };
  return (
    <div className="header">
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#161513', color: 'white' }}
      >
        <Toolbar>
          <Container>
            <Grid container wrap="nowrap">
              <AttachFileIcon
                color="paperClip"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer', transform: 'rotate(45deg)' }}
                sx={{ fontSize: 40 }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }}
              >
                Red Paperclip&nbsp;
                {/* <CompareArrowsIcon />
            &nbsp;
            {`${colorsArr[random1]} ${itemsArr[random2]}`} */}
              </Typography>
              {isLoggedIn && (
                <>
                  <AccountCircleIcon />
                  <Typography variant="h6">Welcome, user!</Typography>
                </>
              )}
              <Hamburger />
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
