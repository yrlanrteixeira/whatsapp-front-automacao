import React from "react";
import { Routes, Route } from "react-router-dom";

import ConnectionChecker from "../components/ConnectionChecker/ConnectionChecker";
import CreateGroupForm from "../components/Forms/CreateGroupForm/CreateGroupForm";
import CreateMultipleGroupsForm from "../components/Forms/CreateMultipleGroupsForm/CreateMultipleGroupsForm";
import SendMessageAndPollForm from "../components/Forms/SendMessageAndPollForm/SendMessageAndPollForm";
import SendMessageForm from "../components/Forms/SendMessageForm/SendMessageForm";
import SendPollForm from "../components/Forms/SendPollForm/SendPollForm";
import QRCodeDisplay from "../components/QRCode/QRCodeDisplay";
import Settings from "../pages/Settings";
import PreEscala from "@pages/PreEscala";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<ConnectionChecker />} />
    <Route path="/create-group" element={<CreateGroupForm />} />
    <Route
      path="/create-multiple-groups"
      element={<CreateMultipleGroupsForm />}
    />
    <Route path="/qr-code-display" element={<QRCodeDisplay />} />
    <Route path="/send-message-and-poll" element={<SendMessageAndPollForm />} />
    <Route path="/send-message" element={<SendMessageForm />} />
    <Route path="/send-poll" element={<SendPollForm />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/pre-escala" element={<PreEscala />} />
  </Routes>
);

export default AppRoutes;
