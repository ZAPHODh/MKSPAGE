import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#ffffff',
    secondary: 'black',
    bgBlue: '#0F52BA',
    bgGray: '#eeeeee',
    bgValue: '#373737',
    description: '#2C2C2C',
  },
  fonts: {
    family: { default: 'Montserrat,sans-serif' },
    size: {
      title: '40px',
      subtitle: '20px',
      productName: '16px',
      description: '10px',
      button: '14px',
      price: '15px',
      item: '18px',
      cartTitle: '27px',
    },
  },
  lengths: {
    cartButtonLength: { width: '90px', height: '45px' },
    menuLength: { width: '100%', height: '101px' },
    mainCardLength: { width: '217.56px', height: '285px' },
    cartCardLength: { width: '379px', height: '95px' },
    sideBarLength: { width: '486px' },
    containerValue: { width: '64px', height: '26px' },
  },
  radius: {
    borderRadius: '8px',
    valueRadius: '5px',
  },
};
