import React from 'react';
import axios from 'axios';

import { Button, Tooltip } from '@mui/material';
import { ArchiveRounded } from '@mui/icons-material';

const ArchiveItem = ({ callId }) => {

  const url = `https://aircall-job.herokuapp.com/activities/${callId}`;
  
  const archiveHandler = function(event) {
    event.preventDefault();
    axios.post(url, {
      is_archived: true
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='archive-button'>
      <Tooltip title="Archive">
        <Button onClick={archiveHandler}>
          <ArchiveRounded />
        </Button>
      </Tooltip>
    </div>
  );
};

export default ArchiveItem;
