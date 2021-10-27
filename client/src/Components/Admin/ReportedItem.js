import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Axios from 'axios';
import { ItemsContext } from '../ItemsContext';
import ItemCard from '../Feed/ItemCard';

const useStyles = makeStyles(() => ({
  button: {
    // color: '#000000',
    '&:hover': {
      color: '#ffffff',
    },
  },
}));

const ReportedItem = ({ item, index, removeReport }) => {
  const classes = useStyles();
  const { apiUrlState } = useContext(ItemsContext);
  const [apiUrl, setApiUrl] = apiUrlState;
  const handleDeleteItemClick = () => {
    Axios({
      method: 'put',
      url: `${apiUrl}/changeActiveStatus`,
      params: { status: false },
    })
      .then(() => {
        removeReport(index);
      })
      .catch((err) => {
        console.log('failed to change status of item', err);
      });
  };
  const handleDismissReportClick = () => {
    Axios.put(`${apiUrl}/dismissReport`, { uid: item.uid })
      .then(() => {
        removeReport(index);
      })
      .catch((err) => {
        console.log('failed to dismiss report', err);
      });
  };
  const handleBanUserClick = () => {
    console.log('Clicked Ban User');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ItemCard item={item} key={item.uid} />
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          // color="inherit"
          variant="outlined"
          className={classes.button}
          sx={{
            height: 60,
            backgroundColor: '#161513',
            color: '#066F04',
          }}
          onClick={handleDismissReportClick}
        >
          Dismiss Report
        </Button>
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          // color="inherit"
          variant="outlined"
          className={classes.button}
          sx={{
            height: 60,
            backgroundColor: '#161513',
            fontWeight: 800,
            color: '#A10000',
          }}
          onClick={handleDeleteItemClick}
        >
          Delete Item
        </Button>
      </Grid>
      <Grid item xs={4} justifyContent="center">
        <Button
          size="small"
          // color="inherit"
          variant="outlined"
          className={classes.button}
          sx={{
            height: 60,
            backgroundColor: '#161513',
            color: '#F0CC71',
          }}
          onClick={handleBanUserClick}
        >
          Ban User
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReportedItem;
