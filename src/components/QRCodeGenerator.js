<<<<<<< HEAD
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './QRCodeGenerator.css';

function QRCodeGenerator() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Monta a URL com os parâmetros passados na query string
    const searchParams = new URLSearchParams({
      name,
      linkedin,
      github,
      qrCodeUrl: `${window.location.origin}/qr?name=${name}&linkedin=${linkedin}&github=${github}`,
    });
    const url = `/qr?${searchParams.toString()}`;

    // Faz o redirecionamento para a página QRCodePage passando a URL como parâmetro
    history.push(url);
  };

  return (
    <div>
      <h1>QR Code Image Generator</h1>

      <div className="qrcode-generator">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
          </div>

          <div>
            <label htmlFor="linkedin">URL do LinkedIn:</label>
            <input type="text" id="linkedin" name="linkedin" value={linkedin} onChange={(event) => setLinkedin(event.target.value)} />
          </div>

          <div>
            <label htmlFor="github">URL do GitHub:</label>
            <input type="text" id="github" name="github" value={github} onChange={(event) => setGithub(event.target.value)} />
          </div>
          
          <div>
            <button type="submit">Generate Image</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
=======
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function QRCodeGenerator() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Monta a URL com os parâmetros passados na query string
    const searchParams = new URLSearchParams({
      name,
      linkedin,
      github,
      qrCodeUrl: `${window.location.origin}/qr?name=${name}&linkedin=${linkedin}&github=${github}`,
    });
    const url = `/qr?${searchParams.toString()}`;

    // Faz o redirecionamento para a página QRCodePage passando a URL como parâmetro
    history.push(url);
  };

  return (
    <div>
      <h1>QR Code Image Generator</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />

        <label htmlFor="linkedin">URL do LinkedIn:</label>
        <input type="text" id="linkedin" name="linkedin" value={linkedin} onChange={(event) => setLinkedin(event.target.value)} />

        <label htmlFor="github">URL do GitHub:</label>
        <input type="text" id="github" name="github" value={github} onChange={(event) => setGithub(event.target.value)} />

        <button type="submit">Generate Image</button>
      </form>
    </div>
  );
}

export default QRCodeGenerator;
>>>>>>> 7bab97cbf41f77b488da95c5fd4fb4ac5030e2bb
