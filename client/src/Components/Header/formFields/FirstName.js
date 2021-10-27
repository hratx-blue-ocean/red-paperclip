import React from 'react';
import TextField from '@mui/material/TextField';

const FirstName = ({ field, form }) => (
  <TextField
    required
    color="formLabel"
    label="first name"
    name="fname"
    error={Boolean(form.errors.firstName)}
    helperText={form.errors.firstName}
    onChange={(e) => form.setFieldValue('firstName', e.target.value)}
  />
);

export default FirstName;
