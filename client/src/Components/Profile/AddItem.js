import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

const AddItem = () => {
  const classes = useStyles();

  const Input = styled('input')({
    display: 'none',
  });

  const StyledFormControlLabel = styled((props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{ justifyContent: 'center', marginBottom: '40px' }}
        padding={1}
        spacing={2}
      >
        <Grid container item xs={9} style={{ justifyContent: 'center' }}>
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

        <Grid container item xs={6} style={{ justifyContent: 'center' }}>
          <Button
            fullWidth
            color="sortButton"
            variant="contained"
            className={classes.hover2}
            onClick={handleClick}
          >
            Select Category *
          </Button>
          <Menu
            className={classes.menu}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Electronics & Media</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Home & Garden</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Clothing, Shoe, & Accessories</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Baby & Kids</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Vehicles</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Toys, Games, & Hobbies</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Sports & Outdoors</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Collectibles & Art</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Murder</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Pet Supplies</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Health & Beauty</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Wedding</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Business Equipment</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Tickets</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Real Estate</MenuItem>
            <MenuItem style={{ color: '#F0CC71' }} onClick={handleClose}>Other</MenuItem>
          </Menu>
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
            label="Title"
            name="title"
            type="text"
          // value={}
          // onChange={handleFormChange}
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
            name="title"
            type="text"
            multiline
            rows={4}
          // value={}
          // onChange={handleFormChange}
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
            name="zip-code"
            type="text"
          // value={}
          // onChange={handleFormChange}
          />
        </Grid>

        <Grid container item xs={6} style={{ justifyContent: 'center' }}>
          <Button
            fullWidth
            color="sortButton"
            variant="contained"
            className={classes.hover2}
          >
            Add Item
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddItem;
