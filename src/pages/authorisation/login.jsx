import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/login.module.css';
import logoBlack from '../../img/logo_black.png';
// import { AppRoutes } from '../../routes';

function LoginForm({ setUser }) {
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
    setUser({ login: username });
    navigate('/');
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/register');
  };

  return (
    <div className={styles.form_box}>
      <form className={styles.form}>
        {/* <div className={styles.form}> */}
        <img className={styles.logo__image} src={logoBlack} alt="logo" />
        <div className={styles.input_container}>
          <input
            className={styles.input}
            type="text"
            id="username"
            placeholder="login"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.button_container}>
          <button className={styles.login_button} onClick={handleLogin}>
            Log in
          </button>
          <button className={styles.register_button} onClick={handleRegister}>
            Register
          </button>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
}

export default LoginForm;
