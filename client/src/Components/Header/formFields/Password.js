import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Password = ({
  field,
  form,
  userData,
  values,
  initialValues,
  handleMouseDownPassword,
  handleClickShowPassword,
  handleTogglePassword,
  setSignInValues,
}) => (
  <TextField
    required
    color="formLabel"
    label="password"
    name="password"
    error={Boolean(form.errors.password)}
    helperText={form.errors.password}
    onChange={(e) => form.setFieldValue('password', e.target.value)}
    // endadornment={
    //   <InputAdornment position="end">
    //     <IconButton
    //       aria-label="toggle password visibility"
    //       onClick={handleTogglePassword}
    //       onMouseDown={handleMouseDownPassword}
    //       edge="end"
    //     >
    //       {userData.showPassword || initialValues ? (
    //         <VisibilityOff />
    //       ) : (
    //         <Visibility />
    //       )}
    //     </IconButton>
    //   </InputAdornment>
    // }
  />
);

export default Password;
