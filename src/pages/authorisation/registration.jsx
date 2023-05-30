/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../css/login.module.css';
import logoBlack from '../../img/logo_black.png';
import { userLogin } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const response = await fetch('https://painassasin.online/user/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const { token } = await response.json();
      dispatch(userLogin(token));
      navigate('/');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <div className={styles.form_box}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.logo__image} src={logoBlack} alt="logo" />
        <div className={styles.input_container}>
          <input
            className={styles.input}
            type="text"
            id="username"
            placeholder="username"
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

          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button className={styles.login_button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
