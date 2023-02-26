import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0, 0);
  } 

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'suit variable', sans-serif;
    margin:0;
    padding:0;
  }

  a {
    text-decoration:none;
  }

  button{
    border: none;
    background: inherit;
    outline: none;
    padding: 0;
  }

  h1,h2,h3, p, span{
    margin: 0;
  }

`;

export default GlobalStyle;
