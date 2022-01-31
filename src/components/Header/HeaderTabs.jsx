import React, { useState } from 'react';
import { Tabs, Tab, Badge } from '@mui/material';
import { InboxRounded, CallRounded} from '@mui/icons-material';
import { unarchivedCalls } from '../../helpers/activityFeedHelpers';

const HeaderTabs = ({ calls, setMode }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMode(value);
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
          <Badge badgeContent={unarchivedCalls(calls).length} color='primary'>
            <InboxRounded />
          </Badge>
        }
      />
      <Tab
        className='nav-tab'
        aria-label='All Calls'
        icon={
          <Badge badgeContent={calls.length} color='primary'>
            <CallRounded />
          </Badge>
        }
      />
    </Tabs>
  );
};

export default HeaderTabs;
