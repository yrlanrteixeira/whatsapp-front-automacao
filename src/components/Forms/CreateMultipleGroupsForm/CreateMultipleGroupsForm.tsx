import React, { useState } from "react";
import { Checkbox, message, Form, Input, Tabs, Button } from "antd";
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
import UploadGroupData, {
  GroupData,
} from "@components/Uploads/UploadGroupData";

const { TabPane } = Tabs;

const CreateMultipleGroupsForm: React.FC = () => {
  const [form] = Form.useForm();
  const connected = useConnectionStatus();
  const [uploadResponse, setUploadResponse] = useState<GroupData[] | null>(
    null
  );

  const handleUploadSuccess = (data: GroupData[]) => {
    setUploadResponse(data);
  };

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

  const handleSend = async () => {
    if (uploadResponse) {
      try {
        await api.post("/process-group-data", { data: uploadResponse });
        message.success("Dados enviados com sucesso!");
      } catch (error) {
        message.error("Falha ao enviar dados");
      }
    }
  };

  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Formulário" key="1">
          <FormContainer
            layout="vertical"
            onFinish={handleSubmit}
            form={form}
            initialValues={{ minInterval: 1000, maxInterval: 5000 }}
            style={{
              width: "100vw",
              maxWidth: "1000px",
              alignSelf: "center",
              margin: "0 auto",
            }}
          >
            <StyledRow gutter={24}>
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
                <StyledItem
                  label="Admins (separados por vírgula)"
                  name="admins"
                >
                  <Input placeholder="Admin1, Admin2" />
                </StyledItem>
              </StyledCol>
            </StyledRow>

            <StyledRow gutter={24}>
              <StyledCol span={24}>
                <StyledItem name="setInfoAdminsOnly" valuePropName="checked">
                  <Checkbox>
                    Somente admins podem ver e editar informações do grupo
                  </Checkbox>
                </StyledItem>
              </StyledCol>
            </StyledRow>

            <StyledRow gutter={24}>
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
        </TabPane>

        <TabPane tab="Envio através da planilha" key="2">
          <UploadGroupData onUploadSuccess={handleUploadSuccess} />
          <StyledRow gutter={16} style={{ justifyContent: "end" }}>
            <Button
              type="primary"
              onClick={handleSend}
              disabled={!uploadResponse}
              style={{ marginTop: "10px", marginRight: "10px", width: "180px" }}
            >
              Enviar Dados
            </Button>
          </StyledRow>
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default CreateMultipleGroupsForm;
