import React from 'react';
import axios from 'axios';

import { Button, Tooltip } from '@mui/material';
import { UnarchiveRounded } from '@mui/icons-material';

const UnarchiveItem = ({ callId }) => {

  const url = `https://aircall-job.herokuapp.com/activities/${callId}`;

  const unarchiveHandler = function (event) {
    event.preventDefault();
    axios.post(url, {
      is_archived: false
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='unarchive-button'>
      <Tooltip title="Unarchive">
        <Button onClick={unarchiveHandler}>
          <UnarchiveRounded />
        </Button>
      </Tooltip>
    </div>
  );
};

export default UnarchiveItem;
