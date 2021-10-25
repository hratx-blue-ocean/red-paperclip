import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ChatList from './ChatList/ChatList';
import ChatRoom from './ChatRoom/ChatRoom';
import { ItemsContext } from '../ItemsContext';

export default function Chat() {
  const { isLoggedInState } = useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;

  return (
    <>
      {isLoggedIn ? (
        <>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <ChatList />
            </Grid>
            <Grid item xs={8}>
              <ChatRoom />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container item justifyContent="center">
            <Typography
              variant="h3"
              align="center"
              sx={{ color: 'text.white' }}
            >
              Wubba Lubba Dub Dub!
              <br />
              ACCESS DENIED
              <br />
              You must first login!
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
}
