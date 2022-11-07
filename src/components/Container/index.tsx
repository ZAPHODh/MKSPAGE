import React from 'react';
import P from 'prop-types';
import { Div } from './style';

export default function Container({ children }) {
  return <Div>{children}</Div>;
}

Container.propTypes = {
  children: P.node,
};
