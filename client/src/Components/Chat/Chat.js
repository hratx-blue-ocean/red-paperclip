import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ChatList from './ChatList.js';
import ChatRoom from './ChatRoom.js';

export default function BasicList() {
  return (
    <Box m={2} pt={2}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ChatList />
          </Grid>

          <Grid item xs={8}>
            <ChatRoom />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
