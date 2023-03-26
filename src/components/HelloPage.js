<<<<<<< HEAD
import React from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function HelloPage() {
    const location = useLocation();
    const { name } = queryString.parse(location.search);
  
    return (
        <div>
          <h1>Hello Page</h1>
          <p>Hello, my name is {name}.</p>
          <h2>My History</h2>
          <p>Aqui vai o texto com a história.</p>
        </div>
      );
    }

export default HelloPage;
=======
import React from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function HelloPage() {
    const location = useLocation();
    const { name } = queryString.parse(location.search);
  
    return (
        <div>
          <h1>Hello Page</h1>
          <p>Hello, my name is {name}.</p>
          <h2>My History</h2>
          <p>Aqui vai o texto com a história.</p>
        </div>
      );
    }

export default HelloPage;
>>>>>>> 7bab97cbf41f77b488da95c5fd4fb4ac5030e2bb
