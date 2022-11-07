import styled, { css } from 'styled-components';
import { useContext } from 'react';
import { SideOnOfContext } from '../../context/SideBar/sideOnOff';

export const CloseProc = styled.button`
  ${({ theme }) => css`
    width: 18px;
    height: 18px;
    right: 0;
    top: 0;
    color: ${theme.colors.primary};
    position: absolute;
    background-color: ${theme.colors.secondary};
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const Unit = styled.p``;

export const CalcButton = styled.button`
  ${() => css`
    width: 25%;
    border: none;
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const ChangeContainer = styled.div`
  ${() => css`
    width: 50px;
    height: 19px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    border: 0.3px solid #bfbfbf;
  `}
`;

export const AllCardContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
    position: relative;
  `}
`;

export const ButtonFinalizar = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 97px;
    display: flex;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
    font-size: ${theme.fonts.size.cartTitle};
    flex-direction: row;
    justify-content: center;
    position: relative;
    bottom: 0;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const ContainerSubtotal = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    display: flex;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.cartTitle};
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    bottom: 0;
    align-items: center;
    padding: 50px;
  `}
`;

export const CartProduct = styled.div`
  ${({ theme }) => css`
    width: ${theme.lengths.cartCardLength.width};
    height: ${theme.lengths.cartCardLength.height};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.radius.borderRadius};
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
  `}
`;

export const CartHead = styled.div`
  ${() => css`
    padding-left: 50px;
    padding-right: 20px;
    margin-top: 36px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  `}
`;

export const CartTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.cartTitle};
    font-family: ${theme.fonts.family.default};
  `}
`;

export const CloseDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    width: 38px;
    height: 38px;
    border-radius: 50%;
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const SideDiv = styled.aside`
  ${({ theme }) => css`
    z-index: 1;
    width: ${theme.lengths.sideBarLength.width};
    height: 100vh;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    background-color: ${theme.colors.bgBlue};
    position: absolute;
    right: 0;
    top: 0;
    display: none;
  `}
  ${() => {
    const { sideOn } = useContext(SideOnOfContext);
    if (sideOn === true) {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
`;
