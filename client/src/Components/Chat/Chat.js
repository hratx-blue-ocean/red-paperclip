import * as React from 'react';
import Grid from '@mui/material/Grid';

import ChatList from './ChatList';
import ChatRoom from './ChatRoom';

export default function BasicList() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <ChatList />
      </Grid>

      <Grid item xs={8}>
        <ChatRoom />
      </Grid>
    </Grid>
  );
}
