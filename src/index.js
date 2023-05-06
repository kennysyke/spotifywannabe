import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/main.jsx';
<<<<<<< Updated upstream
import './/css/style.css';
=======
import './/css/global-style.css';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <APP />
    </BrowserRouter>
  </React.StrictMode>
);
