import React, { useReducer } from 'react';
import { GlobalItems } from './data';
import P from 'prop-types';
import { itensReducer } from './reducer';

export const ContextItems = React.createContext();
export const ItemsOnCartContext = ({ children }) => {
  const [state, dispatch] = useReducer(itensReducer, GlobalItems);
  return (
    <ContextItems.Provider value={{ state, dispatch }}>
      {children}
    </ContextItems.Provider>
  );
};
ItemsOnCartContext.propTypes = {
  children: P.node,
};
