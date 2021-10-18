import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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
            <Stack direction="row" spacing={3}>
              <Avatar alt="user" src="client/src/Components/Chat/img/Pingping.jpeg" />
              <Avatar alt="item" src="client/src/Components/Chat/img/item.png" />
            </Stack>

            <Stack direction="row" spacing={3}>
              <Avatar alt="user" src="client/src/Components/Chat/img/Pingping.jpeg" />
              <Avatar alt="item" src="client/src/Components/Chat/img/item.png" />
            </Stack>
          </Grid>

          <Grid item xs={8}>
            <div>Chat Room</div>
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