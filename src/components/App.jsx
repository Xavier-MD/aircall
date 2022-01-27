import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header/Header.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
