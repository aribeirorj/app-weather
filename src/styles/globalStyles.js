import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');

  }

  *:focus {
    outline:0;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    outline: 0;
    color: #ffffff;

  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    font: 14px 'Roboto', sans-serif;    
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    color: #c3c3c3;
  }

`;

export default GlobalStyle;
