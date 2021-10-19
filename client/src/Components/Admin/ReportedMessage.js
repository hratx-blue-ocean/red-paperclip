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
    color: '#666',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover2: {
    color: '#FFFFFF',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

const ReportedMessage = ({ user, message }) => {
  const classes = useStyles();

  return (
    <Card
      sx={{
        backgroundColor: '#494D53',
        border: '1px solid',
        borderColor: '#FFF',
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={3}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500], marginLeft: '8px' }}
                aria-label="user_name"
              />
            }
            title={user}
            subheader="6 hours ago"
            style={{
              color: '#b70007',
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography
            variant="body2"
            color="white"
            style={{ marginLeft: '10px' }}
            display="inline"
          >
            Reported Message:
          </Typography>
          <Typography
            variant="body2"
            color="white"
            style={{ marginLeft: '10px' }}
            display="inline"
          >
            &quot;{message}&quot;
          </Typography>
        </Grid>
        <Grid
          container
          style={{ margin: '10px' }}
          spacing={3}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button
            color="cardButton"
            variant="outlined"
            className={classes.hover2}
          >
            Delete Message
          </Button>
          <Button
            color="cardButton"
            variant="outlined"
            className={classes.hover2}
          >
            Dismiss Report
          </Button>
          <Button
            color="cardButton"
            variant="outlined"
            className={classes.hover2}
          >
            Ban User
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ReportedMessage;
