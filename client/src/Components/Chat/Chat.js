import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ItemsContext } from '../ItemsContext';

import ChatList from './ChatList';
import ChatRoom from './ChatRoom';

export default function Chat() {
  const { currentUserState } = useContext(ItemsContext);
  const [currentUser] = currentUserState;
  // on pageload  use effect
  // 1st request:
  // make an axio get request to (get user details --> chat's array)
  // pass in the current user's token
  // returns chatroom id string

  // 2nd request:
  // then block of the 1st request
  // make an axio get request to

  return (
    <>
      {currentUser.permissions === 'admin' ? (
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ChatList />
          </Grid>

          <Grid item xs={8}>
            <ChatRoom />
          </Grid>
        </Grid>
      ) : (
        <Grid container item justifyContent="center">
          <Typography variant="h3" align="center" sx={{ color: 'text.white' }}>
            Wubba Lubba Dub Dub!
            <br />
            ACCESS DENIED
          </Typography>
        </Grid>
      )}
    </>
  );
}
