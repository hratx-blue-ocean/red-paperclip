/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState, useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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
    <>
      {currentUser.tradeHistory &&
        currentUser.tradeHistory.map((item, index) => {
          return (
            <Box key={index}>
              <ProfileJournalEntry item={item} />
            </Box>
          );
        })}
    </>
  );
};

export default ProfileJournal;
