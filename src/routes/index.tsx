import { Routes, Route } from "react-router-dom";

import CreateGroupForm from "../components/Forms/CreateGroupForm/CreateGroupForm";
import CreateMultipleGroupsForm from "../components/Forms/CreateMultipleGroupsForm/CreateMultipleGroupsForm";
import QRCodeDisplay from "../components/QRCode/QRCodeDisplay";

import ConnectionChecker from "../components/ConnectionChecker/ConnectionChecker";
import SendMessageAndPollForm from "../components/Forms/SendMessageAndPollForm/SendMessageAndPollForm";
import SendMessageForm from "@components/Forms/SendMessageForm/SendMessageForm";
import SendPollForm from "../components/Forms/SendPollForm/SendPollForm";

const AppRoutes = () => (
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
  </Routes>
);

export default AppRoutes;
