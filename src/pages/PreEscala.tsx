import React, { useState, useEffect } from "react";
import { Table, Button, message } from "antd";
import axios from "axios";

const PreEscala: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [selectedLote, setSelectedLote] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3333/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };
    fetchTasks();
  }, []);

  const handleLoteChange = (lote: string) => {
    setSelectedLote(lote);
    const fetchTasksByLote = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/tasks/${lote}`);
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks by lote", error);
      }
    };
    fetchTasksByLote();
  };

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:3333/tasks/save", { tasks });
      message.success("Data saved successfully");
    } catch (error) {
      console.error("Failed to save data", error);
      message.error("Failed to save data");
    }
  };

  const columns =
    tasks.length > 0
      ? Object.keys(tasks[0]).map((key) => ({
          title: key,
          dataIndex: key,
          key,
          editable: true,
        }))
      : [];

  return (
    <div>
      <Button onClick={() => handleLoteChange("Lote_1")}>Load Lote 1</Button>
      <Button onClick={() => handleLoteChange("Lote_2")}>Load Lote 2</Button>
      {tasks.length > 0 && (
        <div>
          <Table
            dataSource={tasks}
            columns={columns}
            rowKey={(record, index) => index?.toString()}
            pagination={false}
          />
          <Button onClick={handleSave} type="primary" style={{ marginTop: 16 }}>
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default PreEscala;
