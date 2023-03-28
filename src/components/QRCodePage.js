import React, { useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import QRCode from "qrcode.react";

function QRCodePage() {
  const location = useLocation();
  const history = useHistory();
  const [scanResult, setScanResult] = useState("");
  const { name, linkedin, github } = queryString.parse(location.search);
  const helloPageUrl = `${window.location.origin}${process.env.PUBLIC_URL}/hello?name=${name}&linkedin=${linkedin}&github=${github}`;


  const handleScan = (result) => {
    if (result) {
      setScanResult(result);
      // Faz o redirecionamento para a página HelloPage passando os parâmetros na URL
      history.push(helloPageUrl);
    }
  };

  console.log(helloPageUrl)

  return (
    <div className="qrcode-generator">
      <h1>QR Code Page</h1>
      <p>Hello, my name is {name}.</p>
      <p>Scan me</p>
      <QRCode value={helloPageUrl} size={230} onScan={handleScan} />

      {scanResult && <p>Scan Result: {scanResult}</p>}
    </div>
  );
}

export default QRCodePage;
