import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const HelloPage = (props) => {
  const location = useLocation();
  const { name, linkedin, github } = queryString.parse(location.search);

  const handleLinkedInClick = () => {
    window.open(linkedin, '_blank');
  };

  const handleGithubClick = () => {
    window.open(github, '_blank');
  };

  return (
    <div className="qrcode-generator">
      <h1>Virtual Personal Card</h1>
      <div className="form-group">
        <h2>Hello, my name is {name}.</h2>
        <p>My history</p>
        <button className="button" onClick={handleLinkedInClick}>LinkedIn profile</button>
        <button className="button" onClick={handleGithubClick}>GitHub profile</button>

      </div>
    </div>
  );
};

export default HelloPage;