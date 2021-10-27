import React, { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Modal from '@mui/material/Modal';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { makeStyles } from '@mui/styles';
import { ItemsContext } from '../../ItemsContext';
import TradePreview from './TradePreview/TradePreview';

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

export default function ChatConversation() {
  const classes = useStyles();
  const { currentUserState, currentChatRoomState } = useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const [currentChatRoom, setCurrentChatRoom] = currentChatRoomState;
  const {
    trader1,
    trader1Photo,
    trader1ItemPhoto,
    trader2,
    trader2Photo,
    trader2ItemPhoto,
    messages,
  } = currentChatRoom;

  return (
    <Paper
      elevation={6}
      style={{ height: 500, borderRadius: 30, padding: 30, overflow: 'auto' }}
    >
      <TradePreview />

      <Grid item xs={12} className={classes.divider}>
        <Divider />
      </Grid>
      {messages !== undefined ? (
        messages.map((messageObj) => {
          const { userName, userPhoto, message } = messageObj;
          if (userName === currentUser.firstName) {
            return (
              // eslint-disable-next-line no-underscore-dangle
              <ListItem key={messageObj.timestamp}>
                <ListItemText className={classes.userText} primary={message} />
                <ListItemAvatar>
                  <Avatar alt={userName} src={userPhoto} />
                </ListItemAvatar>
              </ListItem>
            );
          }
          return (
            // eslint-disable-next-line no-underscore-dangle
            <ListItem key={messageObj.timestamp}>
              <ListItemAvatar>
                <Avatar alt={userName} src={userPhoto} />
              </ListItemAvatar>
              <ListItemText primary={message} />
            </ListItem>
          );
        })
      ) : (
        <div />
      )}
    </Paper>
  );
}
