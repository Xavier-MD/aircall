import React from 'react';
import axios from 'axios';

import { Button } from '@mui/material';
import { ArchiveRounded } from '@mui/icons-material';

const ArchiveItem = ({ callId }) => {
  
  const archiveHandler = function(event) {
    event.preventDefault();
    axios.post(`https://aircall-job.herokuapp.com/activities/${callId}`, {
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
      <Button onClick={archiveHandler}>
        <ArchiveRounded />
      </Button>
    </div>
  );
};

export default ArchiveItem;
