import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { ItemsContext } from '../ItemsContext';

const EditProfileButton = () => {
  const { currentUserState } = useContext(ItemsContext);
  const [currentUser] = currentUserState;
  const { apiUrlState } = useContext(ItemsContext);
  const [apiUrl, setApiUrl] = apiUrlState;
  const { bearerTokenState } = useContext(ItemsContext);
  const [bearerToken] = bearerTokenState;

  const [formOpen, setFormOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [userDetails, setUserDetails] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    zip: currentUser.zip,
    imageUrl: currentUser.imageUrl,
  });

  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
    // console.log(userDetails);
  };

  const handleSubmit = () => {
    // console.log('Submitting new user details: ', userDetails);
    axios
      .post(`${apiUrl}/user/`, userDetails, {
        headers: { Authorization: `Bearer ${bearerToken}` },
      })
      // .then((postUserDetailsResponse) => {
      //   console.log('Image posted successfully: ', postUserDetailsResponse);
      // })
      .catch((error) => {
        console.log('Error posting user details: ', error);
      });
  };

  const handleClick = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  // Old photo capture and upload functions:
  // const uploadUserPhoto = () => {
  //   console.log('Attempting to post image: ', selectedFile);
  //   axios
  //     .post(`${apiUrl}/user/image`, selectedFile, {
  //       headers: { Authorization: `Bearer ${bearerToken}` },
  //     })
  //     .then((postUserImageResponse) => {
  //       console.log('Image posted successfully: ', postUserImageResponse);
  //     })
  //     .catch((error) => {
  //       console.log('Error posting user image: ', error);
  //     });
  // };

  // const handleCapture = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   console.log('Captured image: ', event.target.files[0]);
  // };

  return (
    <>
      <Button
        style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
        variant="outlined"
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
              height: 590,
              backgroundColor: '#494D53',
            }}
          >
            <Card
              // onClick={uploadUserPhoto}
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
                image={currentUser.imageUrl}
                style={{ objectFit: 'cover' }}
                alt="User photo"
              />
            </Card>
            <TextField
              onChange={handleChange}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editImageUrl"
              label="Update Image"
              variant="filled"
              name="imageUrl"
            />
            {/* Old code for image uploads:
            <label htmlFor="uploadUserImage">
              <input
                accept="image/*"
                id="uploadUserImage"
                // multiple
                type="file"
                onChange={handleCapture}
              />
              <Button
                fullWidth
                color="sortButton"
                variant="contained"
                // className={classes.hover2}
                component="span"
                onClick={uploadUserPhoto}
              >
                Upload Image
              </Button>
            </label> */}
            <TextField
              onChange={handleChange}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editFirstName"
              label="First Name"
              variant="filled"
              name="firstName"
            />
            <TextField
              onChange={handleChange}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editLasttName"
              label="Last Name"
              variant="filled"
              name="lastName"
            />
            <TextField
              onChange={handleChange}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: 200,
                marginTop: 20,
              }}
              id="editName"
              label="ZIP Code"
              variant="filled"
              name="zip"
            />
            <Button
              style={{ margin: '0 auto', display: 'flex', marginTop: 20 }}
              variant="contained"
              onClick={handleSubmit}
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
