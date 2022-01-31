import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppData = () => {
  const [state, setState] = useState({
    calls: []
  });

  const url = 'https://aircall-job.herokuapp.com/activities';

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setState((prev) => ({
          prev,
          calls: res.data
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state.calls]);

  return {
    state
  }
};

export default useAppData;
