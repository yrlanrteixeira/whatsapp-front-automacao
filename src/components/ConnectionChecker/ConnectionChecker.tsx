import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import styled from "styled-components";
import { message } from "antd";
import { QRCode } from "antd";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const QRCodeDisplay = styled.div`
  margin-bottom: 20px;
`;

const ConnectionChecker: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await api.get("/connectionStatus");
        setConnected(response.data.connected);

        if (!response.data.connected) {
          const qrResponse = await api.get("/getQRCode");
          setQrCode(qrResponse.data.qrCode);
        } else {
          navigate("/");
        }
      } catch (error) {
        message.error("Failed to check connection status");
      }
    };

    checkConnection();
    const interval = setInterval(checkConnection, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <Container>
      {connected ? (
        <p>Client is connected!</p>
      ) : (
        <QRCodeDisplay>
          <p>Client is not connected. Please scan the QR code below:</p>
          {qrCode ? <QRCode value={qrCode} /> : <p>Loading QR Code...</p>}
        </QRCodeDisplay>
      )}
    </Container>
  );
};

export default ConnectionChecker;
