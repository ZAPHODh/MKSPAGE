import React from 'react';
import ReactLoading from 'react-loading';
import P from 'prop-types';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={100} width={100} />
);

Loading.propTypes = {
  type: P.node,
  color: P.node,
};
export default Loading;
