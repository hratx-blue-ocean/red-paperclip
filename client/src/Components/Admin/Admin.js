import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ReportedItemsFeed from './ReportedItemsFeed';
import ReportedMessagesFeed from './ReportedMessagesFeed';
import { ItemsContext } from '../ItemsContext';

const Admin = () => {
  const { currentUserState } = useContext(ItemsContext);
  const [currentUser] = currentUserState;

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {currentUser.permissions === 'admin' ? (
        <>
          <Grid container>
            <Grid container item justifyContent="center">
              <Typography variant="h2" sx={{ color: 'text.white' }}>
                Admin Portal
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              width: '100%',
              bgcolor: 'cardColor.main',
              marginBottom: 5,
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              textColor="primary"
              indicatorColor="secondary"
            >
              <Tab label="Reported Items" />

              <Tab label="Reported Messages" />
            </Tabs>
          </Box>
          <Grid container>
            {value === 0 ? <ReportedItemsFeed /> : <ReportedMessagesFeed />}
          </Grid>
        </>
      ) : (
        <>
          <Grid container item justifyContent="center">
            <Typography variant="h3" sx={{ color: 'text.white' }}>
              You shall not pass!
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
};

export default Admin;
