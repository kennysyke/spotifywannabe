import React, { useContext } from 'react';
import BurgerMenu from './burgerMenu';
import logo from '../img/logo.png';
import logoblack from '../img/logo_black.png';
import { ThemeContext, themes } from '../dynamic/contexts/theme';

import styles from '../css/header.module.css';

function Header({ user }) {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={
        user ? styles.main__nav : `${styles.main__nav} ${styles.hidden}`
      }
    >
      <div className={styles.nav__logo}>
        <img
          className={styles.logo__image}
          src={theme === themes.dark ? logo : logoblack}
          alt="logo"
        />
      </div>
      <BurgerMenu />
    </nav>
  );
}

export default Header;
