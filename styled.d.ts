import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bgBlue: string;
      bgGray: string;
      bgValue: string;
      description: string;
    };
    fonts: {
      family: { default: string };
      size: {
        title: string;
        subtitle: string;
        productName: string;
        description: string;
        button: string;
        price: string;
        item: string;
        cartTitle: string;
      };
    };
    lengths: {
      cartButtonLength: { width: string; height: string };
      menuLength: { width: string; height: string };
      mainCardLength: { width: string; height: string };
      cartCardLength: { width: string; height: string };
      sideBarLength: { width: string };
      containerValue: { width: string; height: string };
    };
    radius: {
      borderRadius: string;
      valueRadius: string;
    };
  }
}
