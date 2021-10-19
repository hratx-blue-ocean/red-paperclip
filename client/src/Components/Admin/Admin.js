import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ReportedItemsFeed from './ReportedItemsFeed';

// const [isAdmin, setIsAdmin] = useState('true');

const Admin = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <Grid item>
          <Typography>Admin Portal</Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', bgcolor: '#FFF' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Reported Items" />

          <Tab label="Reported Messages" />
        </Tabs>
      </Box>
      {value === 0 ? (
        <ReportedItemsFeed />
      ) : (
        <Typography>List reported Messages</Typography>
      )}
    </>
  );
};

export default Admin;
