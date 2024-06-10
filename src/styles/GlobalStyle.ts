import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    background: "#f0f2f5",
    primary: "#26C4FF",
    secondary: "#98D843",
    danger: "#FF3E3C",
    white: "#fff",
  },
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fontFamily};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
