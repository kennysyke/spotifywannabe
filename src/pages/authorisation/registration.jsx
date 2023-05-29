/* eslint-disable no-unused-vars */
import React from 'react';
import { useMutation } from 'react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation, useGetTokenMutation } from '../../services/api';
import styles from '../../css/login.module.css';
import logoBlack from '../../img/logo_black.png';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [signup] = useSignupMutation();
  const [token, setToken] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const tokenMutation = useMutation(useGetTokenMutation, {
    onSuccess: (data) => {
      const token = data.token;
      setToken(token);

      navigate('/');
    },
    onError: (error) => {
      console.log('Error registering:', error);
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      signup({ username, password });
      try {
        tokenMutation.mutate({ username, password });
        navigate('/');
      } catch (error) {
        console.log('Error registering:', error);
      }
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
