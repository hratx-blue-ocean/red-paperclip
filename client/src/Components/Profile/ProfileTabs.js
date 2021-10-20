import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const ProfileTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, index } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          // textColor="secondary"
          // indicatorColor="secondary"
          aria-label="Trade History Tabs"
        >
          <Tab value={0} label="Trade Journey Journal" />
          <Tab value={1} label="Trade Journey Map" />
          <Tab value={2} label="Watched Items" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Card
          sx={{
            width: 600,
            height: 719,
            backgroundColor: '#494D53',
            marginLeft: -3,
            marginTop: -2,
          }}
        >
          Trade Journey Journal
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card
          sx={{
            width: 600,
            height: 719,
            backgroundColor: '#494D53',
            marginLeft: -3,
            marginTop: -2,
          }}
        >
          Trade Journey Map
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card
          sx={{
            width: 600,
            height: 719,
            backgroundColor: '#494D53',
            marginLeft: -3,
            marginTop: -2,
          }}
        >
          Watched Items
        </Card>
      </TabPanel>
    </Box>
  );
};

export default ProfileTabs;
