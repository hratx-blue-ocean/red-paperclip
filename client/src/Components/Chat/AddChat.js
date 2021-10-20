import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';

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

export default function AddChat() {
  const classes = useStyles();

  return (
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
  );
}
