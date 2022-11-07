import React, { useContext } from 'react';
import { CloseDiv } from './style';
import { SideOnOfContext } from '../../context/SideBar/sideOnOff';

export default function Close() {
  const { setSideOn } = useContext(SideOnOfContext);
  const handleClick = () => {
    setSideOn((value) => !value);
  };
  return (
    <CloseDiv
      onClick={() => {
        handleClick();
      }}
    >
      X
    </CloseDiv>
  );
}
