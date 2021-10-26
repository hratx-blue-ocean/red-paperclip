import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PostContactForm = (values, successCallback, errorCallback) => {
  // do stuff

  // if successful
  if (true) {
    successCallback();
  } else {
    errorCallback();
  }
};

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

const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    const temp = { ...errors };

    if ('firstName' in fieldValues) {
      temp.firstName = fieldValues.firstName ? '' : 'This field is required.';
    }
    if ('lastName' in fieldValues) {
      temp.firstName = fieldValues.firstName ? '' : 'This field is required.';
    }
    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'This field is required.';
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Email is not valid.';
    }

    if ('message' in fieldValues)
      temp.message =
        fieldValues.message.length !== 0 ? '' : 'This field is required.';

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.firstName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === '');

    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === '') && formIsValid();
    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};

export default useFormControls;
