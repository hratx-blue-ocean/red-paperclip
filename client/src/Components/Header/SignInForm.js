import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CreateAccountForm from './CreateAccountForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#494D53',
  border: '2px solid white',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export default function SignInForm(props) {
  const { auth, handleAuthChange, setAnchorEl } = props;
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    handleAuthChange(true);
    setOpen(false);
    setAnchorEl(null);
  };
  const handleCreateAcct = (event) => {
    event.preventDefault();
    handleAuthChange(true);
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      {!auth && (
        <Button
          onClick={handleOpen}
          style={{ backgroundColor: '#161513', color: '#F0CC71' }}
        >
          Sign In
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-sign-in"
        aria-describedby="modal-sign-in-text-box"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign in with your email and password below:
          </Typography>
          <FormControl margin="normal" sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="outlined-email">email</InputLabel>
            <OutlinedInput
              id="outlined-email"
              type="text"
              onChange={handleChange('email')}
              label="email"
            />
          </FormControl>

          <FormControl margin="normal" sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              style={{ color: '#F0CC71' }}
              endAdornment={
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
              label="Password"
            />
          </FormControl>
          <Typography align="center">Dont have an account?</Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Button
                onClick={handleSignIn}
                variant="contained"
                style={{ backgroundColor: '#161513', color: '#F0CC71' }}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={6}>
              <CreateAccountForm />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
