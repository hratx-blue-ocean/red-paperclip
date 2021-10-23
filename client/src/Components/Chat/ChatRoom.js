import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

import AddChat from './AddChat';
import ChatConversation from './ChatConversation';

export default function ChatRoom() {
  const [chatsWithJesson, setChatsWithJesson] = useState([
    [1, 2, 'Hi, I really like your art work', 1634948686],
    [
      1,
      2,
      'Are you interested to trade with my book? It is an antique from ancient China!',
      1634948687,
    ],
  ]);
  const [chatText, setChatText] = useState('');

  // useEffect watch the global currentChatRoom
  // renders the currentChatRoom

  // need to get both item photos for the trade items

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <List style={{ overflow: 'auto' }}>
          <ChatConversation
            chatsWithJesson={chatsWithJesson}
            setChatsWithJesson={setChatsWithJesson}
          />
        </List>
      </Grid>
      <Grid item xs={12}>
        <AddChat
          chatsWithJesson={chatsWithJesson}
          setChatsWithJesson={setChatsWithJesson}
        />
      </Grid>
    </Grid>
  );
}
