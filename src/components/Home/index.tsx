import React from 'react';
import P from 'prop-types';
import { Container } from './style';
export default function Home({ children }) {
  return <Container>{children}</Container>;
}

Home.propTypes = {
  children: P.node,
};
