import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import { THEME_DEFAULT } from "./styles/THEME";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";

const AppContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.COLORS.NEUTRAL_COLORS.WHITE};
    font-family: ${(props) => props.theme.FONTS.MAIN};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={THEME_DEFAULT}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Sidebar />
          <Content>
            <AppRoutes />
          </Content>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
