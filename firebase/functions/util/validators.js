/* eslint-disable no-useless-escape */
const isEmpty = (string) => {
  if (string.trim() === '') return true;
  return false;
};

const isEmail = (email) => {
  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  return false;
};

const validateLoginData = (data) => {
  const errors = {};
  if (isEmpty(data.email)) errors.mail = 'Must not be empty';
  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

const validateSignUpData = (data) => {
  const errors = {};
  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address';
  }
  if (isEmpty(data.firstName)) errors.firstName = 'Must not be empty';
  if (isEmpty(data.lastName)) errors.lastName = 'Must not be empty';
  if (isEmpty(data.zip)) errors.zip = 'Must not be empty';
  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  if (data.password.length < 6)
    errors.password = 'Password must be atleast 6 characters long';
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords must be the same';

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

module.exports = {
  validateLoginData,
  validateSignUpData,
};
