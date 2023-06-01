/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation, useGetTokenMutation } from '../../services/api';
import styles from '../../css/login.module.css';
import logoBlack from '../../img/logo_black.png';
// import { AppRoutes } from '../../routes';

import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/authSlice';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postLogin] = useLoginMutation();
  const [getToken] = useGetTokenMutation();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await getToken({ email, password })
        .unwrap()
        .then((tokenRes) => {
          console.log(tokenRes);
          postLogin({ email, password }).then((res) => {
            console.log(res);
            console.log(res.data.email);
            console.log(res.data.username);
            console.log(res.data.id);
            dispatch(
              userLogin({
                email: res.data.email,
                username: res.data.username,
                id: res.data.id,
                token: tokenRes,
              })
            );
            navigate('/');
          });
        });
    } catch (error) {
      console.error('Login failed:', error);
    }
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
