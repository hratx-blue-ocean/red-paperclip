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
    <>
      <Paper
        elevation={6}
        style={{ height: 95, borderRadius: 10, padding: 30 }}
      >
        <TradePreview />
      </Paper>
      <Paper
        elevation={6}
        style={{ height: 360, padding: 28, borderRadius: 10, overflow: 'auto' }}
      >
        {messages !== undefined ? (
          messages.map((messageObj) => {
            const { userName, userPhoto, message } = messageObj;
            if (userName === currentUser.firstName) {
              return (
                // eslint-disable-next-line no-underscore-dangle
                <ListItem key={messageObj.timestamp._seconds}>
                  <ListItemText
                    className={classes.userText}
                    primary={message}
                  />
                  <ListItemAvatar>
                    <Avatar alt={userName} src={userPhoto} />
                  </ListItemAvatar>
                </ListItem>
              );
            }
            return (
              // eslint-disable-next-line no-underscore-dangle
              <ListItem key={messageObj.timestamp._seconds}>
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
    </>
  );
}
