import { useState, useEffect } from "react";
import { message } from "antd";
import api from "@services/api";

const useConnectionStatus = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await api.get("/connectionStatus");
        setConnected(response.data.connected);
      } catch (error) {
        message.error("Failed to check connection status");
      }
    };

    checkConnection();
    const interval = setInterval(checkConnection, 1000000);

    return () => clearInterval(interval);
  }, []);

  return connected;
};

export default useConnectionStatus;
