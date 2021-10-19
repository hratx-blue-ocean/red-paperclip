import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

import ReportedMessage from './ReportedMessage';

const reportedMessages = [
  {
    id: 1,
    user: 'Jeffrey Dahmer',
    message: 'A sandwich is a sandwich, but a Manwich is a meal.',
  },
  {
    id: 2,
    user: 'Hanibal Lector',
    message:
      "When The Fox Hears The Rabbit Scream, He Comes A-Runnin', But Not To Help.",
  },
  {
    id: 3,
    user: 'William Cody',
    message: "It puts the lotion on it's skin",
  },
];

const ReportedMessagesFeed = () => {
  const nothing = {};

  return (
    <Grid container justifyContent="space-between" spacing={6}>
      {reportedMessages.map((reportedMessage) => (
        <Grid item xs={12} key={reportedMessage.id}>
          <ReportedMessage
            message={reportedMessage.message}
            user={reportedMessage.user}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReportedMessagesFeed;
