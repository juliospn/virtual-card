import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodePage from './components/QRCodePage';
import HelloPage from './components/HelloPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <QRCodeGenerator />
        </Route>
        <Route path="/qr">
          <QRCodePage />
        </Route>
        <Route path="/hello">
          <HelloPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
