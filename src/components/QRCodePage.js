import { useLocation } from "react-router-dom";
import queryString from "query-string";
import QRCode from "qrcode.react";

function QRCodePage() {
  const location = useLocation();
  const { name } = queryString.parse(location.search);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`${window.location.origin}/hello?name=${name}`)}`;

  return (
    <div>
      <h1>QR Code Page</h1>
      <p>Hello, my name is {name}.</p>
      <p>Scan me</p>
      <QRCode value={qrCodeUrl} size={230} />
    </div>
  );
}

export default QRCodePage;
