import styled, { css } from 'styled-components';

export const Buy = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgBlue};
    color: ${theme.colors.primary};
    border: none;
    width: 100%;
    height: 32px;
    border-radius: 0 0 8px 8px;
    position: absolute;
    bottom: 0;
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.description};
    color:${theme.colors.description}
    text-align: left;
    text-justify: auto;
    padding:5px;
    padding-top:20px;
    padding-bottom:20px;
  `}
`;
export const ContainerValue = styled.section`
  ${({ theme }) => css`
    width: ${theme.lengths.containerValue.width};
    height: ${theme.lengths.containerValue.height};
    border-radius: ${theme.radius.valueRadius};
    background-color: ${theme.colors.bgValue};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-direction: row;
  `}
`;

export const ContainerName = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 5px;
    height: 35px;
    display: flex;
    font-size: ${theme.fonts.size.productName};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    text-align: left;
    text-justify: auto;
  `}
`;

export const ContainerProd = styled.section`
  ${() => css`
    margin-top: 200px;
    padding: 0;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;
export const DivProd = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: ${theme.lengths.mainCardLength.width};
    height: ${theme.lengths.mainCardLength.height};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.radius.borderRadius};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    margin-bottom: 20px;
    margin-top: 20px;
    position: relative;
    min-width: ${theme.lengths.mainCardLength.width};
  `}
`;

export const Container = styled.section`
  ${() => css`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 67vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`;
