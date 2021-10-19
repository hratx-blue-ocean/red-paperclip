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

const ReportedMessage = ({ message }) => {
  const classes = useStyles();

  return (
    <Card style={{ backgroundColor: '#494D53' }} className={classes.root}>
      <Grid
        container
        style={{ marginTop: '6px' }}
        xs={12}
        justifyContent="flex-start"
        alignItems="baseline"
      >
        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="body2"
            color="white"
            style={{ marginLeft: '10px' }}
            display="inline"
          >
            {message}
          </Typography>
        </Grid>
        <Grid container spacing={3}>
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
      </Grid>
    </Card>
  );
};

export default ReportedMessage;
