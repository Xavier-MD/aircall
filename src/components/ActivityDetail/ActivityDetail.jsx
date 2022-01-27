import React from 'react';

import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@mui/material';
import { InfoRounded } from '@mui/icons-material';
import { dateFormatter } from '../../helpers/activityFeedHelpers.js';

const ActivityDetail = ({ call, open, handleClickOpen, handleClose, descriptionElementRef }) => {
  return (
    <div className='activity-detail'>
      <Button color='accent' onClick={handleClickOpen()}>
        <InfoRounded />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'body'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" fontFamily='Raleway'>Call Details</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography fontFamily={'Work Sans'}>
              ID: {call.id}
            </Typography>
            <Typography fontFamily={'Work Sans'}>
              Timestamp: {dateFormatter(call.created_at, 'dateTime')}
            </Typography>
            <Typography fontFamily={'Work Sans'}>
              Direction: {call.direction}
            </Typography>
            <Typography fontFamily={'Work Sans'}>
              Status: {call.call_type}
            </Typography>
            <Typography fontFamily={'Work Sans'}>
              Duration: {call.duration}
            </Typography>
            <Typography fontFamily={'Work Sans'}>
              To: {call.to}
            </Typography>
            <Typography fontFamily={'Work Sans'}>
              From: {call.from}
            </Typography>
            <Typography fontFamily={'Work Sans'}>
              Via: {call.via}
            </Typography>
            <Typography fontFamily={'Work Sans'}>
              Archive Status: {call.is_archived}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ActivityDetail;
