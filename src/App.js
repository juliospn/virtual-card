import React from 'react'; // Importing the React library to use it in the code
import queryString from 'query-string'; // Importing the query-string library to parse the query parameters
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Importing the React Router library components
import QRCodeGenerator from './components/QRCodeGenerator.js'; // Importing the QRCodeGenerator component
import QRCodePage from './components/QRCodePage.js'; // Importing the QRCodePage component
import HelloPage from './components/HelloPage.js'; // Importing the HelloPage component

function App() { // Defining the App component
  return (
    <Router basename={process.env.PUBLIC_URL}>  {/* Defining the Router component and its basename prop */}
      <Switch>                      {/* Defining the Switch component to render only one matching route */}
        <Route exact path="/">      {/* Defining the Route component for the home page */}
          <QRCodeGenerator />       {/* Rendering the QRCodeGenerator component */}
        </Route>
        <Route path="/qr">  
          <QRCodePage />  
        </Route>
        <Route path="/hellopage" render={({ location }) => { // Defining the Route component for the HelloPage component with a render prop
          const { name, linkedin, github } = queryString.parse(location.search); // Parsing the query parameters from the URL
          return <HelloPage name={name} linkedin={linkedin} github={github} />; // Rendering the HelloPage component with the parsed query parameters as props
          }} />
      </Switch>
    </Router>
  );
}

export default App; // Exporting the App component to be used in other parts of the code
