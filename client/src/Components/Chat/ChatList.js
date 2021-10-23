import * as React from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Jason from './img/Jason.jpg';
import TestingChatList from './TestingChatList';

export default function ChatList() {
  return (
    <Paper elevation={3} style={{ borderRadius: 30 }}>
      <ListItem disablePadding>
        <ListItemButton component="a" href="/{username}">
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Jesson W" src={Jason} />
            </ListItemAvatar>
            <ListItemText primary="Jesson W" secondary="2 hours ago" />
          </ListItem>
        </ListItemButton>
      </ListItem>

      <Divider />

      <TestingChatList />

      {/* <List>
        <ListItemButton component="a" href="/{username}">
          <ListItem>
            <ListItemAvatar>
              <Avatar>MS</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Matt S" secondary="Oct 25, 2021" />
          </ListItem>
        </ListItemButton>
        <ListItemButton component="a" href="/{username}">
          <ListItem>
            <ListItemAvatar>
              <Avatar>BH</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Blake H" secondary="Oct 25, 2021" />
          </ListItem>
        </ListItemButton>
        <ListItemButton component="a" href="/{username}">
          <ListItem>
            <ListItemAvatar>
              <Avatar>BC</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Bekah C" secondary="Oct 24, 2021" />
          </ListItem>
        </ListItemButton>
        <ListItemButton component="a" href="/{username}">
          <ListItem>
            <ListItemAvatar>
              <Avatar>CE</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cory E" secondary="Oct 20, 2021" />
          </ListItem>
        </ListItemButton>
        <ListItemButton component="a" href="/{username}">
          <ListItem>
            <ListItemAvatar>
              <Avatar>TM</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Travis M" secondary="Oct 20, 2021" />
          </ListItem>
        </ListItemButton>

        <ListItemButton component="a" href="/{username}">
          <ListItem>
            <ListItemAvatar>
              <Avatar>WF</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Will F" secondary="Oct 20, 2021" />
          </ListItem>
        </ListItemButton>

        <ListItemButton component="a" href="/{username}">
          <ListItem>
            <ListItemAvatar>
              <Avatar>PX</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Pingping X" secondary="Sep 29, 2021" />
          </ListItem>
        </ListItemButton>
      </List> */}
    </Paper>
  );
}
