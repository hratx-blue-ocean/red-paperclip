import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
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

const Chat = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div>Chat List</div>
            <Grid container spacing={3}>

              <Grid item xs={6}>
                <Avatar alt="user" src="client/src/Components/Chat/img/Pingping.jpeg" sx={{ width: 60, height: 60 }} />
              </Grid>

              <Grid item xs={6}>
                <Avatar alt="item" src="client/src/Components/Chat/img/item.png" sx={{ width: 60, height: 60 }} />
              </Grid>

              <Grid item xs={6}>
                <Avatar alt="user" src="client/src/Components/Chat/img/Pingping.jpeg" sx={{ width: 60, height: 60 }} />
              </Grid>

              <Grid item xs={6}>
                <Avatar alt="item" src="client/src/Components/Chat/img/item.png" sx={{ width: 60, height: 60 }} />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained">Archive Chat</Button>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={8}>
            <div>Chat Room</div>
            <Grid container spacing={3}>

              <Grid item xs={3}>
                <Avatar alt="user" src="client/src/Components/Chat/img/Jason.jpeg" sx={{ width: 60, height: 60 }} />
              </Grid>

              <Grid item xs={3}>
                <Avatar alt="item" src="client/src/Components/Chat/img/item.png" sx={{ width: 60, height: 60 }} />
              </Grid>

              <Grid item xs={3}>
                <Button variant="contained">Close Deal</Button>
              </Grid>

            </Grid>

            <Grid container spacing={3}>

              <Grid item xs={12}>

                <Paper sx={{ maxWidth: 800, my: 4, mx: 'auto', p: 3 }}>
                  <Grid item>

                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar>U</Avatar>
                      </Grid>
                      <Grid item xs>
                        <Typography>Are you interested in trading your High End Knife Collection for my Set of 3 Axes?</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>U</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography>I really like your item!</Typography>
                    </Grid>
                  </Grid>

                </Paper>

              </Grid>


            </Grid>
            <form name="message" action="">
              <input name="usermsg" type="text" id="usermsg" />
              <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
            </form>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>

  );
}

export default Chat;