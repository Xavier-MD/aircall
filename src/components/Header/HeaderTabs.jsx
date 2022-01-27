import React, { useState } from 'react';
import { Paper, Tabs, Tab, Badge } from '@mui/material';
import { InboxRounded, CallRounded, MoreVertRounded } from '@mui/icons-material';

const HeaderTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
      <Tabs
        className='nav-tabs'
        value={value}
        onChange={handleChange}
        aria-label='icon tabs'
        variant='standard'
      >
        <Tab
          className='nav-tab'
          aria-label='Inbox' 
          icon={
            <Badge badgeContent={4} color='primary'>
              <InboxRounded />
            </Badge>
          }
        />
        <Tab
          className='nav-tab'
          aria-label='All Calls'
          icon={
            <Badge badgeContent={7} color='primary'>
              <CallRounded />
            </Badge>
          }
        />
        <Tab
          className='nav-tab'
          aria-label='More Commands'
          icon={
            <MoreVertRounded />
          }
        />
      </Tabs>
    
  );
};

export default HeaderTabs;
