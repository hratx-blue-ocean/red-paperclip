import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
import Email from './formFields/Email';
import Password from './formFields/Password';
import { ItemsContext } from '../ItemsContext';

const validateSchema = yup.object({
  password: yup
    .string('Enter a password of at least 6 characters')
    .min(6, 'password must be at least 6 characters')
    .required('password is required'),
  email: yup
    .string('Enter your email')
    .email('invalid email address')
    .required('email is required'),
});

export default function SignInForm() {
  const { isLoggedInState, apiUrlState, currentUserState, showAuthModalState } =
    useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;
  const [apiUrl, setApiUrl] = apiUrlState;
  const [currentUser, setCurrentUser] = currentUserState;
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  // updates state for user data on form
  const handleInputChange = (prop) => (event) => {
    setUserData({ ...userData, [prop]: event.target.value });
    console.log('userData', userData);
  };

  // toggle password
  const handleClickShowPassword = () => {
    setUserData({
      ...userData,
      showPassword: !userData.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // submits user data to server for auth
  const signIn = (signInData) => {
    console.log('params', signInData);

    Axios.post(`${apiUrl}/login`, signInData)
      .then((result) => {
        Axios.get(`${apiUrl}/user`, {
          headers: { Authorization: `Bearer ${result.data.token}` },
        }).then((userInfo) => {
          setCurrentUser(userInfo.data);
          setIsLoggedIn(true);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // close modal and trigger sign in
  const handleSignIn = (signInData) => {
    console.log('event in sign in', event);
    setUserData(event);
    setShowAuthModal(false);
    signIn(signInData);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} align="center">
        <AttachFileIcon
          color="paperClip"
          style={{ cursor: 'pointer', transform: 'rotate(45deg)' }}
          sx={{ fontSize: 40 }}
        />
        <Typography id="modal-title" variant="h6" component="h2">
          sign in with your email and password:
        </Typography>
      </Grid>
      <br />
      <Grid item align="center">
        <Formik
          validateOnChange
          initialValues={{ email: '', password: '' }}
          validationSchema={validateSchema}
          onSubmit={(data) => {
            handleSignIn(data);
          }}
        >
          {({ submitForm, touched, values, errors, isSubmitting }) => (
            <Form>
              <Grid item xs={12}>
                <Field
                  component={Email}
                  type="email"
                  name="email"
                  setUserData={setUserData}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <Field
                  component={Password}
                  type="password"
                  name="password"
                  userData={userData}
                />
              </Grid>
              <br />
              <br />
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"

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
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
