import React, { useState } from 'react';
import { Tabs, Tab, Badge } from '@mui/material';
import { InboxRounded, CallRounded, MoreVertRounded } from '@mui/icons-material';

const HeaderTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs className='header-tabs' value={value} onChange={handleChange} aria-label="icon tabs">
      <Tab
        className='inbox-tab'
        aria-label="Inbox" 
        icon={
          <Badge badgeContent={4} color="primary">
            <InboxRounded />
          </Badge>
        }
      />
      <Tab
        className='all-calls-tab'
        aria-label="All Calls"
        icon={
          <Badge badgeContent={7} color="primary">
            <CallRounded />
          </Badge>
        }
      />
      <Tab
        className='more-commands-tab'
        aria-label="More Commands"
        icon={
          <MoreVertRounded />
        }
      />
    </Tabs>
  );
};

export default HeaderTabs;
