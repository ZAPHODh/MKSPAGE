import React, { useContext } from 'react';

import {
  DivProd,
  ContainerProd,
  ContainerName,
  ContainerValue,
  Description,
  Buy,
} from './style';
import { ContextItems } from '../../context/AddToCart/itensOnCartContext';
import P from 'prop-types';

export default function Products({ result }) {
  const { dispatch } = useContext(ContextItems);

  const handleCLick = (each) => {
    dispatch({ type: 'ADD_TO_CART', payload: each });
  };

  if (result) {
    return (
      <ContainerProd>
        {result.products.map((each) => (
          <DivProd key={each.id}>
            <img src={each.photo} alt="each.name" height={'138'} />
            <ContainerName>
              <p>{each.name}</p>
              <ContainerValue>
                <p>R$ {each.price.substring(0, 4).replace('.', '')}</p>
              </ContainerValue>
            </ContainerName>
            <Description>{each.description}</Description>
            <Buy
              onClick={() => {
                handleCLick({ ...each, unit: 1 });
              }}
            >
              COMPRAR
            </Buy>
          </DivProd>
        ))}
      </ContainerProd>
    );
  }
}

Products.propTypes = {
  result: P.any,
};
