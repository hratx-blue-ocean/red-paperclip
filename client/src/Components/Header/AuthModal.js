import React, { useContext } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import SignInForm from './SignInForm';
import CreateAccountForm from './CreateAccountForm';
import { ItemsContext } from '../ItemsContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  formLabel: {
    color: '#000',
    '&.Mui-focused': {
      color: '#000',
    },
  },
};

export default function AuthModal({
  setMenuOpen,
  menuOpen = false,
  setAnchorEl,
  anchorEl,
  isReturningUser,
}) {
  const { isLoggedInState, showAuthModalState } = useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;

  const handleClose = () => {
    setMenuOpen(false);
  };

  const handleOpen = () => {
    setMenuOpen(true);
  };

  return (
    <div>
      <Modal
        open={menuOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {menuOpen &&
          (isReturningUser === true ? (
            <Box sx={style}>
              <SignInForm
                setMenuOpen={setMenuOpen}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAnchorEl={setAnchorEl}
                anchorEl={anchorEl}
                handleOpen={handleOpen}
              />
            </Box>
          ) : (
            <Box sx={style}>
              <CreateAccountForm
                setMenuOpen={setMenuOpen}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAnchorEl={setAnchorEl}
                anchorEl={anchorEl}
                handleOpen={handleOpen}
              />
            </Box>
          ))}
      </Modal>
    </div>
  );
}
