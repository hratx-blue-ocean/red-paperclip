import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProfileTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, tabValue, index } = props;

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
        Trade Journey Journal
      </TabPanel>
      <TabPanel value={value} index={1}>
        Trade Journey Map
      </TabPanel>
      <TabPanel value={value} index={2}>
        Watched Items
      </TabPanel>
    </Box>
  );
};

export default ProfileTabs;
