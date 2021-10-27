/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState, useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ProfileTabPanel from './ProfileTabPanel';
import testJournal from './testJournal';
import ProfileJournalEntry from './ProfileJournalEntry';
import { ItemsContext } from '../ItemsContext';

// eslint-disable-next-line arrow-body-style
const ProfileJournal = () => {
  const { currentUserState } = useContext(ItemsContext);
  const [currentUser] = currentUserState;

  return (
    <Grid
      container
      xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      direction="column"
      style={{ backgroundColor: '#34363b' }}
    >
      {currentUser.tradeHistory &&
        currentUser.tradeHistory.map((item, index) => {
          return (
            <Box key={index} maxWidth="500px" sx={{ marginBottom: 3 }}>
              <ProfileJournalEntry item={item} />
            </Box>
          );
        })}
    </Grid>
  );
};

export default ProfileJournal;
