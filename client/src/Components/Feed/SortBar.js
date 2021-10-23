import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../ItemsContext';
import CategorySelector from './CategorySelector';
import AuthModal from '../Header/AuthModal';

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
    },
  },
}));

export default function SortBar({
  itemsLength,
  setSelection,
  handleSuprise,
  getAllItems,
  setSorted,
}) {
  const classes = useStyles();

  const { currentUserState, activeItemState, showAuthModalState } =
    useContext(ItemsContext);
  const [currentUser] = currentUserState;
  const [activeItem, setActiveItem] = activeItemState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;

  const history = useHistory();
  const handleSendToProfile = () => {
    history.push('/profile');
  };

  const handleCreateAcctClick = () => {
    setShowAuthModal(true);
  };

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: '#494D53', marginTop: '60px' }}
    >
      <Container>
        <Grid
          container
          style={{
            marginTop: '10px',
            marginBottom: '10px',
          }}
          wrap="nowrap"
          justifyContent="space-evenly"
        >
          <Grid container item xs={4} style={{ justifyContent: 'flex-start' }}>
            <Typography
              className={classes.bold}
              style={{
                color: '#F0CC71',
                marginRight: '8px',
                marginTop: '5px',
                fontSize: 18,
              }}
            >
              {'FILTER BY: '}
            </Typography>
            <CategorySelector
              setSelection={setSelection}
              getAllItems={getAllItems}
              itemsLength={itemsLength}
              setSorted={setSorted}
            />
          </Grid>
          <Grid container item xs={4} style={{ justifyContent: 'center' }}>
            <Button
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={handleSuprise}
            >
              <Typography>Surprise Me!</Typography>
            </Button>
          </Grid>
          <Grid container item xs={4} style={{ justifyContent: 'center' }}>
            <Typography
              className={classes.bold}
              style={{
                color: '#F0CC71',
                marginRight: '8px',
                marginTop: '5px',
                fontSize: 18,
              }}
            >
              {'ACTIVE ITEM: '}
            </Typography>
            {activeItem.itemName && (
              <Button
                color="sortButton"
                variant="contained"
                className={classes.hover2}
                onClick={handleSendToProfile}
              >
                <Typography>{activeItem.itemName}</Typography>
              </Button>
            )}
            {!currentUser.availableItem && currentUser.email && (
              <Button
                color="sortButton"
                variant="contained"
                className={classes.hover2}
                onClick={handleSendToProfile}
              >
                <Typography>Add Item +</Typography>
              </Button>
            )}
            {!currentUser.email && (
              <Button
                color="sortButton"
                variant="contained"
                className={classes.hover2}
                onClick={handleCreateAcctClick}
              >
                <Typography>Add Item +</Typography>
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
