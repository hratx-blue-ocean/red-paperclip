import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { makeStyles } from '@mui/styles';

// import { ItemsContext } from '../ItemsContext';

// const addToTradeJourney = () => {
//   const { currentUserState } = useContext(ItemsContext);
//   const [currentUser] = currentUserState;
//   if(currentUser.tradeHistory) {
//     current.tradeHistory.push((tradedItem));
//   }
// };

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
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                Trade Comformation
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Congratulation on finding the item you like! By clicking the
                CONFIRM below, we will mark this trade as complete and will move
                it to your Trade Journey!
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="success"
                type="submit"
                onClick={handleClose}
              >
                Confirm!
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              style={{ marginTop: '20px' }}
            >
              <Grid item xs={5} display="flex" justifyContent="center">
                <Avatar
                  alt="trader2ItemPhoto"
                  src={trader2ItemPhoto}
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="center">
                <CompareArrowsIcon
                  className={classes.hover3}
                  style={{ fontSize: 100 }}
                />
              </Grid>
              <Grid item xs={5} display="flex" justifyContent="center">
                <Avatar
                  alt="trader1ItemPhoto"
                  src={trader1ItemPhoto}
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="success"
                type="submit"
                onClick={handleClose}
              >
                Confirm!
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
