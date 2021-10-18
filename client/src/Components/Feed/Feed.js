import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemCard from './ItemCard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C2C2C',
    },
    secondary: {
      main: '#f0CC71',
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'flex-start',
    color: theme.palette.text.secondary,
  },
  bold: {
    fontWeight: 800,
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container maxWidth="xl">
          <List style={{ overflow: 'auto' }}>
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
                <Button variant="contained" spacing={1} color="secondary">
                  Show More
                </Button>
              </Grid>
            </Grid>
          </List>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Feed;
