import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import ItemCard from './ItemCard';
import SortBar from './SortBar';
import { ItemsContext } from '../ItemsContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 800,
  },
}));

const Feed = () => {
  const classes = useStyles();

  const [showMore, setShowMore] = useState(6);
  const [selection, setSelection] = useState('');
  const [items, setItems] = useState([]);

  const { apiUrlState } = useContext(ItemsContext);
  const [apiUrl, setApiUrl] = apiUrlState;

  // get request for item array
  const getAllItems = (quantity, category) => {
    if (category) {
      axios
        .get(`${apiUrl}/getItemsByCategory`, { params: { quantity, category } })
        .then((resultOfSuccessfulGetRequest) => {
          setItems(resultOfSuccessfulGetRequest.data);
          // console.log('HERE IS ITEM DATA--> ', resultOfSuccessfulGetRequest.data);
        })
        .catch((err) => {
          console.log(
            'FAILED to get item by cat data from the firebase server --> ',
            err
          );
        });
    } else {
      axios
        .get(`${apiUrl}/getAllItems`, { params: { quantity } })
        .then((resultOfSuccessfulGetRequest) => {
          setItems(resultOfSuccessfulGetRequest.data);
          // console.log('HERE IS ITEM DATA--> ', resultOfSuccessfulGetRequest.data);
        })
        .catch((err) => {
          console.log(
            'FAILED to get item data from the firebase server --> ',
            err
          );
        });
    }
  };

  useEffect(() => {
    getAllItems(showMore, selection);
  }, []);

  // creates a random index
  const getRandomIndex = (array) => {
    const min = 0;
    const max = array.length - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className={classes.root}>
      <SortBar />
      <Grid
        container
        spacing={6}
        style={{ justifyContent: 'space-evenly', marginTop: '20px' }}
      >
        {items.map((item) => (
          <Grid item xs={4}>
            <ItemCard item={item} key={item.id} />
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          container
          style={{ justifyContent: 'center', marginBottom: '10px' }}
        >
          <Button variant="contained" spacing={1} color="textYellow">
            Show More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Feed;
