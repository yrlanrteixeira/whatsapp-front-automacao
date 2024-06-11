import { message, Form, Input } from "antd";
import api from "@services/api";
import {
  Container,
  FormContainer,
  StyledItem,
  StyledRow,
  StyledCol,
  FormButton,
} from "../styles";
import { SendMessageFormData } from "@global/interface/interface-forms";
import useConnectionStatus from "@hooks/useConnectionStatus";

const SendMessageForm: React.FC = () => {
  const [form] = Form.useForm();
  const connected = useConnectionStatus();

  const handleSubmit = async (values: unknown) => {
    const data = values as SendMessageFormData;
    try {
      await api.post("/sendMessage", {
        names: data.names
          .toString()
          .split(",")
          .map((name) => name.trim()),
        message: data.message,
      });
      console.log(data);
      message.success("Mensagens enviadas com sucesso!");
    } catch (error) {
      console.log(error);
      message.error("Falha ao enviar mensagens");
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
              label="Mensagem"
              name="message"
              rules={[
                { required: true, message: "Por favor, insira a mensagem" },
              ]}
            >
              <Input.TextArea placeholder="Digite sua mensagem aqui..." />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem>
              <FormButton
                type="primary"
                htmlType="submit"
                disabled={!connected}
              >
                Enviar Mensagem
              </FormButton>
            </StyledItem>
          </StyledCol>
        </StyledRow>
      </FormContainer>
    </Container>
  );
};

export default SendMessageForm;
