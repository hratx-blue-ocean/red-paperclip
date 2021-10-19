import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ItemCard from './ItemCard';
import SortBar from './SortBar';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 800,
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SortBar />
      <Grid
        container
        spacing={6}
        style={{ justifyContent: 'space-evenly', marginTop: '20px' }}
      >
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
          style={{ justifyContent: 'center', marginBottom: '10px' }}
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
