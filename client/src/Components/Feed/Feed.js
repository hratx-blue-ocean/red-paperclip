import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ItemCard from './ItemCard';

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
      <List style={{ overflow: 'auto' }}>
        <Grid container justifyContent="space-between" spacing={6}>
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
      </List>
    </div>
  );
};

export default Feed;
