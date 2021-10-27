/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';

import axios from 'axios';

const NewItemForm = () => {
  const [newItem, setNewItem] = useState({
    itemCategory: 'Select Category',
    itemName: '',
    itemDesc: '',
    itemZIP: '',
  });

  const [itemFormOpen, setItemFormOpen] = useState(false);

  const noItemPic =
    'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png';

  const handleClick = () => {
    setItemFormOpen(true);
  };

  const handleClose = () => {
    setItemFormOpen(false);
  };

  const handleChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
    // console.log(newItem);
  };

  const handleSubmit = () => {
    console.log('Sending new item data: ', newItem);
    // axios
    //   .post(`/items`, newItem)
    //   .then((postResponse) => {
    //     console.log('Received post response:');
    //     console.log(postResponse);
    //   })
    //   .catch((err) => {
    //     console.log('Error received from post request:');
    //     console.log(err);
    //   });
  };

  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <>
      <Typography textAlign="center">
        Looks like you don't have an item to trade yet!
      </Typography>
      <Button
        variant="outlined"
        onClick={handleClick}
        style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
      >
        Add an Item!
      </Button>
      <Modal
        open={itemFormOpen}
        onClose={handleClose}
        aria-labelledby="addItemForm"
        aria-describedby="addItemForm"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Card
            sx={{
              width: 800,
              height: 800,
              backgroundColor: '#494D53',
            }}
          >
            <Card
              sx={{
                width: 200,
                height: 200,
                backgroundColor: '#494D53',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 2,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={noItemPic}
                style={{ objectFit: 'cover' }}
                alt="Empty item image"
              />
            </Card>
            <Select
              name="itemCategory"
              onChange={handleChange}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editItemCategory"
              label="Item category"
              variant="filled"
              value={newItem.itemCategory}
            >
              <MenuItem value="Select Category">Select Category</MenuItem>
              <MenuItem value="Electronics & Media">
                Electronics & Media
              </MenuItem>
              <MenuItem value="Home & Garden">Home & Garden</MenuItem>
              <MenuItem value="Clothing, Shoe, & Accessories">
                Clothing, Shoe, & Accessories
              </MenuItem>
              <MenuItem value="Baby & Kids">Baby & Kids</MenuItem>
              <MenuItem value="Vehicles">Vehicles</MenuItem>
              <MenuItem value="Toys, Games, & Hobbies">
                Toys, Games, & Hobbies
              </MenuItem>
              <MenuItem value="Sports & Outdoors">Sports & Outdoors</MenuItem>
              <MenuItem value="Collectibles & Art">Collectibles & Art</MenuItem>
              <MenuItem value="Pet Supplies">Pet Supplies</MenuItem>
              <MenuItem value="Health & Beauty">Health & Beauty</MenuItem>
              <MenuItem value="Wedding">Wedding</MenuItem>
              <MenuItem value="Business Equipment">Business Equipment</MenuItem>
              <MenuItem value="Tickets">Tickets</MenuItem>
              <MenuItem value="Real Estate">Real Estate</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <TextField
              name="itemName"
              onChange={handleChange}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editItemName"
              label="Item name"
              variant="filled"
            />
            <TextField
              name="itemZIP"
              onChange={handleChange}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editItemZIP"
              label="Item ZIP code"
              variant="filled"
            />
            <TextField
              name="itemDesc"
              onChange={handleChange}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 400,
                marginTop: 20,
              }}
              id="editItemDescription"
              label="Describe your item"
              variant="filled"
              multiline
              rows={8}
            />
            <Button
              style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
              variant="contained"
            >
              Add Item
            </Button>
            <Button
              onClick={handleClose}
              style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
              variant="contained"
            >
              Cancel
            </Button>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default NewItemForm;
