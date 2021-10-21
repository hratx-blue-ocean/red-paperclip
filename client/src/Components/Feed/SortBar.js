import React from 'react';
import Grid from '@mui/material/Grid';
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

export default function SortBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#494D53', marginTop: '60px' }}
      >
        <Grid container style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Grid container item xs={4} style={{ justifyContent: 'flex-end' }}>
            <Typography
              className={classes.bold}
              style={{
                color: '#F0CC71',
                marginRight: '8px',
                marginTop: '5px',
                fontSize: 18,
              }}
            >
              {'ACTIVE ITEM: '}
            </Typography>
            <Button
              color="sortButton"
              variant="contained"
              className={classes.hover2}
            >
              Item Name || Add Item +
            </Button>
          </Grid>
          <Grid container item xs={4} style={{ justifyContent: 'center' }}>
            <Typography
              className={classes.bold}
              style={{
                color: '#F0CC71',
                marginRight: '8px',
                marginTop: '5px',
                fontSize: 18,
              }}
            >
              {'SORT BY: '}
            </Typography>
            <Button
              color="sortButton"
              variant="contained"
              className={classes.hover2}
              onClick={handleClick}
            >
              Category
            </Button>
            <Menu
              className={classes.menu}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Electronics & Media
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Home & Garden
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Clothing, Shoe, & Accessories
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Baby & Kids
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Vehicles
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Toys, Games, & Hobbies
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Sports & Outdoors
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Collectibles & Art
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Murder
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Pet Supplies
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Health & Beauty
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Wedding
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Business Equipment
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Tickets
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Real Estate
              </MenuItem>
              <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>
                Other
              </MenuItem>
            </Menu>
          </Grid>
          <Grid container item xs={4} style={{ justifyContent: 'flex-start' }}>
            <Button
              color="sortButton"
              variant="contained"
              className={classes.hover2}
            >
              Suprise Me!
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
