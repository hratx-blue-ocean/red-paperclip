/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState, useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
    <Container style={{ backgroundColor: '#34363b', justifyContent: 'center' }}>
      {watchedItems.map((item, index) => (
        <Box
          key={index}
          justifyContent="center"
          sx={{
            transform: 'translate(5%, 5%)',
            marginBottom: 3,
            maxWidth: '500px',
          }}
        >
          <ItemCard item={item} />
        </Box>
      ))}
    </Container>
  );
};

export default WatchedItems;
