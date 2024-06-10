import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
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

const SendMessageForm: React.FC = () => {
  const [names, setNames] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post("/sendMessage", {
        names: names.split(","),
        message: messageContent,
      });
      message.success(response.data.status);
    } catch (error) {
      message.error("Failed to send messages");
    }
  };

  return (
    <Container>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Nomes (separados por vírgula)" required>
          <Input
            value={names}
            onChange={(e) => setNames(e.target.value)}
            placeholder="Fulano, Ciclano"
          />
        </Form.Item>
        <Form.Item label="Mensagem" required>
          <Input.TextArea
            placeholder="Digite sua mensagem aqui..."
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar Mensagem
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SendMessageForm;
