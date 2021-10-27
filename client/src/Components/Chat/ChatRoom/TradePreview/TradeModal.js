import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
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
  hover3: {
    color: '#6D5D59',

    '&:hover': {
      color: '#A10000',
    },
  },
}));

export default function TradeModal({ trader1ItemPhoto, trader2ItemPhoto }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid container item xs={12} justifyContent="center">
      <Button variant="contained" color="success" onClick={handleOpen}>
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
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Trade Comformation
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Congratulation! The following trade has been successfully made
                and has added to your Trade Journey!
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Avatar
                alt="trader1ItemPhoto"
                src={trader1ItemPhoto}
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
                alt="trader2ItemPhoto"
                src={trader2ItemPhoto}
                sx={{ width: 56, height: 56 }}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
