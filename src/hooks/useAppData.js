import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppData = () => {
  const [state, setState] = useState({
    calls: [],
    callId: 7834,
    call: {}
  });

  const setCallId = (callId) => {
    setState((prev) => ({ prev, callId }));
  };

  useEffect(() => {
    Promise.all([
      axios.get('https://aircall-job.herokuapp.com/activities'),
      axios.get(`https://aircall-job.herokuapp.com/activities/${state.callId}`)
    ]).then((all) => {
      setState((prev) => ({
        prev,
        calls: all[0].data,
        call: all[1].data,
      }));
    });
  }, []);

  return {
    state,
    setCallId
  }
};

export default useAppData;
