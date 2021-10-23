/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ProfileTabPanel from './ProfileTabPanel';
import testJournal from './testJournal';
import ProfileJournalEntry from './ProfileJournalEntry';

// eslint-disable-next-line arrow-body-style
const ProfileJournal = (props) => {
  return (
    <>
      {testJournal.map((item, index) => {
        return (
          <Box key={index}>
            <ProfileJournalEntry activeItem={item} />
          </Box>
        );
      })}
    </>
  );
};

export default ProfileJournal;
