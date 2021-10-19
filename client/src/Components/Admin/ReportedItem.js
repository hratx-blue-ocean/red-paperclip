import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
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
  const itemDetails = {};

  return (
    <Grid container>
      <Grid item xs={12}>
        <ItemCard />
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          color="cardButton"
          variant="outlined"
          className={classes.hover2}
        >
          Remove Message
        </Button>
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          color="cardButton"
          variant="outlined"
          className={classes.hover2}
        >
          Remove Message
        </Button>
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          color="cardButton"
          variant="outlined"
          className={classes.hover2}
        >
          Remove Message
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReportedItem;
