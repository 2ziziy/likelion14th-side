import { createGlobalStyle } from 'styled-components';
import bg from '../assets/background.png';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'bitbit';
    src: url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') format('woff2'),
         url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'bitbit', sans-serif;
  }

  body {
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #000;
  }
`;

export default GlobalStyle;