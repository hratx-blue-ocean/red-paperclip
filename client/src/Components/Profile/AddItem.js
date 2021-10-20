import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

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
}));

const AddItem = () => {
  const classes = useStyles();

  const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{ justifyContent: 'center', marginBottom: '40px' }}
        padding={1}
        spacing={2}
      >
        <Grid container item xs={9} style={{ justifyContent: 'center' }}>
          <Button fullWidth color="sortButton" variant="contained">
            Offensive Item
          </Button>
        </Grid>

        <Grid container item xs={9} style={{ justifyContent: 'center' }}>
          <Button fullWidth color="sortButton" variant="contained">
            Category
          </Button>
        </Grid>

        <Grid container item xs={9} style={{ justifyContent: 'center' }}>
          <TextField
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
