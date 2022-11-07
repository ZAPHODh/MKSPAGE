import React, { useState, useContext } from 'react';
import { Button, DivCart } from './styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SideOnOfContext } from '../../context/SideBar/sideOnOff';

export default function Cart() {
  const { setSideOn } = useContext(SideOnOfContext);
  const [item] = useState(0);
  const handleClick = () => {
    setSideOn((value) => !value);
  };
  return (
    <Button
      onClick={() => {
        handleClick();
      }}
    >
      <DivCart>
        <ShoppingCartIcon />
      </DivCart>
      {item}
    </Button>
  );
}
