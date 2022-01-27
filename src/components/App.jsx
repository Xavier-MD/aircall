import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header/Header.jsx';
import ActivityFeed from './ActivityFeed/ActivityFeed.jsx';
import mainTheme from '../themes/mainTheme.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import useAppData from '../hooks/useAppData.js';

const App = () => {
  const { state, setCallId } = useAppData();

  return (
    <div className='container'>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Header />
        <ActivityFeed
          calls={state.calls}
          callId={state.callId}
          setCallId={setCallId}
          call={state.call}
        />
      </ThemeProvider>
    </div>

  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
