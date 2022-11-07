import styled, { css } from 'styled-components';

export const DivTitle = styled.div`
  ${() => css`
    margin: ;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${theme.lengths.menuLength.width};
    height: ${theme.lengths.menuLength.height};
    background-color: ${theme.colors.bgBlue};
  `}
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.title};
    font-family: ${theme.fonts.family.default};
    color: ${theme.colors.primary};
    margin-left: 50px;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.subtitle};
    font-family: ${theme.fonts.family.default};
    margin-top: 10px;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: ${theme.lengths.cartButtonLength.width};
    height: ${theme.lengths.cartButtonLength.height};
    border-radius: ${theme.radius.borderRadius};
    margin-right: 70px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: ${theme.fonts.size.item};
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const DivCart = styled.div`
  width: 19px;
  height: 18px;
  margin-bottom: 7px;
`;
