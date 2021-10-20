import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

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

export default function SortBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#494D53', marginTop: '60px' }}
      >
        <Grid container style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Grid container item xs={4} style={{ justifyContent: 'flex-end' }}>
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
            <Button
              color="sortButton"
              variant="contained"
              className={classes.hover2}
            >
              Item Name || Add Item +
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
              {'SORT BY: '}
            </Typography>
            <Button
              color="sortButton"
              variant="contained"
              className={classes.hover2}
            >
              Category
            </Button>
          </Grid>
          <Grid container item xs={4} style={{ justifyContent: 'flex-start' }}>
            <Button
              color="sortButton"
              variant="contained"
              className={classes.hover2}
            >
              Suprise Me!
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
