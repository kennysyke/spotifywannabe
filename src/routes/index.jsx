import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './pages/authorization';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/authorization" element={<LoginForm />} />
    </Routes>
  );
};
