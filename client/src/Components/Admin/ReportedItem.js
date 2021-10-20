import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ItemCard from '../Feed/ItemCard';

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
}));

const ReportedItem = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ItemCard />
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          className={classes.hover2}
          sx={{ height: 60 }}
        >
          Delete Item
        </Button>
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          className={classes.hover2}
          sx={{ height: 60 }}
        >
          Dismiss Report
        </Button>
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          className={classes.hover2}
          sx={{ height: 60 }}
        >
          Ban User
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReportedItem;
