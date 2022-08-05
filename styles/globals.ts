import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --point-color: #087AD8;
    --sub-color: #244f91;
    --white-color: #FFFFFF;
    --black-color: #1A1A1A;
    --dark-gray-color: #7f8c8d;
    --light-gray-color: #BCBCBC;
  }
  * {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    font-family: 'Noto Sans', sans-serif;
  }
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-sizing: content-box;

  html, body {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  h1, h2 {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  li {
    list-style: none;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  img {
    width: 100%;
    border: 0;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
