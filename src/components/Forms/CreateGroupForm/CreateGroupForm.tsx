import { Checkbox, message, Form } from "antd";
import api from "@services/api";
import {
  Container,
  FormContainer,
  FormButton,
  StyledItem,
  StyledRow,
  StyledCol,
} from "../styles";
import { Input, InputAreaForm } from "@components/InputsCustom";
import useConnectionStatus from "@hooks/useConnectionStatus";
import { CreateGroupFormData } from "@global/interface/interface-forms";

const CreateGroupForm: React.FC = () => {
  const [form] = Form.useForm();
  const connected = useConnectionStatus();

  const handleSubmit = async (values: unknown) => {
    const data = values as CreateGroupFormData;
    try {
      const response = await api.post("/createGroup", {
        ...data,
        names: data.names.join(","),
        admins: data.admins?.join(","),
      });
      message.success(response.data.status);
    } catch (error) {
      message.error("Failed to create group");
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
              label="Nome do grupo"
              name="groupName"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o nome do grupo",
                },
              ]}
            >
              <Input placeholder="Grupo 1" />
            </StyledItem>
          </StyledCol>
        </StyledRow>

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
            <StyledItem label="Descrição" name="description">
              <InputAreaForm placeholder="Digite a descrição do grupo aqui..." />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem label="Admins (separados por vírgula)" name="admins">
              <Input placeholder="Admin1, Admin2" />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem name="setInfoAdminsOnly" valuePropName="checked">
              <Checkbox>
                Somente admins podem ver e editar informações do grupo
              </Checkbox>
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
                Criar Grupo
              </FormButton>
            </StyledItem>
          </StyledCol>
        </StyledRow>
      </FormContainer>
    </Container>
  );
};

export default CreateGroupForm;
