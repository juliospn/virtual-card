import React, { useState } from "react";
import { useLocation, useHistory } from 'react-router-dom'; // importing hooks from react-router-dom
import queryString from 'query-string'; // importing a library to parse query strings
import QRCode from "qrcode.react"; // importing the QRCode component

function QRCodePage() {
  const location = useLocation(); // getting the current location
  const history = useHistory(); // getting the history object
  const [scanResult, setScanResult] = useState(""); // defining a state to hold the scan result
  const { name, linkedin, github } = queryString.parse(location.search); // parsing the query string to get name, linkedin and github values
  const helloPageUrl = `${window.location.origin}${process.env.PUBLIC_URL}/hellopage?name=${name}&linkedin=${linkedin}&github=${github}`; // constructing the URL for the HelloPage component with the parsed values

  // function to handle the QRCode scan result
  const handleScan = (result) => {
    if (result) {
      setScanResult(result);
      history.push(helloPageUrl); // redirecting to the HelloPage component with the parsed values
    }
  };

  console.log(helloPageUrl) // logging the constructed URL to the console

  return (
    <div className="qrcode-generator">
      <h1>QR Code Page</h1>
      <p>Hello, my name is {name}.</p>
      <p>Scan me</p>
      <QRCode value={helloPageUrl} size={230} onScan={handleScan} /> {/* rendering the QRCode component with the constructed URL and the handleScan function */}

      {scanResult && <p>Scan Result: {scanResult}</p>} {/* rendering the scan result if it exists */}
    </div>
  );
}

export default QRCodePage; // exporting the QRCodePage component
