import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    font-size: 12px;
    background-color: ${theme.colors.bgGray};
    height: 34px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 2170px) {
      position: absolute;
      bottom: 0;
    }
  `}
`;
