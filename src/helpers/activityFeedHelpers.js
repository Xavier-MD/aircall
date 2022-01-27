import React from 'react';
import moment from 'moment';
import { VoicemailRounded, PhoneCallbackRounded, PhoneForwardedRounded, PhoneMissedRounded, FeedRounded } from '@mui/icons-material';

export function dateFormatter(date, format) {
  const formattedDate = new Date(date);
  if (format === 'date') {
    const newDate = moment(formattedDate).format("MMMM Do YYYY")
    return newDate;
  } else if (format === 'time') {
    const newTime = moment(formattedDate).format('LT')
    return newTime;
  }
}

export function callIcon(callDirection, callType) {
  if (callType === 'voicemail') {
    return <VoicemailRounded />
  } else if (callType === 'answered' && callDirection === 'inbound') {
    return (
      <PhoneCallbackRounded />
    );
  } else if (callType === 'answered' && callDirection === 'outbound') {
    return (
      <PhoneForwardedRounded />
    );
  } else if (callType === 'missed') {
    return (
      <PhoneMissedRounded />
    );
  }
}

export function voicemailCheck(callType, toName) {
  if (callType === 'voicemail') {
    return 'Voicemail';
  } else {
    return toName;
  }
}

