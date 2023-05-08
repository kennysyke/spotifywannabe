import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../pages/authorisation/login';
import { ProtectedRoute } from '../components/protected-route';
import APP from '../components/main';
import RegistrationForm from '../pages/authorisation/registration';

export const AppRoutes = () => {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/login" element={<LoginForm setUsername={setUser} />} />
      <Route path="/register" element={<RegistrationForm />} />
      {/* <Route
        path="/app"
        element={user ? <APP /> : <Navigate to="/authorization" />}
      /> */}
      <Route
        path="/account"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <APP />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
