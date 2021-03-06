import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ProfileTabPanel from './ProfileTabPanel';
import WatchedItems from './WatchedItems';
import ProfileJournal from './ProfileJournal';
import Maps from './Maps';

const ProfileTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'cardColor.main',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          // indicatorColor="secondary"
          aria-label="Trade History Tabs"
          style={{ marginLeft: '62px' }}
        >
          <Tab value={0} label="Trade History" />
          <Tab value={1} label="Trade Journey Map" />
          <Tab value={2} label="Watched Items" />
        </Tabs>
      </Box>
      <ProfileTabPanel value={value} index={0}>
        <Card
          style={{
            width: 600,
            height: 1082,
            backgroundColor: '#34363b',
            marginLeft: -3,
            marginTop: -2,
            overflow: 'auto',
          }}
        >
          <ProfileJournal />
        </Card>
      </ProfileTabPanel>
      <ProfileTabPanel value={value} index={1}>
        <Card
          style={{
            width: 600,
            height: 1082,
            backgroundColor: '#34363b',
            marginLeft: -3,
            marginTop: -2,
          }}
        >
          <Maps />
        </Card>
      </ProfileTabPanel>
      <ProfileTabPanel value={value} index={2}>
        <Card
          style={{
            width: 600,
            height: 1082,
            backgroundColor: '#34363b',
            marginLeft: -3,
            marginTop: -2,
            overflow: 'auto',
            justifyContent: 'center',
          }}
        >
          <WatchedItems />
        </Card>
      </ProfileTabPanel>
    </Box>
  );
};

export default ProfileTabs;
