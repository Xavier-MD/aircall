import React, { Fragment } from 'react';

import { dateFormatter, callIcon, voicemailCheck } from '../../helpers/activityFeedHelpers.js'
import { Stack, Divider, List, ListItem, Card, Grid, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ArchiveRounded } from '@mui/icons-material';
import ActivityDetail from '../ActivityDetail/ActivityDetail.jsx';
import useModalView from '../../hooks/useModalView.js';

const ActivityFeed = ({ calls }) => {

  const { open, setOpen, handleClickOpen, handleClose, descriptionElementRef } = useModalView();

  return (
    <div className='activity-feed'>
      <List className='call-list'>
        {calls.map((call, i) => (
          <Fragment key={i}>
            <Divider className='date-div'>
              {dateFormatter(call.created_at, 'date')}
            </Divider>
            <Card>
              <ListItem alignItems="flex-start">
                <Stack direction={'row'} spacing={5}>
                  <Grid item>
                    <ListItemIcon sx={{ fontSize: 20}}> 
                      {callIcon(call.direction, call.call_type)}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        {call.from}
                      </Typography>
                      <Typography>
                        Tried to call {voicemailCheck(call.call_type, call.to)}
                      </Typography>
                    </ListItemText>
                  </Grid>
                  <Divider orientation='vertical' flexItem>
                  </Divider>
                  <Stack>
                    {dateFormatter(call.created_at, 'time')}
                    <ActivityDetail
                      call={call}
                      open={open}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
                      descriptionElementRef={descriptionElementRef}
                    />
                    <ArchiveRounded />
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
