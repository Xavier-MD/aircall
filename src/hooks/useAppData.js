import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppData = () => {
  const [state, setState] = useState({
    calls: []
  });

  useEffect(() => {
    axios.get('https://aircall-job.herokuapp.com/activities')
      .then((res) => {
        setState((prev) => ({
          prev,
          calls: res.data
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    state
  }
};

export default useAppData;
