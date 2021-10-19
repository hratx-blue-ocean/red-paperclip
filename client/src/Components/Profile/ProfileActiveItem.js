import * as React from 'react';
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
// import Link from '@mui/material/Link';
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

export default function ProfileActiveItem() {
  const classes = useStyles();

  const [starFill, setStarFill] = React.useState(false);

  const handleWatch = () => {
    setStarFill(true);
  };

  const handleUnwatch = () => {
    setStarFill(false);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          sx={{ marginTop: 1 }}
        >
          <Grid container item xs={4} justifyContent="center">
            <Button
              color="cardButton"
              variant="outlined"
              className={classes.hover2}
            >
              Item Options
            </Button>
          </Grid>
          <Grid container item xs={4} justifyContent="space-evenly">
            <Button
              color="cardButton"
              variant="outlined"
              className={classes.hover2}
            >
              Change Item
            </Button>
          </Grid>
          <Grid container item xs={4} justifyContent="space-evenly">
            <Button
              color="cardButton"
              variant="outlined"
              className={classes.hover2}
            >
              Delete Item
            </Button>
          </Grid>
        </Grid>
        <Card style={{ backgroundColor: '#494D53', marginTop: 20 }}>
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
              {!starFill && (
                <IconButton onClick={handleWatch}>
                  <StarIcon className={classes.hover1} />
                </IconButton>
              )}
              {starFill && (
                <IconButton onClick={handleUnwatch}>
                  <StarIcon
                    className={classes.hover1}
                    style={{ color: '#F0CC71' }}
                  />
                </IconButton>
              )}
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
              style={{ marginBottom: '20px' }}
            >
              <Typography
                variant="body2"
                color="white"
                style={{ marginLeft: '10px' }}
                display="inline"
              >
                {'These beautiful axes were custom made in the heart of Minnesota' +
                  '... '}
                <Button
                  className={classes.hover1}
                  component="button"
                  underline="none"
                  display="inline"
                  color="cardButton"
                >
                  Read more
                </Button>
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
