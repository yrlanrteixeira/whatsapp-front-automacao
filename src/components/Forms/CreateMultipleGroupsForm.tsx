import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import api from "../../services/api";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CreateMultipleGroupsForm: React.FC = () => {
  const [groupNames, setGroupNames] = useState("");
  const [names, setNames] = useState("");
  const [minInterval, setMinInterval] = useState(1000);
  const [maxInterval, setMaxInterval] = useState(5000);
  const [description, setDescription] = useState("");
  const [admins, setAdmins] = useState("");
  const [setInfoAdminsOnly, setSetInfoAdminsOnly] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await api.post("/createMultipleGroups", {
        groupNames: groupNames.split(","),
        names: names.split(","),
        minInterval,
        maxInterval,
        description,
        admins: admins.split(","),
        setInfoAdminsOnly,
      });
      message.success(response.data.status);
    } catch (error) {
      message.error("Failed to create groups");
    }
  };

  return (
    <Container>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Nome dos grupos (separados por vírgula)" required>
          <Input
            value={groupNames}
            onChange={(e) => setGroupNames(e.target.value)}
            placeholder="Grupo 1, Grupo 2, Grupo 3"
          />
        </Form.Item>
        <Form.Item label="Participantes (separados por vírgula)" required>
          <Input
            value={names}
            onChange={(e) => setNames(e.target.value)}
            placeholder="Fulano, Ciclano"
          />
        </Form.Item>
        <Form.Item label="Intervalo mínimo (ms)" required>
          <Input
            value={minInterval}
            type="number"
            onChange={(e) => setMinInterval(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item label="Intervalo máximo(ms)" required>
          <Input
            value={maxInterval}
            type="number"
            onChange={(e) => setMaxInterval(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item label="Descrição do grupo">
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
          <Button type="primary" htmlType="submit">
            Criar múltiplos grupos
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default CreateMultipleGroupsForm;
