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
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'flex-start',
    color: theme.palette.text.secondary,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  bold: {
    fontWeight: 600,
  },
  hover: {
    color: '#2C2C2C',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function ItemCard() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container>
          <Card sx={{ backgroundColor: '#494D53' }}>
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
                  color="secondary"
                  style={{ marginLeft: '22px' }}
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
                color: '#f0CC71',
                marginBottom: '-20px',
                marginTop: '-12px',
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
                    className={classes.hover}
                    component="button"
                    underline="always"
                    display="inline"
                  >
                    See more
                  </Link>
                </Typography>
              </Grid>
              <Grid container item xs={12} justifyContent="center">
                <Grid container item xs={6} justifyContent="center">
                  <Button
                    color="primary"
                    variant="contained"
                    // style={{ height: '40px' }}
                  >
                    Offer Trade
                  </Button>
                </Grid>
                <Grid container item xs={6} justifyContent="space-evenly">
                  <Button
                    color="primary"
                    variant="contained"
                    // style={{ height: '40px' }}
                  >
                    Report Item
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
