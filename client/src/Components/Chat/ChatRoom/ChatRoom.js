import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

import AddChat from './AddChat';
import ChatConversation from './ChatConversation';

export default function ChatRoom() {
  // useEffect watch the global currentChatRoom
  // renders the currentChatRoom

  // need to get both item photos for the trade items

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <List style={{ overflow: 'auto' }}>
          <ChatConversation />
        </List>
      </Grid>
      <Grid item xs={12}>
        {/* <AddChat
          chatsWithJesson={chatsWithJesson}
          setChatsWithJesson={setChatsWithJesson}
        /> */}
      </Grid>
    </Grid>
  );
}
