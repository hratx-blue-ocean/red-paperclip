import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';

const EditProfileButton = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const { userName, userPFP } = props;

  const handleClick = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Edit Profile
      </Button>
      <Modal
        open={formOpen}
        onClose={handleClose}
        aria-labelledby="editProfileForm"
        aria-describedby="editProfileForm"
      >
        <Box>
          <Typography>Edit Your Profile</Typography>
          <Card sx={{ width: 400, height: 600, backgroundColor: '#494D53' }}>
            <Card sx={{ width: 200, height: 200, backgroundColor: '#494D53' }}>
              <CardMedia
                component="img"
                height="200"
                image={userPFP}
                style={{ objectFit: 'cover' }}
                alt="Mr. Dahmer"
              />
            </Card>
            <TextField id="editName" label="Name" variant="filled" />
            <br />
            <TextField id="editName" label="ZIP Code" variant="filled" />
            <br />
            <Button variant="contained">Update Profile</Button>
            <br />
            <Button variant="contained">Delete Profile</Button>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default EditProfileButton;
