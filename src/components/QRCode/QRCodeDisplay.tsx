import React, { useState, useEffect } from "react";
import api from "../../services/api";
import styled from "styled-components";
import { QRCode } from "antd";

const QRCodeContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const QRCodeDisplay: React.FC = () => {
  const [qrCode, setQrCode] = useState<string | null>(null);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await api.get("/getQRCode");
        setQrCode(response.data.qrCode);
      } catch (error) {
        console.error("Failed to fetch QR code");
      }
    };

    fetchQRCode();
  }, []);

  return (
    <QRCodeContainer>
      {qrCode ? <QRCode value={qrCode} /> : <p>No QR Code available</p>}
    </QRCodeContainer>
  );
};

export default QRCodeDisplay;
