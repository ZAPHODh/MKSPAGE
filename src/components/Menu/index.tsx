import React from 'react';
import Cart from './Cart';
import { DivTitle, Header, Subtitle, Title } from './styles';
export default function Menu() {
  return (
    <Header>
      <DivTitle>
        <Title>MKS</Title>
        <Subtitle>Sistemas</Subtitle>
      </DivTitle>
      <Cart></Cart>
    </Header>
  );
}
