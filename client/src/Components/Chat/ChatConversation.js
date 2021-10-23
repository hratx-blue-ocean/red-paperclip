import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { makeStyles } from '@mui/styles';

import Jason from './img/Jason.jpg';
import Pingping from './img/Pingping.jpg';

import book from './img/book.jpeg';
import artWork from './img/artWork.jpeg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  userText: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 20,
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover3: {
    color: '#A10000',
    '&:hover': {
      color: '#ffffff',
    },
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function ChatConversation({
  chatsWithJesson,
  setChatsWithJesson,
}) {
  const classes = useStyles();

  useEffect(() => {}, [chatsWithJesson]);

  return (
    <Paper
      elevation={6}
      style={{ height: 500, borderRadius: 30, padding: 30, overflow: 'auto' }}
    >
      <Grid container spacing={2}>
        <Grid container item xs={4} justifyContent="center">
          <Avatar alt="Jesson W" src={Jason} />
          <ListItemText primary="Jesson W" secondary="Trusted User" />
        </Grid>

        <Grid item xs={1}>
          <Avatar alt="book" src={book} sx={{ width: 56, height: 56 }} />
        </Grid>
        <Grid item xs={1}>
          <CompareArrowsIcon
            className={classes.hover3}
            style={{ fontSize: 60 }}
          />
        </Grid>
        <Grid item xs={1}>
          <Avatar alt="artWork" src={artWork} sx={{ width: 56, height: 56 }} />
        </Grid>

        <Grid container item xs={5} justifyContent="center">
          <Button
            variant="outlined"
            href="#outlined-buttons"
            sx={{ width: 40, height: 40, color: 'black' }}
          >
            Close Deal!
          </Button>
        </Grid>
      </Grid>
      <Divider />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <DeleteIcon className={classes.hover1} />
      </Box>
      {chatsWithJesson.map((message) =>
        message[0] === 1 ? (
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Jesson W" src={Jason} />
            </ListItemAvatar>
            <ListItemText primary={message[2]} />
          </ListItem>
        ) : (
          <ListItem>
            <ListItemText className={classes.userText} primary={message[2]} />
            <ListItemAvatar>
              <Avatar alt="Pingping X" src={Pingping} />
            </ListItemAvatar>
          </ListItem>
        )
      )}
    </Paper>
  );
}
