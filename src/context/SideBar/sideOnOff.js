import React, { useState } from 'react';
import P from 'prop-types';

export const SideOnOfContext = React.createContext();
export const SideBarContext = ({ children }) => {
  const [sideOn, setSideOn] = useState(false);
  return (
    <SideOnOfContext.Provider value={{ sideOn, setSideOn }}>
      {children}
    </SideOnOfContext.Provider>
  );
};

SideBarContext.propTypes = {
  children: P.node,
};
