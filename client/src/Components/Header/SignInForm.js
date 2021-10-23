import React, { useContext, useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ItemsContext } from '../ItemsContext';

export default function SignInForm() {
  const { isLoggedInState, apiUrlState, currentUserState, showAuthModalState } =
    useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;
  const [apiUrl, setApiUrl] = apiUrlState;
  const [currentUser, setCurrentUser] = currentUserState;
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleTogglePassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signIn = () => {
    const params = {
      email: values.email,
      password: values.password,
    };

    Axios.post(`${apiUrl}/login`, params)
      .then((result) => {
        Axios.get(`${apiUrl}/user`, {
          headers: { Authorization: `Bearer ${result.data.token}` },
        }).then((userData) => {
          setCurrentUser(userData.data);
          setIsLoggedIn(true);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    setShowAuthModal(false);
    signIn();
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item align="center">
        <AttachFileIcon
          color="paperClip"
          style={{ cursor: 'pointer', transform: 'rotate(45deg)' }}
          sx={{ fontSize: 40 }}
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Sign in with your email and password:
        </Typography>
        <FormControl
          margin="normal"
          sx={{ m: 1, width: '25ch' }}
          color="formLabel"
        >
          <InputLabel htmlFor="email">email</InputLabel>
          <OutlinedInput
            id="email-text-box"
            type="text"
            onChange={handleInputChange('email')}
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
            id="password-text-box"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleInputChange('password')}
            style={{ color: '#161513' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePassword}
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
      </Grid>
      <Grid item xs={6} align="center">
        <Button
          fullWidth
          type="submit"
          onClick={handleSignIn}
          style={{
            backgroundColor: '#2C2C2C',
            color: '#F0CC71',
            marginTop: '6px',
            justifyContent: 'center',
          }}
        >
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
}
