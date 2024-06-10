import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <Menu mode="horizontal">
    <Menu.Item key="create-group">
      <Link to="/create-group">Criar Grupo</Link>
    </Menu.Item>
    <Menu.Item key="create-multiple-groups">
      <Link to="/create-multiple-groups">Criar múltiplos grupos</Link>
    </Menu.Item>
    <Menu.Item key="send-message">
      <Link to="/send-message">Enviar mensagem</Link>
    </Menu.Item>
    <Menu.Item key="send-message-and-poll">
      <Link to="/send-message-and-poll">Enviar mensagem e enquete</Link>
    </Menu.Item>
    <Menu.Item key="send-poll">
      <Link to="/send-poll">Enviar enquete</Link>
    </Menu.Item>
  </Menu>
);

export default Navbar;
