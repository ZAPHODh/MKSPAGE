import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }
body{
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color:${theme.colors.primary}
    font-family: ${theme.fonts.family.default};
  `}
}
`;
