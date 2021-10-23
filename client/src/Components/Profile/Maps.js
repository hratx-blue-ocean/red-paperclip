import React, { useContext, useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ItemsContext } from '../ItemsContext';

const dotEnv = require('dotenv').config();
const zipcodes = require('zipcodes');

const mapContainerStyle = {
  width: '600px',
  height: '875px',
};

const centers = [
  {
    name: 'Austin',
    location: {
      lat: 30.266666,
      lng: -97.73333,
    },
  },
  {
    name: 'Georgetown',
    location: {
      lat: 30.633263,
      lng: -97.677986,
    },
  },
  {
    name: 'Buda',
    location: {
      lat: 30.6333,
      lng: -97.678,
    },
  },
];

const position = { lat: 30.266666, lng: -97.73333 };

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

function Maps() {
  const { isLoggedInState, menuOpenState, currentUserState } =
    useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const getCoordinates = (zip) => {
    const dataObj = zipcodes.lookup(zip);
    const location = {
      lat: dataObj.latitude,
      lng: dataObj.longitude,
    };
    return location;
  };

  return (
    <Grid container justifyContent="center">
      <Grid item align="center">
        <LoadScript googleMapsApiKey={dotEnv.mapsAPI}>
          <GoogleMap
            id="InfoWindow-example"
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={centers[0].location}
          >
            {currentUser.tradeHistory.map((item) => (
              <InfoWindow
                position={getCoordinates(item.journalLocation)}
                key={item.itemPhoto}
              >
                <div style={divStyle}>
                  <Avatar
                    alt={item.itemName}
                    src={item.itemPhoto}
                    sx={{ width: 56, height: 56 }}
                    variant="rounded"
                  />
                  <Typography>{item.itemName}</Typography>
                </div>
              </InfoWindow>
            ))}
          </GoogleMap>
        </LoadScript>
      </Grid>
    </Grid>
  );
}

export default React.memo(Maps);
