import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import CreateGroupForm from "./components/Forms/CreateGroupForm";
import SendMessageForm from "./components/Forms/SendMessageForm";
import CreateMultipleGroupsForm from "./components/Forms/CreateMultipleGroupsForm";
import SendMessageAndPollForm from "./components/Forms/SendMessageAndPollForm";
import SendPollForm from "./components/Forms/SendPollForm";
import { GlobalStyle, theme } from "./styles/GlobalStyle";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/create-group" element={<CreateGroupForm />} />
        <Route
          path="/create-multiple-groups"
          element={<CreateMultipleGroupsForm />}
        />
        <Route path="/send-message" element={<SendMessageForm />} />
        <Route
          path="/send-message-and-poll"
          element={<SendMessageAndPollForm />}
        />
        <Route path="/send-poll" element={<SendPollForm />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
