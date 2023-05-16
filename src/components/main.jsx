/* eslint-disable no-unused-vars */

import React, { useState, useContext } from 'react';

import { AppRoutes } from '../routes';
import styles from '../css/main.module.css';

import Header from './header';
import Bar from './bar';
import SideBar from './sideBar';
import {
  ThemeContext,
  themes,
  useThemeContext,
} from '../dynamic/contexts/theme';

function APP() {
  const [user, setUser] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const theme = useThemeContext;

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <div className={styles.container}>
          <main className={styles.main}>
            <Header user={user} setUser={setUser} />
            <AppRoutes user={user} setUser={setUser} />
            <SideBar user={user} />
          </main>
          {user && <Bar user={user} />}
          <footer className="footer"></footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default APP;
