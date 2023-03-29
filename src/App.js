import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodePage from './components/QRCodePage';
import HelloPage from './components/HelloPage';
import queryString from 'query-string';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <QRCodeGenerator />
        </Route>
        <Route path="/qr">
          <QRCodePage />
        </Route>
        <Route path="/hello" render={({ location }) => {
    const { name, linkedin, github } = queryString.parse(location.search);
    return <HelloPage name={name} linkedin={linkedin} github={github} />;
}} />

      </Switch>
    </Router>
  );
}

export default App;
