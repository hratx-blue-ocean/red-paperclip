import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ConfirmPassword = ({
  field,
  form,
  values,
  handleMouseDownPassword,
  handleClickShowPassword,
}) => (
  <TextField
    required
    color="formLabel"
    label="confirm password"
    name="confirm password"
    error={Boolean(form.errors.confirmPassword)}
    helperText={form.errors.confirmPassword}
    onChange={(e) => form.setFieldValue('confirmPassword', e.target.value)}
    endadornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {values.showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
  />
);

export default ConfirmPassword;
