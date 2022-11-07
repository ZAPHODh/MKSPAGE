import React, { useContext, useEffect, useState } from 'react';
import Close from './Close';
import {
  CartTitle,
  SideDiv,
  CartHead,
  CartProduct,
  ContainerSubtotal,
  ButtonFinalizar,
  AllCardContainer,
  ChangeContainer,
  CalcButton,
  Unit,
  CloseProc,
} from './style';
import { ContextItems } from '../../context/AddToCart/itensOnCartContext';
import { v4 as uuidv4 } from 'uuid';

export default function SideBar() {
  const [subtotal, setSubTotal] = useState(0);
  const { state, dispatch } = useContext(ContextItems);
  const [justUpdateScreen, setJustUpdateScreen] = useState(false);

  const handleClose = (each) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: each });
  };
  useEffect(() => {
    setSubTotal(0);
    state.items.map((each) => {
      return setSubTotal(
        (previousValue) => previousValue + each.unit * Number(each.price),
      );
    });
  }, [state, justUpdateScreen]);
  return (
    <SideDiv>
      <CartHead>
        <CartTitle>
          Carrinho
          <br /> de compras
        </CartTitle>
        <Close />
      </CartHead>
      <AllCardContainer>
        {state.items.map((each) => {
          return (
            <CartProduct key={uuidv4()}>
              <img src={each.photo} alt={each.name} width="46" height="57" />
              <p>{each.name}</p>
              <ChangeContainer>
                <CalcButton
                  onClick={() => {
                    setJustUpdateScreen(!justUpdateScreen);
                    each.unit == 1 ? each.unit : each.unit--;
                  }}
                >
                  -
                </CalcButton>
                <Unit>{each.unit}</Unit>
                <CalcButton
                  onClick={() => {
                    setJustUpdateScreen(!justUpdateScreen);
                    each.unit++;
                  }}
                >
                  +
                </CalcButton>
              </ChangeContainer>
              <p>{each.price.substring(0, 4).replace('.', '')}</p>
              <CloseProc
                onClick={() => {
                  handleClose(each);
                }}
              >
                x
              </CloseProc>
            </CartProduct>
          );
        })}
      </AllCardContainer>
      <ContainerSubtotal>
        <p>Total</p>
        <p>R$ {subtotal}</p>
      </ContainerSubtotal>
      <ButtonFinalizar
        onClick={() => {
          alert('Me contrata por favor');
        }}
      >
        Finalizar Compra
      </ButtonFinalizar>
    </SideDiv>
  );
}
