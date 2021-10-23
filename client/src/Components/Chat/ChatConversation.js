import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Modal from '@mui/material/Modal';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { makeStyles } from '@mui/styles';

import Jason from './img/Jason.jpg';
import Pingping from './img/Pingping.jpg';

import book from './img/book.jpeg';
import artWork from './img/artWork.jpeg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    padding: 20,
  },
  userText: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 20,
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '98%',
    background: 'white',
    border: '4px solid white',
    boxShadow: 75,
    borderRadius: '15px',
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover3: {
    color: '#6D5D59',

    '&:hover': {
      color: '#A10000',
    },
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function ChatConversation({
  chatsWithJesson,
  setChatsWithJesson,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {}, [chatsWithJesson]);

  return (
    <Paper
      elevation={6}
      style={{ height: 500, borderRadius: 30, padding: 30, overflow: 'auto' }}
    >
      <Grid container spacing={2}>
        <Grid container item xs={4} justifyContent="center">
          <Avatar alt="Jesson W" src={Jason} />
          <ListItemText primary="Jesson W" secondary="Trusted User" />
        </Grid>

        <Grid item xs={1}>
          <Avatar alt="book" src={book} sx={{ width: 56, height: 56 }} />
        </Grid>
        <Grid item xs={1}>
          <CompareArrowsIcon
            className={classes.hover3}
            style={{ fontSize: 60 }}
          />
        </Grid>
        <Grid item xs={1}>
          <Avatar alt="artWork" src={artWork} sx={{ width: 56, height: 56 }} />
        </Grid>

        <Grid container item xs={5} justifyContent="center">
          {/* <Button variant="contained" sx={{ width: 40, height: 40 }}>
            Close Deal
          </Button> */}

          <Button variant="contained" onClick={handleOpen}>
            Close Deal
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.modal}>
              <Grid
                container
                justifyContent="center"
                style={{ height: 300, borderRadius: 120, padding: 10 }}
              >
                <Grid
                  item
                  xs={12}
                  justifyContent="center"
                  style={{ height: 100, borderRadius: 120, padding: 10 }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Trade Comformation
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    Congratulation! The following trade has been successfully
                    made and has added to your Trade Journey!
                  </Typography>
                </Grid>
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
            </Box>
          </Modal>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.divider}>
        <Divider />
      </Grid>

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
      {chatsWithJesson.map((message) =>
        message[0] === 1 ? (
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Jesson W" src={Jason} />
            </ListItemAvatar>
            <ListItemText primary={message[2]} />
          </ListItem>
        ) : (
          <ListItem>
            <ListItemText className={classes.userText} primary={message[2]} />
            <ListItemAvatar>
              <Avatar alt="Pingping X" src={Pingping} />
            </ListItemAvatar>
          </ListItem>
        )
      )}
    </Paper>
  );
}
