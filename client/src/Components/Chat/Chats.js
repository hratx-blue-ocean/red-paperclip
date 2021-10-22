import * as React from 'react';
import Grid from '@mui/material/Grid';

import Chat from './Chat';
import ChatRoom from './ChatRoom';

export default function Chats() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Chat
          name="Jason"
          message="Hey! I like your art work :)"
          timestamp="29 minutes ago"
          profilePic="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.psychologytoday.com%2Fus%2Ftherapists%2Fmichael-jason-wesson-hillsborough-nc%2F473253&psig=AOvVaw02BDPM3OTZU_1M89oMgazX&ust=1635000535140000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDcmeWh3vMCFQAAAAAdAAAAABAD"
        />
      </Grid>

      <Grid item xs={8}>
        <ChatRoom />
      </Grid>
    </Grid>
  );
}
