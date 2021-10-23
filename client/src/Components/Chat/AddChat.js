import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from 'react';

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

export default function AddChat({ chatsWithJesson, setChatsWithJesson }) {
  const [chatText, setChatText] = useState('');
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
    const newMessage = [2, 1, chatText, Date.now()];
    console.log('from addChat:', chatsWithJesson);
    setChatsWithJesson([...chatsWithJesson, newMessage]);
    setChatText('');
  }
  return (
    <Paper elevation={6} style={{ height: 180, borderRadius: 30 }}>
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
              <Chip
                className={classes.hover1}
                icon={<MdPhone />}
                label="Audio Chat"
              />
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
              label="Private Chat Room With Jesson"
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
