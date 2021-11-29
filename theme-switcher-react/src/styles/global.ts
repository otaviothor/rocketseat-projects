import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0
  }

  body {
    background: ${props => props.theme.colors.backgroud};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif
  }

`;
