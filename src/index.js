import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import APP from './components/main.jsx';
import './/css/global-style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/variables.css';
// import LoginForm from './pages/authorisation/login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <APP />
    </Provider>
  </Router>
);
