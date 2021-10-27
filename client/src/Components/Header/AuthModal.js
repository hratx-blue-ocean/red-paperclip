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

export default function AuthModal({ setAnchorEl, anchorEl, isReturningUser }) {
  const { isLoggedInState, showAuthModalState } = useContext(ItemsContext);
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;

  const handleClose = () => {
    setShowAuthModal(false);
  };

  const handleOpen = () => {
    setShowAuthModal(true);
  };

  return (
    <div>
      <Modal
        open={showAuthModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {showAuthModal &&
          (isReturningUser === true ? (
            <Box sx={style}>
              <SignInForm handleOpen={handleOpen} />
            </Box>
          ) : (
            <Box sx={style}>
              <CreateAccountForm handleOpen={handleOpen} />
            </Box>
          ))}
      </Modal>
    </div>
  );
}
