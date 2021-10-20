import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ItemsContext } from '../ItemsContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#494D53',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateAccountForm() {
  const {
    isLoggedInState,
    anchorElState,
    modalCreateAcctState,
    menuOpenState,
    modalSignInState,
  } = useContext(ItemsContext);
  const [setIsLoggedIn] = isLoggedInState;
  const [modalCreateAcctOpen, setModalCreateAcctOpen] = modalCreateAcctState;
  const [setSignInModalOpen] = modalSignInState;
  const [setAnchorEl] = anchorElState;
  const [setMenuOpen] = menuOpenState;

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

  const handleModalOpen = () => {
    setModalCreateAcctOpen(true);
    setSignInModalOpen(false);
    setMenuOpen(false);
  };

  const handleClose = () => {
    setModalCreateAcctOpen(false);
    setSignInModalOpen(false);
    setAnchorEl(null);
  };

  const handleCreateAcct = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setMenuOpen(false);
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleModalOpen}
        variant="contained"
        style={{ backgroundColor: '#161513', color: '#F0CC71' }}
      >
        Create an Account
      </Button>
      <Modal
        open={modalCreateAcctOpen}
        onClose={handleClose}
        aria-labelledby="menu button"
        aria-describedby="click to expand menu"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new account:
          </Typography>

          <FormControl sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="outlined-first-name">first name</InputLabel>
            <OutlinedInput
              id="first-name"
              type="text"
              onChange={handleChange('firstName')}
              label="first-name"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="outlined-last-name">last name</InputLabel>
            <OutlinedInput
              id="last-name"
              type="text"
              onChange={handleChange('lastName')}
              label="last-name"
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="outlined-email">email</InputLabel>
            <OutlinedInput
              id="email"
              type="email"
              onChange={handleChange('email')}
              label="email"
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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
          <Button
            type="submit"
            onClick={handleCreateAcct}
            style={{ backgroundColor: '#161513', color: '#F0CC71' }}
          >
            Create Your Account
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
