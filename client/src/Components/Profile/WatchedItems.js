/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ProfileTabPanel from './ProfileTabPanel';
import testFollowedItems from './testFollowedItems';
import ProfileActiveItem from './ProfileActiveItem';

// eslint-disable-next-line arrow-body-style
const WatchedItems = (props) => {
  return (
    <>
      {testFollowedItems.map((item) => {
        return <ProfileActiveItem activeItem={item} height="60%" />;
      })}
    </>
  );
};

export default WatchedItems;
