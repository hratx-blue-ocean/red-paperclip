import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ItemCard from '../Feed/ItemCard';

const useStyles = makeStyles(() => ({
  button: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

const ReportedItem = ({ item }) => {
  const classes = useStyles();
  const handleDeleteItemClick = () => {
    console.log('Clicked Delete Item');
  };
  const handleDismissReportClick = () => {
    console.log('Clicked Dismiss Report');
  };
  const handleBanUserClick = () => {
    console.log('Clicked Ban User');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ItemCard item={item} key={item.uid} />
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          className={classes.button}
          sx={{ height: 60 }}
          onClick={handleDeleteItemClick}
        >
          Delete Item
        </Button>
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          className={classes.button}
          sx={{ height: 60 }}
          onClick={handleDismissReportClick}
        >
          Dismiss Report
        </Button>
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          className={classes.button}
          sx={{ height: 60 }}
          onClick={handleBanUserClick}
        >
          Ban User
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReportedItem;
