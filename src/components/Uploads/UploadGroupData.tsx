import React, { useState } from "react";
import ExcelJS from "exceljs";
import { Button, Input, Form, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { StyTable, StyTableSpan } from "./styles";
import { InputAntdSimple } from "@components/InputsCustom";
import { StyledCol, StyledRow } from "@components/Forms/styles";

export interface GroupData {
  key: string;
  pessoa: string;
  descricao: string;
  evento: string;
  respoGET: string;
  planejador: string;
  mensagem1: string;
  mensagem2: string;
  mensagem3: string;
  mensagem4: string;
}

const EditableCell: React.FC<{
  title: string;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: string;
  record: GroupData;
  handleSave: (record: GroupData) => void;
}> = ({ editable, children, dataIndex, record, handleSave, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(children as string);

  const save = () => {
    handleSave({ ...record, [dataIndex]: value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <td {...restProps}>
      {editable ? (
        <Form.Item style={{ margin: 0 }}>
          {editing ? (
            <Input
              value={value}
              onChange={handleInputChange}
              onBlur={() => {
                setEditing(false);
                save();
              }}
              onPressEnter={() => {
                setEditing(false);
                save();
              }}
            />
          ) : (
            <div onClick={() => setEditing(true)}>{children}</div>
          )}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const UploadGroupData: React.FC<{
  onUploadSuccess: (data: GroupData[]) => void;
}> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const [dataSource, setDataSource] = useState<GroupData[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      const workbook = new ExcelJS.Workbook();
      const reader = new FileReader();

      reader.onload = async (e) => {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        try {
          await workbook.xlsx.load(arrayBuffer);

          const worksheet = workbook.getWorksheet("Grupos");
          if (worksheet) {
            const data: GroupData[] = [];
            worksheet.eachRow((row, rowNumber) => {
              if (rowNumber > 1) {
                const groupData: GroupData = {
                  key: `${rowNumber - 2}`,
                  pessoa: row.getCell(1).text || "",
                  descricao: row.getCell(2).text || "",
                  evento: row.getCell(3).text || "",
                  respoGET: row.getCell(4).text || "",
                  planejador: row.getCell(5).text || "",
                  mensagem1: row.getCell(6).text || "",
                  mensagem2: row.getCell(7).text || "",
                  mensagem3: row.getCell(8).text || "",
                  mensagem4: row.getCell(9).text || "",
                };
                data.push(groupData);
              }
            });

            setDataSource(data);
            onUploadSuccess(data);
          } else {
            message.error("Planilha 'Grupos' não encontrada.");
          }
        } catch (error) {
          message.error("Erro ao carregar o arquivo Excel.");
          console.error(error);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleSave = (row: GroupData) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const columns = [
    {
      title: <StyTableSpan>Pessoa</StyTableSpan>,
      dataIndex: "pessoa",
      editable: true,
    },
    {
      title: <StyTableSpan>Descrição</StyTableSpan>,
      dataIndex: "descricao",
      editable: true,
    },
    {
      title: <StyTableSpan>Evento</StyTableSpan>,
      dataIndex: "evento",
      editable: true,
    },
    {
      title: <StyTableSpan>Responsável GET</StyTableSpan>,
      dataIndex: "respoGET",
      editable: true,
    },
    {
      title: <StyTableSpan>Planejador</StyTableSpan>,
      dataIndex: "planejador",
      editable: true,
    },
    {
      title: <StyTableSpan>Mensagem 1</StyTableSpan>,
      dataIndex: "mensagem1",
      editable: true,
    },
    {
      title: <StyTableSpan>Mensagem 2</StyTableSpan>,
      dataIndex: "mensagem2",
      editable: true,
    },
    {
      title: <StyTableSpan>Mensagem 3</StyTableSpan>,
      dataIndex: "mensagem3",
      editable: true,
    },
    {
      title: <StyTableSpan>Mensagem 4</StyTableSpan>,
      dataIndex: "mensagem4",
      editable: true,
    },
  ];

  const mergedColumns: any = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: GroupData) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <div>
      <form className="form-group custom-form" onSubmit={handleFileSubmit}>
        <StyledRow gutter={24} style={{ marginBottom: "30px" }}>
          <StyledCol span={20}>
            <InputAntdSimple
              type="file"
              className="form-control"
              required
              onChange={handleFileChange}
            />
          </StyledCol>
          <StyledCol span={4}>
            <Button type="primary" htmlType="submit" icon={<UploadOutlined />}>
              Carregar dados
            </Button>
          </StyledCol>
        </StyledRow>
      </form>
      <StyTable
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={mergedColumns}
        rowKey="key"
        pagination={{ pageSize: 10 }}
        scroll={{ y: 240 }}
      />
    </div>
  );
};

export default UploadGroupData;
