import React, { useContext, useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ItemsContext } from '../ItemsContext';

const zipcodes = require('zipcodes');

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
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});

  const hills = zipcodes.lookup(90210);

  const success = (markerPosition) => {
    const currentLoc = {
      lat: markerPosition.coords.latitude,
      lng: markerPosition.coords.longitude,
    };
    setCurrentPosition(currentLoc);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  // outputs:
  //   { zip: '90210',
  //   latitude: 34.088808,
  //   longitude: -118.406125,
  //   city: 'Beverly Hills',
  //   state: 'CA',
  //   country: 'US' }

  const locations = [
    {
      name: 'Location 1',
      location: {
        lat: 41.3954,
        lng: 2.162,
      },
    },
    {
      name: 'Location 2',
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
    },
    {
      name: 'Location 3',
      location: {
        lat: 41.3773,
        lng: 2.1585,
      },
    },
    {
      name: 'Location 4',
      location: {
        lat: 41.3797,
        lng: 2.1682,
      },
    },
    {
      name: 'Location 5',
      location: {
        lat: 41.4055,
        lng: 2.1915,
      },
    },
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item align="center">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={locations[0].location}
        >
          {locations.map((item) => (
            <Marker key={item.name} position={item.location} />
          ))}
        </GoogleMap>
      </Grid>
      <Grid item align="center">
        <Typography>Item history for items: </Typography>
        <ImageList sx={{ width: 450, height: 650 }}>
          {currentUser.tradeHistory.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.itemPhoto}?w=248&fit=crop&auto=format`}
                srcSet={`${item.itemPhoto}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.itemName}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.itemName}
                subtitle={<span>Traded With: {item.itemOwner}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}

export default React.memo(Maps);

// const myLatLng = { lat: -25.363, lng: 131.044 };
// const map = new google.maps.Map(document.getElementById("map"), {
//   zoom: 4,
//   center: myLatLng,
// });

// new google.maps.Marker({
//   position: myLatLng,
//   map,
//   title: "Hello World!",
// });

{
  /* <LoadScript googleMapsApiKey="AIzaSyCC5wJDdHBdkKORms0TLd1qCGWB2cr3SGs">
          <GoogleMap
            id="InfoWindow-example"
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={centers[0]}
          >
            {currentUser.tradeHistory.map((item) => (
              <InfoWindow onLoad={onLoad} position={position} key={item.img}>
                <div style={divStyle}>
                  <ImageListItem key={item.itemPhoto} alt={item.itemName} />
                  <Typography>{item.itemName}</Typography>
                </div>
              </InfoWindow>
            ))}

            <InfoWindow onLoad={onLoad} position={position}>
              <div style={divStyle}>
                <h1>InfoWindow</h1>
              </div>
            </InfoWindow>
          </GoogleMap>
        </LoadScript> */
}
