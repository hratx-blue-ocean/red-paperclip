import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  zip: '',
  formSubmitted: false,
  success: false,
};

const FormValidation = () => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);

  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({});

  // this function will check if the form values are valid
  const validate = (fieldValues = values) => {
    const temp = { ...errors };

    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.';

    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'This field is required.';
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Email is not valid.';
    }

    if ('message' in fieldValues)
      temp.message = fieldValues.message ? '' : 'This field is required.';

    setErrors({
      ...temp,
    });
  };
  const handleInputValue = (fieldValues = values) => {
    // this function will be triggered by the text field's onBlur and onChange events
  };
  const handleFormSubmit = async (e) => {
    // this function will be triggered by the submit event
  };
  const formIsValid = () => {
    // this function will check if the form values and return a boolean value
  };
  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};

export default FormValidation;
