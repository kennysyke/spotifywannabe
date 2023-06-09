/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import styles from '../../css/login.module.css';
import logoBlack from '../../img/logo_black.png';
import { useSignupMutation, useGetTokenMutation } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [signUp, { isSuccess, isError }] = useSignupMutation();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    await signUp({
      email: email,
      username: username,
      password: password,
    });
    if (isSuccess) navigate('/login');
  };
  if (isError) console.log(isError);
  // asdfasdf321
  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
                type="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
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
      </main>
    </div>
  );
}

export default RegistrationForm;
