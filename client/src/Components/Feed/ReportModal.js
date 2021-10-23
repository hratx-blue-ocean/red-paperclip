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

export default function ReportModal({
  handleReportClose,
  reported,
  handleReport,
  item,
}) {
  const classes = useStyles();

  const { isLoggedInState } = useContext(ItemsContext);
  const [isLoggedIn] = isLoggedInState;

  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: 'flex-end' }}>
        <IconButton onClick={handleReportClose}>
          <CloseIcon className={classes.hover3} style={{ fontSize: 45 }} />
        </IconButton>
      </Grid>
      {isLoggedIn && !reported && (
        <Grid
          container
          style={{ justifyContent: 'center', marginBottom: '40px' }}
          padding={1}
          spacing={5}
        >
          <Grid container item xs={9} justifyContent="space-evenly">
            <Button
              fullWidth
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={() => handleReport(item.uid)}
            >
              Offensive Item
            </Button>
          </Grid>

          <Grid container item xs={9} justifyContent="space-evenly">
            <Button
              fullWidth
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={() => handleReport(item.uid)}
            >
              Hazardous Item
            </Button>
          </Grid>

          <Grid container item xs={9} justifyContent="space-evenly">
            <Button
              fullWidth
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={() => handleReport(item.uid)}
            >
              Stolen Item
            </Button>
          </Grid>

          <Grid container item xs={9} justifyContent="space-evenly">
            <Button
              fullWidth
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={() => handleReport(item.uid)}
            >
              Cursed Item
            </Button>
          </Grid>

          <Grid container item xs={9} justifyContent="space-evenly">
            <Button
              fullWidth
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={() => handleReport(item.uid)}
            >
              Illegal Item
            </Button>
          </Grid>

          <Grid container item xs={9} justifyContent="space-evenly">
            <Button
              fullWidth
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={() => handleReport(item.uid)}
            >
              Other Prohibited Item
            </Button>
          </Grid>
        </Grid>
      )}
      {isLoggedIn && reported && (
        <Grid
          container
          style={{
            justifyContent: 'center',
            marginBottom: '182px',
            marginTop: '70px',
          }}
          padding={1}
          spacing={5}
        >
          <Grid container item xs={9} justifyContent="center">
            <Typography
              style={{ color: '#F0CC71', fontSize: 35, fontWeight: 800 }}
            >
              Thank you for your feedback!
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
