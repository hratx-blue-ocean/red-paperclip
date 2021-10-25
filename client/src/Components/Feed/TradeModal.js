/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { ItemsContext } from '../ItemsContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '98%',
  background: '#000000e5',
  border: '4px solid white',
  boxShadow: 75,
  borderRadius: '15px',
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 600,
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover3: {
    color: '#A10000',
    '&:hover': {
      color: '#ffffff',
    },
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function TradeModal({
  handleTradeClose,
  trade,
  handleTrade,
  item,
}) {
  const classes = useStyles();

  const { currentUserState, activeItemState, isLoggedInState } =
    useContext(ItemsContext);
  const [isLoggedIn] = isLoggedInState;
  const [activeItem, setActiveItem] = activeItemState;
  const [currentUser] = currentUserState;

  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: 'flex-end' }}>
        <IconButton onClick={handleTradeClose}>
          <CloseIcon className={classes.hover3} style={{ fontSize: 45 }} />
        </IconButton>
      </Grid>
      {!trade && isLoggedIn && (
        <Grid
          container
          style={{
            justifyContent: 'center',
            marginBottom: '39px',
          }}
          padding={4}
        >
          <Grid
            item
            xs={5}
            container
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            {isLoggedIn && activeItem.itemPhoto && (
              <Avatar
                sx={{
                  border: '4px solid black',
                  borderRadius: '15px',
                  width: 100,
                  height: 100,
                }}
                src={activeItem.itemPhoto}
                variant="square"
              />
            )}
            {isLoggedIn && !activeItem.itemPhoto && (
              <Typography
                style={{ color: '#FFFFFF', fontSize: 35, fontWeight: 800 }}
              >
                My Item
              </Typography>
            )}
          </Grid>
          <Grid
            item
            xs={2}
            container
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <CompareArrowsIcon style={{ color: '#FFFFFF', fontSize: 100 }} />
          </Grid>
          <Grid
            item
            xs={5}
            container
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <Avatar
              sx={{
                border: '4px solid black',
                borderRadius: '15px',
                width: 100,
                height: 100,
              }}
              src={item.itemPhoto}
              variant="rounded"
            />
          </Grid>

          <Grid
            container
            item
            xs={6}
            style={{ justifyContent: 'center', marginTop: '10px' }}
          >
            <Button
              fullWidth
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={handleTrade}
            >
              Submit Offer
            </Button>
          </Grid>
        </Grid>
      )}
      {trade && isLoggedIn && (
        <Grid
          container
          style={{
            justifyContent: 'center',
            marginBottom: '105px',
            marginTop: '46px',
            marginLeft: '13px',
            marginRight: '13px',
          }}
          padding={6}
        >
          <Grid container item xs={12} justifycontent="center">
            <Typography
              style={{ color: '#F0CC71', fontSize: 35, fontWeight: 800 }}
            >
              Your offer has been sent!
            </Typography>
          </Grid>
        </Grid>
      )}
      {!isLoggedIn && (
        <Grid
          container
          style={{
            justifyContent: 'center',
            marginBottom: '105px',
            marginTop: '46px',
            marginLeft: '13px',
            marginRight: '13px',
          }}
          padding={6}
        >
          <Grid container item xs={12} justifycontent="center">
            <Typography
              style={{ color: '#FFFFFF', fontSize: 35, fontWeight: 800 }}
            >
              Please Sign-In Or Create An Account
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
