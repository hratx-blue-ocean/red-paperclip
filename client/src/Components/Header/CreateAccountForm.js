import React, { useContext, useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ItemsContext } from '../ItemsContext';

export default function CreateAccountForm({ setShowAuthModal }) {
  const { isLoggedInState, apiUrlState, currentUserState } =
    useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [currentUser, setCurrentUser] = currentUserState;
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
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCreateAcct = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setShowAuthModal(false);
    signUp();
  };

  return (
    <Box>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Create a new account:
      </Typography>

      <FormControl sx={{ m: 1, width: '25ch' }}>
        <InputLabel htmlFor="outlined-first-name">first name</InputLabel>
        <OutlinedInput
          id="first-name"
          type="text"
          onChange={handleChange('firstName')}
          label="first-name"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }}>
        <InputLabel htmlFor="outlined-last-name">last name</InputLabel>
        <OutlinedInput
          id="last-name"
          type="text"
          onChange={handleChange('lastName')}
          label="last-name"
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }}>
        <InputLabel htmlFor="outlined-email">email</InputLabel>
        <OutlinedInput
          id="email"
          type="email"
          onChange={handleChange('email')}
          label="email"
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
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

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Confirm Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
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

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="zip">Zip Code</InputLabel>
        <OutlinedInput
          id="zip"
          type="text"
          value={values.zip}
          onChange={handleChange('zip')}
          label="Zip"
          pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
        />
      </FormControl>

      <Button
        type="submit"
        onClick={handleCreateAcct}
        style={{ backgroundColor: '#161513', color: '#F0CC71' }}
      >
        Create Your Account
      </Button>
    </Box>
  );
}
