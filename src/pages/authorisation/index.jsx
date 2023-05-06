import React from 'react';
import { useState } from 'react';
import APP from '../../components/main';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => setUsername({ login: 'taradam' });

  const handleRegister = () => {
    // Handle register logic here
    console.log(
      'Registering with username: ',
      username,
      ' and password: ',
      password
    );
  };

  return (
    <div className="form">
      <form>
        <div className="input-container">
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
