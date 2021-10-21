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
import AddItem from './AddItem';

const Profile = () => {
  const { currentUser } = useContext(ItemsContext);
  const user = currentUser[0];
  // console.log('Current user: ', currentUser);

  const testActiveItem = {
    itemName: 'Rustic Axe Set 1',
    itemDesc:
      'These beautiful axes were custom made in the heart of Minnesota. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing. I need to have more characters so I am typing.',
    itemOwner: 'Jeffrey Dahmer',
    itemPicture:
      'https://images.squarespace-cdn.com/content/v1/5acd0a3c8ab722892928be5a/1565878992439-2ER3KM60OHYNPNF2LPP3/8B059829-6D7F-424F-B9A7-4C44C112CFF9.jpg?format=2500w',
  };

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
              height: 600,
              backgroundColor: '#494D53',
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            <Typography variant="h4" textAlign="center" sx={{ marginTop: 1 }}>
              Active Item
            </Typography>
            <ProfileActiveItem activeItem={testActiveItem} height="50%" />
          </Card>

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
          <ProfileTabs />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
