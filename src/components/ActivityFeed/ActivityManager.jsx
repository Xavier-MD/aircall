import React, { Fragment } from 'react';

import { dateFormatter, callIcon, voicemailCheck, unarchivedCalls, archivedCalls } from '../../helpers/activityFeedHelpers.js'
import { Stack, Divider, List, ListItem, Card, Box, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ActivityDetail from '../ActivityDetail/ActivityDetail.jsx';
import ArchiveItem from './ArchiveItem.jsx';
import UnarchiveItem from './UnarchiveItem.jsx';
import useModalView from '../../hooks/useModalView.js';

const ActivityManager = ({ calls }) => {

  const { open, handleClickOpen, handleClose, descriptionElementRef } = useModalView();

  return (
    <div className='activity-manager'>
      <List>
        <Card>
          <Typography className='call-list-title'>
            All Calls
          </Typography>
        </Card>
        <Typography className='call-list-subtitle'>
          New({unarchivedCalls(calls).length})
        </Typography>
        {unarchivedCalls(calls)?.map((call, i) => (
          <Fragment key={i}>
            <Divider className='date-div'>
              {dateFormatter(call.created_at, 'date')}
            </Divider>
            <Card className='call-card'>
              <ListItem>
                <Stack className='call-stack'>
                  <Box className='call-box'>
                    <ListItemIcon sx={{ fontSize: 20 }}>
                      {callIcon(call.direction, call.call_type)}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography className='big-text-left'>
                        {call.from}
                      </Typography>
                      <Typography className='small-text-left'>
                        Tried to call {voicemailCheck(call.call_type, call.to)}
                      </Typography>
                    </ListItemText>
                  </Box>
                  <Divider orientation='vertical' flexItem>
                  </Divider>
                  <Stack className='tools-right'>
                    <Typography className='time-right'>
                      {dateFormatter(call.created_at, 'time')}
                    </Typography>
                    <ActivityDetail
                      className='info-button'
                      call={call}
                      open={open}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
                      descriptionElementRef={descriptionElementRef}
                    />
                    <ArchiveItem
                      color='accent'
                      callId={call.id}
                    />
                  </Stack>
                </Stack>
              </ListItem>
            </Card>
          </Fragment>
        ))}
        <Typography className='call-list-subtitle'>
          Archived({archivedCalls(calls).length})
        </Typography>
        {archivedCalls(calls)?.map((call, i) => (
          <Fragment key={i}>
            <Divider className='date-div'>
              {dateFormatter(call.created_at, 'date')}
            </Divider>
            <Card className='archived-call-card'>
              <ListItem>
                <Stack className='call-stack'>
                  <Box className='call-box'>
                    <ListItemIcon sx={{ fontSize: 20 }}>
                      {callIcon(call.direction, call.call_type)}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography className='big-text-left'>
                        {call.from}
                      </Typography>
                      <Typography className='small-text-left'>
                        Tried to call {voicemailCheck(call.call_type, call.to)}
                      </Typography>
                    </ListItemText>
                  </Box>
                  <Divider orientation='vertical' flexItem>
                  </Divider>
                  <Stack className='tools-right'>
                    <Typography className='time-right'>
                      {dateFormatter(call.created_at, 'time')}
                    </Typography>
                    <ActivityDetail
                      className='info-button'
                      call={call}
                      open={open}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
                      descriptionElementRef={descriptionElementRef}
                    />
                    <UnarchiveItem
                      color='accent'
                      callId={call.id}
                    />
                  </Stack>
                </Stack>
              </ListItem>
            </Card>
          </Fragment>
        ))}
      </List>
    </div>
  );
};

export default ActivityManager;
