import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/main.jsx';
import './/css/global-style.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import LoginForm from './pages/authorisation/login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <APP />
  </Router>
);


<script src="range-input.js"></script>;