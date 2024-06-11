import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";

import styled from "styled-components";
import api from "../../../services/api";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SendMessageAndPollForm: React.FC = () => {
  const [names, setNames] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState("");
  const [allowMultipleAnswers, setAllowMultipleAnswers] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await api.post("/sendMessageAndPoll", {
        names: names.split(","),
        message: messageContent,
        pollQuestion,
        pollOptions: pollOptions.split(","),
        allowMultipleAnswers,
      });
      message.success(response.data.status);
    } catch (error) {
      message.error("Failed to send message and poll");
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
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            placeholder="Digite sua mensagem aqui..."
          />
        </Form.Item>
        <Form.Item label="Pergunta da enquete" required>
          <Input
            value={pollQuestion}
            onChange={(e) => setPollQuestion(e.target.value)}
            placeholder="Qual sua cor favorita?"
          />
        </Form.Item>
        <Form.Item
          label="Alternativas da enquete (separadas por vírgula)"
          required
        >
          <Input
            value={pollOptions}
            onChange={(e) => setPollOptions(e.target.value)}
            placeholder="Azul, Vermelho, Verde"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox
            checked={allowMultipleAnswers}
            onChange={(e) => setAllowMultipleAnswers(e.target.checked)}
          >
            Permitir múltiplas respostas
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar Mensagem e Enquete
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SendMessageAndPollForm;
