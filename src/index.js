import React from 'react';          // Import React and ReactDOM libraries
import ReactDOM from 'react-dom';
import './index.css';               // Import index.css and App component
import App from './App';
import reportWebVitals from './reportWebVitals';    // Import reportWebVitals function

const root = document.getElementById('root');      // Get the root element from the HTML file
const app = (               // Define the app as a component wrapped in <React.StrictMode> tags
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render the app inside the root element using the new ReactDOM.createRoot() method
ReactDOM.createRoot(root).render(app);

reportWebVitals(); // Call the reportWebVitals function