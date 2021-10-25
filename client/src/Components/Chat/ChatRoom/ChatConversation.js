import React, { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { ItemsContext } from '../../ItemsContext';
import TradePreview from './TradePreview/TradePreview';

import Jason from '../img/Jason.jpg';
import Pingping from '../img/Pingping.jpg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    padding: 20,
  },
  userText: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 20,
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '98%',
    background: 'white',
    border: '4px solid white',
    boxShadow: 75,
    borderRadius: '15px',
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover3: {
    color: '#6D5D59',

    '&:hover': {
      color: '#A10000',
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

  const { currentUserState, currentChatRoomState } = useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const [currentChatRoom, setCurrentChatRoom] = currentChatRoomState;
  const trader1 = currentUser.firstName;

  useEffect(() => {}, [chatsWithJesson]);

  return (
    <Paper
      elevation={6}
      style={{ height: 500, borderRadius: 30, padding: 30, overflow: 'auto' }}
    >
      <TradePreview />

      <Grid item xs={12} className={classes.divider}>
        <Divider />
      </Grid>

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
          <>
            <ListItemAvatar>
              <Avatar alt="Jesson W" src={Jason} />
            </ListItemAvatar>
            <ListItemText primary={message[2]} />
          </>
        ) : (
          <>
            <p className={classes.userText} primary={message[2]} />
            <ListItemAvatar>
              <Avatar alt="Pingping X" src={Pingping} />
            </ListItemAvatar>
          </>
        )
      )}
    </Paper>
  );
}
