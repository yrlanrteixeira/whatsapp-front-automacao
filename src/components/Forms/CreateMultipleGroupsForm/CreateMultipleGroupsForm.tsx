import { Checkbox, message, Form, Input } from "antd";
import api from "@services/api";
import {
  Container,
  FormContainer,
  StyledItem,
  StyledRow,
  StyledCol,
  FormButton,
} from "../styles";
import { CreateMultipleGroupsFormData } from "@global/interface/interface-forms";
import useConnectionStatus from "@hooks/useConnectionStatus";

const CreateMultipleGroupsForm: React.FC = () => {
  const [form] = Form.useForm();
  const connected = useConnectionStatus();

  const handleSubmit = async (values: unknown) => {
    const data = values as CreateMultipleGroupsFormData;
    try {
      await api.post("/createMultipleGroups", {
        ...data,
        groupNames: data.groupNames.join(","),
        names: data.names
          .toString()
          .split(",")
          .map((name) => name.trim()),
        admins: data.admins
          ?.toString()
          .split(",")
          .map((admin) => admin.trim()),
      });
      message.success("Grupos criados com sucesso!");
    } catch (error) {
      message.error("Falha ao criar grupos");
    }
  };

  return (
    <Container>
      <FormContainer
        layout="vertical"
        onFinish={handleSubmit}
        form={form}
        initialValues={{ minInterval: 1000, maxInterval: 5000 }}
        style={{ width: "100vw", maxWidth: "600px" }}
      >
        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem
              label="Nome dos grupos (separados por vírgula)"
              name="groupNames"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira os nomes dos grupos",
                },
              ]}
            >
              <Input placeholder="Grupo 1, Grupo 2, Grupo 3" />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem
              label="Participantes (separados por vírgula)"
              name="names"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira os nomes dos participantes",
                },
              ]}
            >
              <Input placeholder="Fulano, Ciclano" />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={12}>
            <StyledItem
              label="Intervalo mínimo (ms)"
              name="minInterval"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o intervalo mínimo",
                },
              ]}
            >
              <Input type="number" />
            </StyledItem>
          </StyledCol>
          <StyledCol span={12}>
            <StyledItem
              label="Intervalo máximo (ms)"
              name="maxInterval"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o intervalo máximo",
                },
              ]}
            >
              <Input type="number" />
            </StyledItem>
          </StyledCol>
        </StyledRow>

        <StyledRow gutter={16}>
          <StyledCol span={24}>
            <StyledItem label="Descrição do grupo" name="description">
              <Input.TextArea placeholder="Digite a descrição do grupo aqui..." />
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
                Criar múltiplos grupos
              </FormButton>
            </StyledItem>
          </StyledCol>
        </StyledRow>
      </FormContainer>
    </Container>
  );
};

export default CreateMultipleGroupsForm;
