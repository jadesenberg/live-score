import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #2c2c2c;
    color: #fff;
    font-family: 'Barlow', sans-serif; /* now guaranteed by next/font */
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;
