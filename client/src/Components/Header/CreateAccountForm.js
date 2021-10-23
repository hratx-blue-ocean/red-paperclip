import React, { useContext, useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ItemsContext } from '../ItemsContext';

export default function CreateAccountForm() {
  const { isLoggedInState, apiUrlState, currentUserState, showAuthModalState } =
    useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [currentUser, setCurrentUser] = currentUserState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;
  const [apiUrl, setApiUrl] = apiUrlState;
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    zip: '',
    confirmPassword: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signUp = () => {
    const params = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      zip: values.zip,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    Axios.post(`${apiUrl}/signup`, params)
      .then((result) => {
        Axios.get(`${apiUrl}/user`, {
          headers: { Authorization: `Bearer ${result.data.token}` },
        }).then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCreateAcct = (event) => {
    event.preventDefault();
    setShowAuthModal(false);
    signUp();
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item align="center">
        <AttachFileIcon
          color="paperClip"
          style={{ cursor: 'pointer', transform: 'rotate(45deg)' }}
          sx={{ fontSize: 40 }}
        />
        <Typography id="modal-title" variant="h6" component="h2">
          Create a new account:
        </Typography>
      </Grid>
      <Grid item align="center">
        <FormControl
          margin="normal"
          sx={{ m: 1, width: '25ch' }}
          color="formLabel"
        >
          <InputLabel htmlFor="first-name">first name</InputLabel>
          <OutlinedInput
            id="first-name"
            type="text"
            onChange={handleChange('firstName')}
            label="first-name"
          />
        </FormControl>
        <FormControl
          margin="normal"
          sx={{ m: 1, width: '25ch' }}
          color="formLabel"
        >
          <InputLabel htmlFor="last-name">last name</InputLabel>
          <OutlinedInput
            id="last-name"
            type="text"
            onChange={handleChange('lastName')}
            label="last-name"
          />
        </FormControl>

        <FormControl
          margin="normal"
          sx={{ m: 1, width: '25ch' }}
          color="formLabel"
        >
          <InputLabel htmlFor="email">email</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            onChange={handleChange('email')}
            label="email"
          />
        </FormControl>

        <FormControl
          margin="normal"
          sx={{ m: 1, width: '25ch' }}
          color="formLabel"
        >
          <InputLabel htmlFor="password">password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl
          margin="normal"
          sx={{ m: 1, width: '25ch' }}
          color="formLabel"
        >
          <InputLabel htmlFor="password">confirm password</InputLabel>
          <OutlinedInput
            id="confirm-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="ConfirmPassword"
          />
        </FormControl>

        <FormControl
          margin="normal"
          sx={{ m: 1, width: '25ch' }}
          color="formLabel"
        >
          <InputLabel htmlFor="zipcode">zip code</InputLabel>
          <OutlinedInput
            id="zip-code"
            type="text"
            value={values.zip}
            onChange={handleChange('zip')}
            label="zip-code"
            pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
          />
        </FormControl>
      </Grid>
      <Grid item align="center">
        <Button
          type="submit"
          onClick={handleCreateAcct}
          style={{ backgroundColor: '#161513', color: '#F0CC71' }}
        >
          Create an Account
        </Button>
      </Grid>
    </Grid>
  );
}
