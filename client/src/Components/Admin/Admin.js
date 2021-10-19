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
  const { isAdminState } = useContext(ItemsContext);
  const [isAdmin] = isAdminState;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {isAdmin ? (
        <Typography>You don't have access to this page</Typography>
      ) : (
        <>
          <Grid container>
            <Grid item>
              <Typography>Admin Portal</Typography>
            </Grid>
          </Grid>
          <Box sx={{ width: '100%', bgcolor: '#FFF', marginBottom: 5 }}>
            <Tabs value={value} onChange={handleChange} centered>
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
