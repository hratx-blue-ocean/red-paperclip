import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ReportedItemsFeed from './ReportedItemsFeed';
import ReportedMessagesFeed from './ReportedMessagesFeed';
import { ItemsContext } from '../ItemsContext';

const useStyles = makeStyles(() => ({
  tabText: {
    color: '#FFFFFF',
  },
  tabIndicator: {
    color: '#F0CC71',
  },
  hover1: {
    color: '#666',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover2: {
    color: '#FFFFFF',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

const Admin = () => {
  // const { isAdminState } = useContext(ItemsContext);
  // const [isAdmin] = isAdminState;
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const isAdmin = true;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {!isAdmin ? (
        <Typography align="center">
          You don&apo;t have access to this page
        </Typography>
      ) : (
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
      )}
    </>
  );
};

export default Admin;
