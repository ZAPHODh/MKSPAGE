import React from 'react';
import Menu from '../components/Menu';
import Products from '../components/Products';
import SideBar from '../components/SideBar';
import { SideBarContext } from '../context/SideBar/sideOnOff';
import { ItemsOnCartContext } from '../context/AddToCart/itensOnCartContext';
import Footer from '../components/Footer';
import Home from '../components/Home';
import * as styled from '../components/Container/style';

import P from 'prop-types';
export default function App({ result }) {
  return (
    <ItemsOnCartContext>
      <SideBarContext>
        <Home>
          <SideBar></SideBar>
          <styled.Div>
            <Menu></Menu>
            <Products result={result}></Products>
            <Footer />
          </styled.Div>
        </Home>
      </SideBarContext>
    </ItemsOnCartContext>
  );
}

export const getStaticProps = async () => {
  const raw = await fetch(
    'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC',
  );
  const result = await raw.json();
  return { props: { result } };
};

App.propTypes = {
  result: P.object,
};
