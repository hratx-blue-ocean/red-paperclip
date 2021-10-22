import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

  const [showMore, setShowMore] = useState(3);
  const [selection, setSelection] = useState('');
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  const { apiUrlState } = useContext(ItemsContext);
  const [apiUrl, setApiUrl] = apiUrlState;

  const [itemsLength, setItemsLength] = useState(0);

  // get request for item array
  const getAllItems = (quantity, category) => {
    if (category) {
      axios
        .get(`${apiUrl}/getItemsByCategory`, { params: { quantity, category } })
        .then((resultOfSuccessfulGetRequest) => {
          setItems(resultOfSuccessfulGetRequest.data);
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
          setOriginalItems(resultOfSuccessfulGetRequest.data);
          setItemsLength(resultOfSuccessfulGetRequest.data.length);
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
  }, [selection, showMore]);

  // creates a random index
  const getRandomIndex = (array) => {
    const min = 0;
    const max = array.length - 1;
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
  };

  const handleSuprise = () => {
    if (items.length === 1) {
      const randomValue = getRandomIndex(originalItems);
      setItems([originalItems[randomValue]]);
    } else {
      const randomValue = getRandomIndex(items);
      setItems([items[randomValue]]);
    }
  };

  const handleMore = () => {
    if (selection) {
      setSelection('');
      setShowMore(6);
    } else {
      const more = showMore + 3;
      setShowMore(more);
    }
  };
  return (
    <div className={classes.root}>
      <SortBar
        setSelection={setSelection}
        handleSuprise={handleSuprise}
        itemsLength={itemsLength}
        getAllItems={getAllItems}
      />
      <Grid
        container
        spacing={6}
        style={{ justifyContent: 'space-evenly', marginTop: '20px' }}
      >
        {items.map((item) => (
          <Grid item xs={4} key={item.uid}>
            <ItemCard item={item} />
          </Grid>
        ))}
        {itemsLength < 6 && (
          <Grid
            item
            xs={12}
            container
            style={{ justifyContent: 'center', marginBottom: '10px' }}
          >
            <Button
              variant="contained"
              spacing={1}
              color="textYellow"
              onClick={handleMore}
            >
              Show More
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Feed;
