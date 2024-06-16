import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  MessageOutlined,
  ProfileOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  HistoryOutlined,
  TeamOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { MenuStyled, StyledSider } from "./styles";
import { useTheme } from "styled-components";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(true);

  const menuItems = [
    {
      label: <Link to="/">Início</Link>,
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/create-group">Criar Grupo</Link>,
      key: "/create-group",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/create-multiple-groups">Criar Múltiplos Grupos</Link>,
      key: "/create-multiple-groups",
      icon: <TeamOutlined />,
    },
    {
      label: <Link to="/send-message">Enviar Mensagem</Link>,
      key: "/send-message",
      icon: <MessageOutlined />,
    },
    {
      label: <Link to="/send-message-and-poll">Enviar Mensagem e Enquete</Link>,
      key: "/send-message-and-poll",
      icon: <ProfileOutlined />,
    },
    {
      label: <Link to="/send-poll">Enviar Enquete</Link>,
      key: "/send-poll",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/settings">Configurações</Link>,
      key: "/settings",
      icon: <SettingOutlined />,
    },
    {
      label: <Link to="/help">Ajuda</Link>,
      key: "/help",
      icon: <QuestionCircleOutlined />,
    },
    {
      label: <Link to="/historic">Histórico</Link>,
      key: "/historic",
      icon: <HistoryOutlined />,
    },
    {
      label: <Link to="/pre-escala">Pré-Escala</Link>,
      key: "/pre-escala",
      icon: <TeamOutlined />,
    },
  ];

  return (
    <StyledSider
      theme={theme}
      width={250}
      collapsible
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <MenuStyled
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />
    </StyledSider>
  );
};

export default Sidebar;
