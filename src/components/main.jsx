/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../routes';
import styles from '../css/main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRefreshTokenMutation } from '../services/api';
import { setAccess } from '../store/authSlice';

import { ThemeContext, themes } from '../dynamic/contexts/theme';

function APP() {
  const [user, setUser] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectLogin = (state) => state.tracksApi.login;
  const selectTokenRefresh = (state) => state.tracksApi.refresh;
  const [tokenRefresh] = useRefreshTokenMutation();
  const token = useSelector(selectTokenRefresh);
  const login = useSelector(selectLogin);

  const changeToken = () => {
    if (login) {
      tokenRefresh({ refresh: token })
        .unwrap()
        .then((data) => {
          console.log(data);
          dispatch(setAccess({ access: data.access }));
        })
        .catch((e) => {
          console.error(e);
          localStorage.clear();
          navigate('/');
        });
    }
  };

  useEffect(() => {
    setInterval(() => {
      changeToken();
    }, 120000);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <div className={styles.wrapper}>
        <AppRoutes user={user} setUser={setUser} />
      </div>
    </ThemeContext.Provider>
  );
}

export default APP;
