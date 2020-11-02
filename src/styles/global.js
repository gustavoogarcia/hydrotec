import { createGlobalStyle } from 'styled-components';
import Apercu from '../fonts/Apercu/ApercuRegular.otf';

export const hydrotecTheme = {
  color: {
    brand: '#8bc53f',
    brandMedium: '#419645',
    brandDark: '#1e7c4d',
    brandComplementarDark: '#13739e',
    brandComplementarMedium: '#00a1a5',
    brandComplementar: '#16c4c4',
    cream: '#f7f1ee',
    warning: '#FFD255',
    danger: '#ff6b57',
    white: '#fafafa',
    lightGray: '#eee',
    mediumGray: '#777',
    gray: '#333',
    black: '#000',
    brandGradient: 'linear-gradient(75deg, #1e7c4d 5%, #16c4c4 25%, #16c4c4 50%, #8bc53f 90%);',
    brandComplementarGradient: 'linear-gradient(45deg, #16c4c4 5%, #f7f1ee 50%, #FFD255 95%);',
  },
  screen: {
    screenXS: '475px',
    screenSM: '768px',
    screenMD: '1080px',
    screenLG: '1440px',
    screenXL: '2560px'
  },
  fontSize: {
    fontSizeUS: '8px',
    fontSizeXXXS: '12px',
    fontSizeXXS: '14px',
    fontSizeXS: '16px',
    fontSizeSM: '18px',
    fontSizeMD: '28px',
    fontSizeLG: '32px',
    fontSizeXL: '36px',
    fontSizeXXL: '40px',
    fontSizeXXXL: '44px',
    fontSizeUL: '48xpx'
  },
  lineHeight: {
    lineHeightSM: '100%',
    lineHeightMD: '110%',
    lineHeightLG: '120%',
    lineHeightUL: '150%'
  },
  fontWeight: {
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '700',
  },
  borderRadius: {
    borderRadiusNone: '0',
    borderRadiusSM: '4px',
    borderRadiusMD: '8px',
    borderRadiusLG: '16px',
    borderRadiusXL: '24px',
    borderRadiusPill: '500px',
    borderRadiusCircle: '50%',
  },
  spacing: {
    spacingUS: '2px',
    spacingXXXS: '4px',
    spacingXXS: '8px',
    spacingXS: '16px',
    spacingSM: '24px',
    spacingMD: '32px',
    spacingLG: '40px',
    spacingXL: '48px',
    spacingXXL: '56px',
    spacingXXXL: '64px',
    spacingSquishUS: '2px 8px',
    spacingSquishXXS: '4px 16px',
    spacingSquishXS: '8px 16px',
    spacingSquishSM: '16px 20px',
    spacingSquishMD: '16px 24px',
    spacingSquishLG: '24px 40px'
  },
  boxShadow: {
    boxShadowMD: '0px 1px 6px #383838',
    boxShadowLG: '0px 1px 20px #6f6f6f',
  }
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apercu';
    src: local('Apercu'), local('Apercu'), url(${Apercu}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Apercu', sans-serif;
}

html, body, #root {
  min-height: 100vh;
  background-size: 800px;
}

body {
  -webkit-font-smoothing: antialiased !important;
  background: #f7f1ee;
}

button {
    border: 0;
    outline: none;
    cursor: pointer;
    background-color: transparent;
}

ul {
    list-style-type: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  outline: none;
}

input, textarea {
  border: none;
  background-color: transparent;
}

`;
