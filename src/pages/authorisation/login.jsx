/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useLoginMutation,
  useGetTokenMutation,
  useRefreshTokenMutation,
} from '../../services/api';
import styles from '../../css/login.module.css';
import logoBlack from '../../img/logo_black.png';
// import { AppRoutes } from '../../routes';

import { useDispatch } from 'react-redux';
import {
  userLogin,
  userLogout,
  setRefresh,
  setAccess,
} from '../../store/authSlice';

function LoginForm({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postLogin] = useLoginMutation();
  const [getToken] = useGetTokenMutation();
  const [tokenRefresh] = useRefreshTokenMutation();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const getAccessToken = (string) => {
    tokenRefresh({ refresh: string })
      .unwrap()
      .then((tokenRes) => {
        dispatch(userLogin({ id: localStorage.getItem('userID') }));
        dispatch(setRefresh({ refresh: string }));
        dispatch(setAccess({ access: tokenRes.access }));
        navigate('/');
      })
      .catch((e) => {
        userLogout();
        localStorage.clear();
        console.error(e.data.detail);
      });
  };

  useEffect(() => {
    const storageRefresh = localStorage.getItem('refresh');
    if (!storageRefresh) return;
    getAccessToken(storageRefresh);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await getToken({ email, password })
        .unwrap()
        .then((tokenRes) => {
          localStorage.setItem('token', tokenRes.refresh);
          dispatch(setRefresh({ refresh: tokenRes.refresh }));
          dispatch(setAccess({ access: tokenRes.access }));
          postLogin({ email, password }).then((res) => {
            dispatch(userLogin({ id: res.data.id }));
          });
          console.log(localStorage.getItem('token'));
          setUser(localStorage.getItem('token'));
          navigate('/');
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
    <div className={styles.container}>
      <main className={styles.main}>
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
              <button
                className={styles.register_button}
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            {/* </div> */}
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginForm;
