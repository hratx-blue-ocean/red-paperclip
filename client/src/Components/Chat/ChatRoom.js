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

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover3: {
    color: '#A10000',
    '&:hover': {
      color: '#ffffff',
    },
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function ChatList() {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={6} style={{ height: 520, borderRadius: 30 }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem>
              <ListItemButton component="a" href="/{username}">
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  style={{ height: 56 }}
                >
                  <ListItemAvatar>
                    <Avatar alt="Jesson W" src={Jason} />
                  </ListItemAvatar>
                  <ListItemText primary="Jesson W" secondary="Trusted User" />

                  <Grid item xs={3}>
                    <Avatar
                      alt="book"
                      src={book}
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <CompareArrowsIcon
                      className={classes.hover3}
                      style={{ fontSize: 60 }}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Avatar
                      alt="artWork"
                      src={artWork}
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>
                </Grid>
              </ListItemButton>
            </ListItem>
            <Grid container spacing={0} justifyContent="center">
              <Button variant="outlined" href="#outlined-buttons">
                Close Deal!
              </Button>
            </Grid>
          </List>
          <Divider />
        </nav>
        <div style={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <DeleteIcon className={classes.hover1} />
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
              <ListItemText primary="Hi, I really like your art work" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>JW</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Are you interested to trade with my book? It is an antique from ancient China!" />
            </ListItem>
            <ListItem>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 1,
                  l: 2,
                  bgcolor: 'background.paper',
                }}
              >
                <ListItemText primary="Wow, that's very cool! What year was the book and what it is about?" />
              </Box>
              <ListItemAvatar>
                <Avatar>M E</Avatar>
              </ListItemAvatar>
            </ListItem>
          </Box>
        </div>
      </Paper>
      <Paper elevation={6} style={{ height: 200, borderRadius: 30 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 30,
          }}
        >
          <Chip
            className={classes.hover1}
            icon={<MdPhone />}
            label="Audio Chat"
          />

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
      </Paper>
    </div>
  );
}
