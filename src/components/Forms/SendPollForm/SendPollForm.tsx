import React from "react";
import { message, Form, Input, Checkbox } from "antd";
import api from "@services/api";
import {
  Container,
  FormContainer,
  StyledItem,
  StyledRow,
  StyledCol,
  FormButton,
} from "../styles";
import { SendPollFormData } from "@global/interface/interface-forms";

const SendPollForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: unknown) => {
    const data = values as SendPollFormData;
    try {
      await api.post("/sendPoll", {
        names: data.names
          .toString()
          .split(",")
          .map((name) => name.trim()),
        pollQuestion: data.pollQuestion,
        pollOptions: data.pollOptions.join(","),
        allowMultipleAnswers: data.allowMultipleAnswers,
      });
      message.success("Enquete enviada com sucesso!");
    } catch (error) {
      message.error("Falha ao enviar enquete");
    }
  };

  return (
    <Container>
      <FormContainer
        layout="vertical"
        onFinish={handleSubmit}
        form={form}
        style={{ width: "100vw", maxWidth: "600px" }}
      >
        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem
              label="Nomes (separados por vírgula)"
              name="names"
              rules={[
                { required: true, message: "Por favor, insira os nomes" },
              ]}
            >
              <Input placeholder="Fulano, Ciclano" />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem
              label="Pergunta da enquete"
              name="pollQuestion"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira a pergunta da enquete",
                },
              ]}
            >
              <Input placeholder="Qual sua cor favorita?" />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem
              label="Alternativas da enquete (separadas por vírgula)"
              name="pollOptions"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira as alternativas da enquete",
                },
              ]}
            >
              <Input placeholder="Azul, Vermelho, Verde" />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem name="allowMultipleAnswers" valuePropName="checked">
              <Checkbox>Permitir múltiplas respostas</Checkbox>
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem>
              <FormButton type="primary" htmlType="submit">
                Enviar Enquete
              </FormButton>
            </StyledItem>
          </StyledCol>
        </StyledRow>
      </FormContainer>
    </Container>
  );
};

export default SendPollForm;
