import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header/Header.jsx';
import ActivityFeed from './ActivityFeed/ActivityFeed.jsx';
import useAppData from '../hooks/useAppData.js';

const App = () => {
  const { state, setCallId } = useAppData();

  return (
    <div className='container'>
      <Header/>
      <ActivityFeed
        calls={state.calls}
        callId={state.callId}
        setCallId={setCallId}
        call={state.call}
      />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
