import React, { useState, useEffect } from "react";
import { Upload, Button, Table, message, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import * as XLSX from "xlsx";
import { Container } from "@components/Layout/Container";

const FileUpload: React.FC = () => {
  const [excelData, setExcelData] = useState<any[]>([]);
  const [typeError, setTypeError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3333/tasks");
        setExcelData(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };
    fetchTasks();
  }, []);

  const handleFile = (file: any) => {
    const fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    if (file && fileTypes.includes(file.type)) {
      setTypeError(null);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setExcelData(jsonData);
        localStorage.setItem("excelData", JSON.stringify(jsonData));
      };
      reader.readAsArrayBuffer(file);
    } else {
      setTypeError("Please select only excel file types");
      setExcelData([]);
      localStorage.removeItem("excelData");
    }
    return false;
  };

  const handleSendToBackend = async () => {
    try {
      const formData = new FormData();
      const blob = new Blob([JSON.stringify(excelData)], {
        type: "application/json",
      });
      formData.append("file", blob, "tasks.json");

      console.log("formData", formData);

      await axios.post("http://localhost:3333/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      message.success("Data sent to the backend successfully");
    } catch (error) {
      console.error("Failed to send data to the backend", error);
      message.error("Failed to send data to the backend");
    }
  };

  const columns =
    excelData.length > 0
      ? Object.keys(excelData[0]).map((key) => ({
          title: key,
          dataIndex: key,
          key,
          editable: true,
        }))
      : [];

  return (
    <div>
      <Upload beforeUpload={handleFile} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Upload Excel File</Button>
      </Upload>
      {typeError && (
        <div className="alert alert-danger" role="alert">
          {typeError}
        </div>
      )}
      {excelData.length > 0 ? (
        <>
          <Table
            dataSource={excelData}
            columns={columns}
            rowKey="task_id"
            pagination={false}
          />
          <Button
            onClick={handleSendToBackend}
            type="primary"
            style={{ marginTop: 16 }}
          >
            Send to Backend
          </Button>
        </>
      ) : (
        <div>No File is uploaded yet!</div>
      )}
    </div>
  );
};

export default FileUpload;
