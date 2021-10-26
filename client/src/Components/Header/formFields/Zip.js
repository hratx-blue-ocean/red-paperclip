import React from 'react';
import TextField from '@mui/material/TextField';

const Zip = ({ field, form }) => (
  <TextField
    required
    color="formLabel"
    label="zip"
    name="zip"
    error={Boolean(form.errors.zip)}
    helperText={form.errors.zip}
    onChange={(e) => form.setFieldValue('zip', e.target.value)}
  />
);

export default Zip;
