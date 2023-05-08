import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../pages/authorisation/login';
import { ProtectedRoute } from '../components/protected-route';
import Center from '../components/center';
import RegistrationForm from '../pages/authorisation/registration';

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm setUser={setUser} />} />
      <Route path="/register" element={<RegistrationForm />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Center />} />
      </Route>
    </Routes>
  );
};
