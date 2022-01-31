import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header/Header.jsx';
import ActivityFeed from './ActivityFeed/ActivityFeed.jsx';
import ActivityManager from './ActivityFeed/ActivityManager.jsx';
import mainTheme from '../themes/mainTheme.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import useAppData from '../hooks/useAppData.js';

const App = () => {
  const { state } = useAppData();
  const [mode, setMode] = useState(1)

  const modePicker = () => {
    if (mode === 1) {
      return (
        <ActivityFeed
          calls={state.calls}
        />
      )
    } else if (mode === 0) {
      return (
        <ActivityManager
          calls={state.calls}
        />
      )
    }
  }
  
  return (
    <div className='container'>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Header 
          calls={state.calls}
          setMode={setMode}
        />
        {modePicker()}
      </ThemeProvider>
    </div>

  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
