import React, { useState, useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Axios from 'axios';
import { ItemsContext } from '../ItemsContext';
import ReportedItem from './ReportedItem';

const ReportedItemsFeed = () => {
  const [items, setItems] = useState([]);
  const { apiUrlState } = useContext(ItemsContext);
  const [apiUrl, setApiUrl] = apiUrlState;
  useEffect(() => {
    Axios.get(`${apiUrl}/getItemReports`)
      .then(({ data }) => {
        console.log(data);
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Grid container justifyContent="space-between" spacing={6}>
      {items.map((e, i) => (
        <Grid item xs={4}>
          <ReportedItem item={e} key={e.uid} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReportedItemsFeed;
