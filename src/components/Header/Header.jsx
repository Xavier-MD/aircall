import React from 'react';
import HeaderSVG from './HeaderSVG.jsx';
import HeaderTabs from './HeaderTabs.jsx';

const Header = ({ calls, setMode }) => {
  return (
    <header>
      <HeaderSVG />
      <HeaderTabs 
        calls={calls}
        setMode={setMode}
      />
    </header>
  );
};

export default Header;
