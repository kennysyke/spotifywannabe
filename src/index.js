import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { api } from './services/api';
import { store } from './store/store';

import APP from './components/main.jsx';
import './/css/global-style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/variables.css';
// import LoginForm from './pages/authorisation/login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <ApiProvider api={api}>
        <APP />
      </ApiProvider>
    </Router>
  </Provider>
);
