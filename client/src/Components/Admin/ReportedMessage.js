import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
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
  const handleDeleteMessageClick = () => {
    console.log('Clicked Delete Message');
  };
  const handleDismissReportClick = () => {
    console.log('Clicked Dismiss Report');
  };
  const handleBanUserClick = () => {
    console.log('Clicked Ban User');
  };

  return (
    <Card
      sx={{
        backgroundColor: '#494D53',
        border: '1px solid',
        borderColor: '#FFF',
        borderRadius: '15px',
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
              color: '#FFF',
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
            color="inherit"
            variant="outlined"
            className={classes.hover2}
            onClick={handleDeleteMessageClick}
          >
            Delete Message
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            className={classes.hover2}
            onClick={handleDismissReportClick}
          >
            Dismiss Report
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            className={classes.hover2}
            onClick={handleBanUserClick}
          >
            Ban User
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ReportedMessage;
