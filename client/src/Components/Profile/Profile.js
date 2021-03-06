import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ProfileTabs from './ProfileTabs';
import EditProfileButton from './EditProfileButton';
import ProfileActiveItem from './ProfileActiveItem';
import { ItemsContext } from '../ItemsContext';
import AddItem from './AddItem';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 800,
  },
}));

const Profile = () => {
  const classes = useStyles();

  const { currentUserState, isLoggedInState, apiUrlState, activeItemState } =
    useContext(ItemsContext);
  const [currentUser] = currentUserState;
  const [isLoggedIn] = isLoggedInState;
  const [apiUrl, setApiUrl] = apiUrlState;
  const [activeItem, setActiveItem] = activeItemState;
  // console.log('Current user: ', currentUser);
  // console.log('Available item: ', activeItem);

  return (
    <>
      {isLoggedIn ? (
        <div className={classes.root}>
          <Grid container spacing={5}>
            <Grid item xs={5}>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ marginTop: 3 }}
                style={{ color: '#F0CC71' }}
              >
                Hello, {currentUser.firstName}!
              </Typography>
              <Box
                sx={{
                  width: 450,
                  height: 300,
                  // backgroundColor: '#494D53',
                  marginTop: 1,
                }}
              >
                <Card
                  sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#494D53',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 3,
                    borderRadius: '150px',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={currentUser.imageUrl}
                    style={{ objectFit: 'cover' }}
                    alt="Profile picture"
                  />
                </Card>
                <EditProfileButton />
              </Box>
              <Box
                style={{
                  maxWidth: '325px',
                  // height: 600,
                  // backgroundColor: '#494D53',
                  justifyContent: 'center',
                  marginBottom: 10,
                  marginLeft: '60px',
                }}
              >
                <Typography
                  variant="h4"
                  textAlign="center"
                  style={{
                    marginTop: 1,
                    marginBottom: '25px',
                    color: '#F0CC71',
                  }}
                >
                  Active Item
                </Typography>
                {activeItem.active && (
                  <ProfileActiveItem activeItem={activeItem} height="65%" />
                )}
                {!activeItem.active && (
                  <>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      sx={{ marginTop: 1, marginBottom: 2 }}
                      style={{ color: '#F0CC71' }}
                    >
                      Add an item to start trading!
                    </Typography>
                    <AddItem />
                  </>
                )}
              </Box>

              {/* <Card
            sx={{
              width: 450,
              backgroundColor: '#494D53',
              marginTop: 3,
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              style={{ marginTop: '35px', fontWeight: 800 }}
            >
              Add Item
            </Typography>
            <Grid
              container
              spacing={1}
              style={{ justifyContent: 'space-evenly' }}
            >
              <Grid item xs={12}>
                <AddItem />
              </Grid>
            </Grid>
          </Card> */}
            </Grid>
            <Grid item xs={7} sx={{ marginTop: 1 }}>
              <ProfileTabs style={{ justifyContent: 'center' }} />
            </Grid>
          </Grid>
        </div>
      ) : (
        <>
          <Grid container item justifyContent="center">
            <Typography
              variant="h3"
              align="center"
              sx={{ color: 'text.white' }}
            >
              Wubba Lubba Dub Dub!
              <br />
              ACCESS DENIED
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
};

export default Profile;
