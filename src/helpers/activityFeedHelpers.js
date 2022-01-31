import React from 'react';
import moment from 'moment';
import { VoicemailRounded, PhoneCallbackRounded, PhoneForwardedRounded, PhoneMissedRounded } from '@mui/icons-material';

export function dateFormatter(date, format) {
  const formattedDate = new Date(date);
  if (format === 'date') {
    const newDate = moment(formattedDate).format("MMMM Do YYYY")
    return newDate;
  } else if (format === 'time') {
    const newTime = moment(formattedDate).format('LT')
    return newTime;
  } else if (format === 'dateTime') {
    const newStamp = moment(formattedDate).format('MMMM Do YYYY, h:mm a')
    return newStamp;
  }
}

export function callIcon(callDirection, callType) {
  if (callType === 'voicemail') {
    return <VoicemailRounded />
  } else if (callType === 'answered' && callDirection === 'inbound') {
    return (
      <PhoneCallbackRounded color='secondary' />
    );
  } else if (callType === 'answered' && callDirection === 'outbound') {
    return (
      <PhoneForwardedRounded color='secondary' />
    );
  } else if (callType === 'missed') {
    return (
      <PhoneMissedRounded color='error' />
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

export function unarchivedCalls(callsArray) {
  let unarchivedCalls = [];

  for (let call of callsArray) {
    if (!call.is_archived) {
      unarchivedCalls.push(call);
    }
  }
  return unarchivedCalls;
}

export function archivedCalls(callsArray) {
  let archivedCalls = [];

  for (let call of callsArray) {
    if (call.is_archived) {
      archivedCalls.push(call);
    }
  }
  return archivedCalls;
}
