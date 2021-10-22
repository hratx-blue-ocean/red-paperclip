import * as React from 'react';
import Grid from '@mui/material/Grid';

import AddChat from './AddChat';
import ChatConversation from './ChatConversation';

export default function ChatList() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ChatConversation />
      </Grid>
      <Grid item xs={12}>
        <AddChat />
      </Grid>
    </Grid>
  );
}
