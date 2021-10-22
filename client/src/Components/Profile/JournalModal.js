/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '98%',
  background: '#000000e5',
  border: '4px solid white',
  boxShadow: 75,
  borderRadius: '15px',
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 600,
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

export default function JournalModal({ handleJournalClose, journalText }) {
  const classes = useStyles();
  const [newJournalText, setNewJournalText] = useState('');

  const handleChange = (e) => {
    setNewJournalText(e.target.value);
    console.log('New journal text: ', newJournalText);
  };

  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: 'flex-end' }}>
        <IconButton onClick={handleJournalClose}>
          <CloseIcon className={classes.hover3} style={{ fontSize: 45 }} />
        </IconButton>
      </Grid>
      <TextField
        name="itemDesc"
        onChange={handleChange}
        style={{
          margin: '0 auto',
          display: 'flex',
          width: 400,
          marginTop: 20,
        }}
        id="editItemDescription"
        label="Journal entry for this item"
        variant="filled"
        multiline
        rows={8}
      />
      <Button
        style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
        variant="contained"
      >
        Add Journal Entry
      </Button>
      <Button
        onClick={handleJournalClose}
        style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
        variant="contained"
      >
        Cancel
      </Button>
    </div>
  );
}
