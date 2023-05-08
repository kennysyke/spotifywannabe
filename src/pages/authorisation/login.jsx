import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../routes';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setUsername({ login: 'taradam' });
    navigate('/account');
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/register');
  };

  return (
    <div className="form">
      <form>
        <div className="input-container">
          <AppRoutes />
          <input
            type="text"
            id="username"
            placeholder="login"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="button-container">
          <button onClick={handleLogin}>Log in</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
