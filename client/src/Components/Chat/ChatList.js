import * as React from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

import PreviousChats from './PreviousChats';
import CurrentChat from './CurrentChat';
import Jason from './img/Jason.jpg';

export default function ChatList() {
  return (
    <Paper elevation={3} style={{ borderRadius: 30 }}>
      <CurrentChat name="Jason" profilePic={Jason} timestamp="42 minutes ago" />

      <Divider />

      <PreviousChats />
    </Paper>
  );
}
