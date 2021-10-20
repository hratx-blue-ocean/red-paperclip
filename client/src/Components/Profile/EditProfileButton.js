import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import { ItemsContext } from '../ItemsContext';

const EditProfileButton = () => {
  const { currentUser } = useContext(ItemsContext);
  const user = currentUser[0];

  const [formOpen, setFormOpen] = useState(false);

  const handleClick = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  return (
    <>
      <Button
        style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
        variant="contained"
        onClick={handleClick}
      >
        Edit Profile
      </Button>
      <Modal
        open={formOpen}
        onClose={handleClose}
        aria-labelledby="editProfileForm"
        aria-describedby="editProfileForm"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Card
            sx={{
              width: 400,
              height: 500,
              backgroundColor: '#494D53',
            }}
          >
            <Card
              sx={{
                width: 200,
                height: 200,
                backgroundColor: '#494D53',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 2,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={user.userPFP}
                style={{ objectFit: 'cover' }}
                alt="Mr. Dahmer"
              />
            </Card>
            <TextField
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editName"
              label="Name"
              variant="filled"
            />
            <TextField
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editName"
              label="ZIP Code"
              variant="filled"
            />
            <Button
              style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
              variant="contained"
            >
              Update Profile
            </Button>
            <Button
              style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
              variant="contained"
            >
              Delete Profile
            </Button>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default EditProfileButton;
