import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 600,
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: '#2C2C2C',
    },
  },
}));

const CategorySelector = ({ setSelection, getAllItems, itemsLength }) => {
  const classes = useStyles();

  const categories = [
    'All',
    'Electronics & Media',
    'Home & Garden',
    'Clothing, Shoe, & Accessories',
    'Baby & Kids',
    'Vehicles',
    'Toys, Games, & Hobbies',
    'Sports & Outdoors',
    'Collectibles & Art',
    'Alien Technology',
    'Pet Supplies',
    'Health & Beauty',
    'Wedding',
    'Business Equipment',
    'Tickets',
    'Real Estate',
    'Other',
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category) => {
    if (category === 'All' || category === 'Select Category') {
      getAllItems(6);
      setAnchorEl(null);
      setSelectedCategory(category);
      setSelection('');
    } else {
      setAnchorEl(null);
      setSelectedCategory(category);
      setSelection(category);
    }
  };

  return (
    <>
      <Button
        color="sortButton"
        variant="contained"
        className={classes.hover2}
        onClick={handleClick}
      >
        <Typography>{selectedCategory}</Typography>
      </Button>
      <Menu
        className={classes.menu}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selectedCategory)}
      >
        {categories.map((category) => (
          <MenuItem
            style={{ color: '#F0CC71' }}
            onClick={() => handleClose(category)}
            key={category}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CategorySelector;
