import * as React from 'react';
import Grid from '@mui/material/Grid';

import ChatList from './ChatList';
import ChatRoom from './ChatRoom';

export default function Chat() {
  // on pageload  use effect
  // 1st request:
  // make an axio get request to (get user details --> chat's array)
  // pass in the current user's token
  // returns chatroom id string

  // 2nd request:
  // then block of the 1st request
  // make an axio get request to

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
