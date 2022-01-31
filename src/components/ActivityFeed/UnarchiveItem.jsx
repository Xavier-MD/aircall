import React from 'react';
import axios from 'axios';

import { Button } from '@mui/material';
import { UnarchiveRounded } from '@mui/icons-material';

const UnarchiveItem = ({ callId }) => {

  const unarchiveHandler = function (event) {
    event.preventDefault();
    axios.post(`https://aircall-job.herokuapp.com/activities/${callId}`, {
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
      <Button onClick={unarchiveHandler}>
        <UnarchiveRounded />
      </Button>
    </div>
  );
};

export default UnarchiveItem;
