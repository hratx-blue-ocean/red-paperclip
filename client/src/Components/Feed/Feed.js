import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import ItemCard from './ItemCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 800,
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        item
        xs={12}
        justifyContent="space-around"
        style={{ marginTop: '15px', marginBottom: '15px', color: '#161513' }}
      >
        <Button
          color="sortButton"
          variant="contained"
          className={classes.hover2}
        >
          Item Name
        </Button>
        <Button
          color="sortButton"
          variant="contained"
          className={classes.hover2}
        >
          Category
        </Button>
        <Button
          color="sortButton"
          variant="contained"
          className={classes.hover2}
        >
          Suprise Me!
        </Button>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid
          item
          xs={12}
          container
          style={{ justifyContent: 'center', marginBottom: '30px' }}
        >
          <Button variant="contained" spacing={1} color="textYellow">
            Show More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Feed;
