import * as React from "react";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import { spacing } from '@mui/system';
import RoomIcon from '@mui/icons-material/Room';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

import Jason from './img/Jason.jpg';


export default function ChatList() {
  return (
    <div>
      <Paper elevation={6} style={{ height: 520 }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem>
              <ListItemButton component="a" href="/{username}">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Jesson W" src={Jason} />
                  </ListItemAvatar>
                  <ListItemText primary="Jesson W" secondary="Trusted User" />
                  <Chip icon={<MdPhone />} label="Call me" />
                </ListItem>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </nav>
        <div style={{ width: '100%' }}>
          <Box
            component="span"
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
              }}
            >
              <DeleteIcon />
            </Box>
            <ListItem>
              <ListItemAvatar>
                <Avatar>JW</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Hi, I am interested to make a trade with you!" />
            </ListItem>
          </Box>
          <Box
            component="span"
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>JW</Avatar>
              </ListItemAvatar>
              <ListItemText primary="How you like that?" />
            </ListItem>
          </Box>
        </div>
      </Paper>
      <Paper elevation={6} style={{ height: 200 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
          }}
        >
          <Button variant="contained" color="success">
            Send
          </Button>
        </Box>
        <Box m={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="fullWidth"
                label="Private Chat Room With Jesson"
                multiline
                rows={3}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper >
    </div >
  );
}