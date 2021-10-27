/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
import FirstName from './formFields/FirstName';
import LastName from './formFields/LastName';
import Email from './formFields/Email';
import Password from './formFields/Password';
import ConfirmPassword from './formFields/ConfirmPassword';
import Zip from './formFields/Zip';
import { ItemsContext } from '../ItemsContext';

const validateSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .min(2, 'first name must be at least 2 characters')
    .max(15, 'first name cannot exceed 15 characters')
    .required('first name is required')
    .matches(/^[a-zA-Z]+$/, 'cannot contain numbers'),
  lastName: yup
    .string('Enter your last name')
    .min(2, 'last name must be at least 2 characters')
    .max(20, 'last name cannot exceed 20 characters')
    .required('last name is required'),
  password: yup
    .string('Enter a password of at least 6 characters')
    .min(6, 'password must be at least 6 characters')
    .required('password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
    .required('confirm password is required'),
  email: yup
    .string('Enter your email')
    .email('invalid email address')
    .required('email is required'),
  zip: yup
    .number('Enter your zip code')
    .max(99950, 'zip must be exactly 5 characters')
    .min(9999, 'zip must be exactly 5 characters')
    .required('zip is required'),
});

export default function CreateAccountForm() {
  const { isLoggedInState, apiUrlState, currentUserState, showAuthModalState } =
    useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [currentUser, setCurrentUser] = currentUserState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;
  const [apiUrl, setApiUrl] = apiUrlState;
  const [initialValues, setInitialValues] = useState({
    showPassword: false,
    formSubmitted: false,
    success: false,
  });

  const userAcctData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    zip: '',
  };
  const [acctData, setAcctData] = useState(userAcctData);

  const handleFormChange = (propName) => (event) => {
    setAcctData({ ...acctData, [propName]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setInitialValues({
      ...initialValues,
      showPassword: !initialValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signUp = () => {
    const params = {
      firstName: acctData.firstName,
      lastName: acctData.lastName,
      email: acctData.email,
      zip: acctData.zip,
      password: acctData.password,
      confirmPassword: acctData.confirmPassword,
    };
    console.log('sign up params', params);
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
      <Grid item xs={12} align="center">
        <AttachFileIcon
          color="paperClip"
          style={{ cursor: 'pointer', transform: 'rotate(45deg)' }}
          sx={{ fontSize: 40 }}
        />
        <Typography id="modal-title" variant="h6" component="h2">
          Create a new account:
        </Typography>
      </Grid>
      <br />
      <Grid item align="center">
        <Formik
          validateOnChange
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            zip: '',
          }}
          validationSchema={validateSchema}
          onSubmit={(data) => {
            handleCreateAcct(data);
          }}
        >
          {({ submitForm, touched, values, errors, isSubmitting }) => (
            <Form>
              <Grid item xs={12}>
                <Field
                  component={FirstName}
                  type="text"
                  name="firstName"
                  handleFormChange={handleFormChange}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <Field
                  component={LastName}
                  type="text"
                  name="lastName"
                  handleFormChange={handleFormChange}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <Field
                  component={Email}
                  type="email"
                  name="email"
                  handleFormChange={handleFormChange}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <Field
                  component={Password}
                  type="password"
                  name="password"
                  handleMouseDownPassword={handleMouseDownPassword}
                  handleClickShowPassword={handleClickShowPassword}
                  initialValues={initialValues}
                  handleFormChange={handleFormChange}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <Field
                  component={ConfirmPassword}
                  type="password"
                  name="confirmPassword"
                  handleMouseDownPassword={handleMouseDownPassword}
                  handleClickShowPassword={handleClickShowPassword}
                  initialValues={initialValues}
                  handleFormChange={handleFormChange}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <Field component={Zip} type="number" name="zip" />
              </Grid>
              <br />
              <br />
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  onClick={submitForm}
                  style={{
                    backgroundColor: '#2C2C2C',
                    color: '#F0CC71',
                    marginTop: '6px',
                    justifyContent: 'center',
                  }}
                >
                  Create Account
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
