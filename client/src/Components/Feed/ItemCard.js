import React from 'react';
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

export default function ItemCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Card style={{ backgroundColor: '#494D53' }}>
          <CardMedia
            component="img"
            height="45%"
            image="https://images.squarespace-cdn.com/content/v1/5acd0a3c8ab722892928be5a/1565878992439-2ER3KM60OHYNPNF2LPP3/8B059829-6D7F-424F-B9A7-4C44C112CFF9.jpg?format=2500w"
            style={{ objectFit: 'cover' }}
            alt="Axe Set"
          />
          <Grid container style={{ marginTop: '6px' }}>
            <Grid
              container
              item
              xs={10}
              justifyContent="flex-start"
              alignItems="baseline"
            >
              <Typography
                variant="h5"
                style={{ marginLeft: '22px', color: '#F0CC71' }}
              >
                Rustic Axe Set
              </Typography>
            </Grid>
            <Grid container item xs={2} justifyContent="center">
              <IconButton aria-label="settings">
                <StarIcon />
              </IconButton>
            </Grid>
          </Grid>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500], marginLeft: '8px' }}
                aria-label="user_name"
              />
            }
            title="Jeffrey Dahmer"
            subheader="6 hours ago"
            style={{
              marginBottom: '-20px',
              marginTop: '-12px',
              color: '#b70007',
            }}
          />
          <CardContent>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              style={{ marginBottom: '14px' }}
            >
              <Typography
                variant="body2"
                color="white"
                style={{ marginLeft: '10px' }}
                display="inline"
              >
                {'These beautiful axes were custom made in the heart of Minnesota' + '... '}
                <Link
                  className={classes.hover1}
                  component="button"
                  underline="none"
                  display="inline"
                >
                  Read more
                </Link>
              </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <Grid container item xs={6} justifyContent="center">
                <Button
                  color="cardButton"
                  variant="contained"
                  className={classes.hover2}
                >
                  Offer Trade
                </Button>
              </Grid>
              <Grid container item xs={6} justifyContent="space-evenly">
                <Button
                  color="cardButton"
                  variant="contained"
                  className={classes.hover2}
                >
                  Report Item
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
