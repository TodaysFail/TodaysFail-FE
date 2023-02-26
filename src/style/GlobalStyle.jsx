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

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-style: normal;
  }
`;

export default GlobalStyle;
