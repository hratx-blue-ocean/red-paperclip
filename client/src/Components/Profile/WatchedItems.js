/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState, useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ProfileTabPanel from './ProfileTabPanel';
import testFollowedItems from './testFollowedItems';
import ProfileActiveItem from './ProfileActiveItem';
import { ItemsContext } from '../ItemsContext';
import ItemCard from '../Feed/ItemCard';

// eslint-disable-next-line arrow-body-style
const WatchedItems = (props) => {
  const { watchedItemsState } = useContext(ItemsContext);
  const [watchedItems, setWatchedItems] = watchedItemsState;
  return (
    <>
      {watchedItems.map((item, index) => {
        return (
          <Box key={index}>
            <ItemCard item={item} />
          </Box>
        );
      })}
    </>
  );
};

export default WatchedItems;
