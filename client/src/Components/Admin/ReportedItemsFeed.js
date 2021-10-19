import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

import ReportedItem from './ReportedItem';

const ReportedItemsFeed = () => {
  const nothing = {};

  return (
    <div>
      <Grid container justifyContent="space-between" spacing={6}>
        {[...Array(10)].map((e, i) => (
          <Grid item xs={4} key={i}>
            <ReportedItem />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        container
        style={{ justifyContent: 'center', marginBottom: '30px' }}
      >
        <Button variant="contained" spacing={1} color="secondary">
          Show More
        </Button>
      </Grid>
    </div>
  );
};

export default ReportedItemsFeed;
