import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import api from "../../../services/api";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CreateGroupForm: React.FC = () => {
  const [groupName, setGroupName] = useState("");
  const [names, setNames] = useState("");
  const [description, setDescription] = useState("");
  const [admins, setAdmins] = useState("");
  const [setInfoAdminsOnly, setSetInfoAdminsOnly] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await api.get("/connectionStatus");
        setConnected(response.data.connected);
      } catch (error) {
        message.error("Failed to check connection status");
      }
    };

    checkConnection();
    const interval = setInterval(checkConnection, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await api.post("/createGroup", {
        groupName,
        names: names.split(","),
        description,
        admins: admins.split(","),
        setInfoAdminsOnly,
      });
      message.success(response.data.status);
    } catch (error) {
      message.error("Failed to create group");
    }
  };

  return (
    <Container>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Nome do grupo" required>
          <Input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Grupo 1"
          />
        </Form.Item>
        <Form.Item label="Nomes (separados por vírgula)" required>
          <Input
            value={names}
            onChange={(e) => setNames(e.target.value)}
            placeholder="Fulano, Ciclano"
          />
        </Form.Item>
        <Form.Item label="Descrição">
          <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição do grupo aqui..."
          />
        </Form.Item>
        <Form.Item label="Admins (separados por vírgula)">
          <Input
            value={admins}
            onChange={(e) => setAdmins(e.target.value)}
            placeholder="Admin1, Admin2"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox
            checked={setInfoAdminsOnly}
            onChange={(e) => setSetInfoAdminsOnly(e.target.checked)}
          >
            Somente admins podem ver editar informações do grupo
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!connected}>
            Criar Grupo
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default CreateGroupForm;
