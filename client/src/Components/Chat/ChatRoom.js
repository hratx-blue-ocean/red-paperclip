import * as React from 'react';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { makeStyles } from '@mui/styles';

import Jason from './img/Jason.jpg';
import book from './img/book.jpeg';
import artWork from './img/artWork.jpeg';
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
