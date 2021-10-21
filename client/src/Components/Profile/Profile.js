import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfileTabs from './ProfileTabs';
import EditProfileButton from './EditProfileButton';
import ProfileActiveItem from './ProfileActiveItem';
import { ItemsContext } from '../ItemsContext';

const Profile = () => {
  const { currentUser } = useContext(ItemsContext);
  const user = currentUser[0];
  console.log('Current user: ', currentUser);

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={5}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: 3 }}>
            Hello, {user.userFirst}!
          </Typography>
          <Card
            sx={{
              width: 450,
              height: 300,
              backgroundColor: '#494D53',
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
            <EditProfileButton />
          </Card>
          <Card
            sx={{
              width: 450,
              height: 550,
              backgroundColor: '#494D53',
              marginTop: 5,
            }}
          >
            <Typography variant="h4" textAlign="center" sx={{ marginTop: 1 }}>
              Active Item
            </Typography>
            <ProfileActiveItem />
          </Card>
        </Grid>
        <Grid item xs={7} sx={{ marginTop: 1 }}>
          <ProfileTabs />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
