import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    padding: 20,
  },
  userText: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 20,
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '98%',
    background: 'white',
    border: '4px solid white',
    boxShadow: 75,
    borderRadius: '15px',
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover3: {
    color: '#6D5D59',

    '&:hover': {
      color: '#A10000',
    },
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function TradeDetails({
  trader1,
  trader1Photo,
  trader1ItemPhoto,
  trader2,
  trader2Photo,
  trader2ItemPhoto,
}) {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={4} justifyContent="center">
        <Avatar
          alt="trader2Photo"
          src={trader2Photo}
          sx={{ width: 56, height: 56 }}
        />

        <ListItemText primary={trader2} secondary="Trusted User" />
      </Grid>

      <Grid item xs={1}>
        <Avatar
          alt="trader1ItemPhoto"
          src={trader1ItemPhoto}
          sx={{ width: 56, height: 56 }}
        />
      </Grid>

      <Grid item xs={1}>
        <CompareArrowsIcon
          className={classes.hover3}
          style={{ fontSize: 60 }}
        />
      </Grid>

      <Grid item xs={1}>
        <Avatar
          alt="trader2ItemPhoto"
          src={trader2ItemPhoto}
          sx={{ width: 56, height: 56 }}
        />
      </Grid>
    </>
  );
}
