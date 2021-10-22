import React, { useContext } from 'react';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ItemsContext } from '../ItemsContext';

const mapContainerStyle = {
  width: '450px',
  height: '550px',
};

const centers = [
  {
    lat: 30.266666,
    lng: -97.73333,
  },
  {
    lat: 30.633263,
    lng: -97.677986,
  },
  {
    lat: 30.6333,
    lng: -97.678,
  },
];

const position = { lat: 30.266666, lng: -97.73333 };

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

const onLoad = (infoWindow) => {
  console.log('infoWindow: ', infoWindow);
};

function Maps() {
  const { isLoggedInState, menuOpenState, currentUserState } =
    useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;

  return (
    <Grid container justifyContent="center">
      <Grid item align="center">
        <LoadScript googleMapsApiKey="AIzaSyCC5wJDdHBdkKORms0TLd1qCGWB2cr3SGs">
          <GoogleMap
            id="InfoWindow-example"
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={centers[0]}
          >
            <InfoWindow onLoad={onLoad} position={position}>
              <div style={divStyle}>
                <h1>InfoWindow</h1>
              </div>
            </InfoWindow>
          </GoogleMap>
        </LoadScript>
      </Grid>
      <Grid item align="center">
        <Typography>Item history for items: </Typography>
      </Grid>
    </Grid>
  );
}

export default React.memo(Maps);
