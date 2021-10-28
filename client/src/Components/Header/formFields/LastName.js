import React from 'react';
import TextField from '@mui/material/TextField';

const LastName = ({ field, form }) => (
  <TextField
    required
    color="formLabel"
    label="Last Name"
    name="lname"
    error={Boolean(form.errors.lastName)}
    helperText={form.errors.name}
    onChange={(e) => form.setFieldValue('lastName', e.target.value)}
  />
);

export default LastName;
