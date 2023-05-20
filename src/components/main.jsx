/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

import { AppRoutes } from '../routes';
import styles from '../css/main.module.css';

import Header from './header';
import Bar from './bar';
import SideBar from './sideBar';
import { ThemeContext, themes } from '../dynamic/contexts/theme';

function APP() {
  const [user, setUser] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

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
