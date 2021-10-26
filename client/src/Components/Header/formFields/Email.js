import React from 'react';
import TextField from '@mui/material/TextField';

const Email = ({ form, field }) => (
  <TextField
    required
    label="Email"
    name="email"
    error={Boolean(form.errors.email)}
    helperText={form.errors.email}
    onChange={(e) => form.setFieldValue('email', e.target.value)}
  />
);

export default Email;
