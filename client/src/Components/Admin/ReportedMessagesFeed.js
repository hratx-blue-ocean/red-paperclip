import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

import ReportedMessage from './ReportedMessage';

const ReportedMessagesFeed = () => {
  const nothing = {};

  return (
    <Grid container justifyContent="space-between" spacing={6}>
      {[...Array(10)].map((e, i) => (
        <Grid item xs={12} key={i}>
          <ReportedMessage message="This is a reported message passed into props" />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReportedMessagesFeed;
