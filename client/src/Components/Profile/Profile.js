import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import ProfileTabs from './ProfileTabs';
import EditProfileButton from './EditProfileButton';

const Profile = () => {
  const userName = 'Jeffrey';
  const userPFP = 'https://i.imgur.com/dNZcaDv.png';

  return (
    <Grid container spacing={5}>
      <Grid item xs={5}>
        <Card sx={{ width: 450, height: 450, backgroundColor: '#494D53' }}>
          <Typography>Hello, {userName}!</Typography>
          <Card sx={{ width: 200, height: 200, backgroundColor: '#494D53' }}>
            <CardMedia
              component="img"
              height="200"
              image={userPFP}
              style={{ objectFit: 'cover' }}
              alt="Mr. Dahmer"
            />
          </Card>
          <EditProfileButton userName={userName} userPFP={userPFP} />
        </Card>
      </Grid>
      <Grid item xs={7}>
        {/* <ProfileTabs /> */}
      </Grid>
    </Grid>
  );
};

export default Profile;
