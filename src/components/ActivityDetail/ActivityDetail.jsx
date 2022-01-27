import React from 'react';

import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@mui/material';
import { InfoRounded } from '@mui/icons-material';

const ActivityDetail = ({ call, open, handleClickOpen, handleClose, descriptionElementRef }) => {
  return (
    <div>
      <Button onClick={handleClickOpen()}>
        <InfoRounded />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'body'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Call Details</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography>
              ID: {call.id}
            </Typography>
            <Typography>
              Timestamp: {call.created_at}
            </Typography>
            <Typography>
              Direction: {call.direction}
            </Typography>
            <Typography>
              Status: {call.call_type}
            </Typography>
            <Typography>
              Duration: {call.duration}
            </Typography>
            <Typography>
              To: {call.to}
            </Typography>
            <Typography>
              From: {call.from}
            </Typography>
            <Typography>
              Via: {call.via}
            </Typography>
            <Typography>
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
