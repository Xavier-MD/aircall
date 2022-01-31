import React, { Fragment } from 'react';

import { dateFormatter, callIcon, voicemailCheck, unarchivedCalls } from '../../helpers/activityFeedHelpers.js'
import { Stack, Divider, List, ListItem, Card, Box, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ActivityDetail from '../ActivityDetail/ActivityDetail.jsx';
import useModalView from '../../hooks/useModalView.js';
import ArchiveItem from './ArchiveItem.jsx';

const ActivityFeed = ({ calls }) => {

  const { open, handleClickOpen, handleClose, descriptionElementRef } = useModalView();

  return (
    <div className='activity-feed'>
      <List>
        <Card>
          <Typography className='call-list-title'>
            Inbox
          </Typography>
        </Card>
        {unarchivedCalls(calls)?.map((call, i) => (
          <Fragment key={i}>
            <Divider className='date-div'>
              {dateFormatter(call.created_at, 'date')}
            </Divider>
            <Card className='call-card'>
              <ListItem>
                <Stack className='call-stack'>
                  <Box className='call-box'>
                    <ListItemIcon sx={{ fontSize: 20}}> 
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
      </List>
    </div>
  );
};

export default ActivityFeed;
