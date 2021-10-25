/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { ItemsContext } from '../ItemsContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 800,
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  input: {
    color: '#FFFFFF',
  },
  formLabel: {
    color: '#FFFFFF',
  },
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: '#2C2C2C',
    },
  },
}));

const AddItem = (props) => {
  const classes = useStyles();
  const { currentUserState } = useContext(ItemsContext);
  const [currentUser] = currentUserState;

  const Input = styled('input')({
    display: 'none',
  });

  const [newItem, setNewItem] = useState({
    // itemCategory: 'Select Category' || currentUser.availableItem.itemCategory,
    // itemName: '' || currentUser.availableItem.itemName,
    // itemDesc: '' || currentUser.availableItem.itemDesc,
    // itemZIP: '' || currentUser.availableItem.itemZIP,
  });

  const [itemFormOpen, setItemFormOpen] = useState(false);

  const noItemPic =
    'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png';

  const handleClick = () => {
    setItemFormOpen(true);
  };

  const handleClose = () => {
    props.handleEditItemClose();
    setItemFormOpen(false);
  };

  const handleChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
    console.log(newItem);
  };

  const handleSubmit = () => {
    console.log('Sending new item data: ', newItem);
    axios
      .put(`/editItem`, newItem)
      .then((postResponse) => {
        console.log('Received post response:');
        console.log(postResponse);
      })
      .catch((err) => {
        console.log('Error received from post request:');
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{ justifyContent: 'center', marginBottom: '40px' }}
        padding={1}
        spacing={2}
      >
        <Grid
          container
          item
          xs={9}
          style={{ justifyContent: 'center', marginBottom: '-15px' }}
        >
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button
              fullWidth
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              component="span"
            >
              Upload Image
            </Button>
          </label>
        </Grid>
        <Grid container item xs={9} style={{ justifyContent: 'center' }}>
          <Select
            name="itemCategory"
            fullWidth
            onChange={handleChange}
            style={{
              margin: '0 auto',
              display: 'flex',
              width: 200,
              marginTop: 20,
              backgroundColor: '#2C2C2C',
            }}
            className={(classes.menu, classes.hover2)}
            id="editItemCategory"
            label="Item category"
            variant="filled"
            value={newItem.itemCategory}
          >
            <MenuItem style={{ color: '#2C2C2C' }} value="Select Category">
              Select Category
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Electronics & Media">
              Electronics & Media
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Home & Garden">
              Home & Garden
            </MenuItem>
            <MenuItem
              style={{ color: '#2C2C2C' }}
              value="Clothing, Shoe, & Accessories"
            >
              Clothing, Shoe, & Accessories
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Baby & Kids">
              Baby & Kids
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Vehicles">
              Vehicles
            </MenuItem>
            <MenuItem
              style={{ color: '#2C2C2C' }}
              value="Toys, Games, & Hobbies"
            >
              Toys, Games, & Hobbies
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Sports & Outdoors">
              Sports & Outdoors
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Collectibles & Art">
              Collectibles & Art
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Pet Supplies">
              Pet Supplies
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Health & Beauty">
              Health & Beauty
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Wedding">
              Wedding
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Business Equipment">
              Business Equipment
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Tickets">
              Tickets
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Real Estate">
              Real Estate
            </MenuItem>
            <MenuItem style={{ color: '#2C2C2C' }} value="Other">
              Other
            </MenuItem>
          </Select>
        </Grid>

        <Grid container item xs={9} style={{ justifyContent: 'center' }}>
          <TextField
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              className: classes.formLabel,
            }}
            style={{ width: '100%', backgroundColor: '#2C2C2C' }}
            color="textYellow"
            required
            id="outlined-title"
            label="Item name"
            type="text"
            name="itemName"
            onChange={handleChange}
          />
        </Grid>

        <Grid container item xs={9} style={{ justifyContent: 'center' }}>
          <TextField
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              className: classes.formLabel,
            }}
            style={{ width: '100%', backgroundColor: '#2C2C2C' }}
            color="textYellow"
            required
            id="outlined-description"
            label="Description"
            name="itemDesc"
            onChange={handleChange}
            type="text"
            multiline
            rows={4}
          />
        </Grid>

        <Grid container item xs={9} style={{ justifyContent: 'center' }}>
          <TextField
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              className: classes.formLabel,
            }}
            style={{ width: '100%', backgroundColor: '#2C2C2C' }}
            color="textYellow"
            required
            id="outlined-zip-code"
            label="Zip Code"
            name="itemZIP"
            onChange={handleChange}
            type="text"
          />
        </Grid>
        <Grid container item xs={12} style={{ justifyContent: 'space-evenly' }}>
          <Grid container item xs={4} style={{ justifyContent: 'flex-end' }}>
            <Button
              style={{ minWidth: '95%' }}
              color="sortButton"
              variant="contained"
              className={classes.hover2}
            >
              Add Item
            </Button>
          </Grid>
          <Grid container item xs={4} style={{ justifyContent: 'flex-start' }}>
            <Button
              style={{ minWidth: '95%' }}
              onClick={handleClose}
              color="sortButton"
              variant="contained"
              className={classes.hover2}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddItem;
