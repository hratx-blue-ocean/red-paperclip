import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Hamburger from './Hamburger';
import { ItemsContext } from '../ItemsContext';

const MenuBar = () => {
  const { isLoggedInState, menuOpenState, currentUserState } =
    useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  const randomItem = () => {
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
    return `${colorsArr[Math.floor(Math.random() * colorsArr.length)]} ${
      itemsArr[Math.floor(Math.random() * itemsArr.length)]
    }`;
  };
  const [randomItemText, setRandomItemText] = useState(randomItem());
  const history = useHistory();
  const handleLogoClick = () => {
    history.push('/');
  };
  const handleCompareArrowsClick = () => {
    setRandomItemText(randomItem());
  };

  return (
    <AppBar
      position="fixed"
      className="header"
      style={{ backgroundColor: '#161513', color: 'white' }}
    >
      <Toolbar>
        <Container maxWidth="lg">
          <Grid container wrap="nowrap">
            <Grid container item wrap="nowrap" alignItems="center">
              <AttachFileIcon
                color="paperClip"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer', transform: 'rotate(45deg)' }}
                sx={{ fontSize: 40 }}
              />
              <Typography
                variant="h5"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }}
              >
                Red Paperclip&nbsp;
              </Typography>
              <Typography
                variant="h5"
                onClick={handleCompareArrowsClick}
                style={{ cursor: 'pointer' }}
              >
                <CompareArrowsIcon />
              </Typography>
              <Typography variant="h5">
                &nbsp;
                {randomItemText}
              </Typography>
              {isLoggedIn && (
                <>
                  <Avatar src={currentUser.imageUrl} />
                </>
              )}
            </Grid>
            <Grid item align="right">
              <Hamburger
                onClick={handleModalOpen}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAnchorEl={setAnchorEl}
                anchorEl={anchorEl}
              />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
