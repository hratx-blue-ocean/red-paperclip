import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import MdPhone from '@mui/icons-material/Phone';
import { makeStyles } from '@mui/styles';
import { ItemsContext } from '../../ItemsContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  sendButton: { display: 'flex', justifyContent: 'flex-end' },

  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function AddChat() {
  const classes = useStyles();
  const [chatText, setChatText] = useState('');
  const { currentUserState, currentChatRoomState, apiUrlState, getChatRoom } =
    useContext(ItemsContext);
  const [apiUrl, setApiUrl] = apiUrlState;
  const [currentUser, setCurrentUser] = currentUserState;
  const [currentChatRoom, setCurrentChatRoom] = currentChatRoomState;
  const {
    chatId,
    trader1,
    trader1Photo,
    trader1ItemPhoto,
    trader2,
    trader2Photo,
    trader2ItemPhoto,
    messages,
  } = currentChatRoom;
  const { firstName, imageUrl } = currentUser;

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${apiUrl}/addChatMessage`, {
        message: chatText,
        userName: firstName,
        userPhoto: imageUrl,
        chatRoomId: chatId,
      })
      .then(() => {
        getChatRoom(chatId);
        setChatText('');
      })
      .catch((err) => {
        console.log('Error adding a new message');
      });
    // make an axios request sending the current chat text ot the server
    // on response will reset the chat text state
  }
  return (
    <Paper elevation={6} style={{ height: 180, borderRadius: 20 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <form className="addChat" onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 30,
              }}
            >
              {/* <Chip
                className={classes.hover1}
                icon={<MdPhone />}
                label="Audio Chat"
              /> */}
              <Button
                className={classes.sendButton}
                variant="contained"
                color="success"
                type="submit"
              >
                Send
              </Button>
            </Box>
            <TextField
              fullWidth
              id="fullWidth"
              label="Enter message"
              multiline
              rows={2}
              value={chatText}
              onInput={(e) => setChatText(e.target.value)}
            />
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}
