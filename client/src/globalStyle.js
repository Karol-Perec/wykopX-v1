import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  ${(props) => props.theme.BACKGROUND_COLOR};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: scroll;
  }
`;

export default GlobalStyle;