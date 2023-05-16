import React from 'react';
import BurgerMenu from './burgerMenu';
import logo from '../img/logo.png';

import styles from '../css/header.module.css';


function Header({ user }) {
  return (
    <nav
      className={
        user ? styles.main__nav : `${styles.main__nav} ${styles.hidden}`
      }
    >
      <div className={styles.nav__logo}>
        <img className={styles.logo__image} src={logo} alt="logo" />
      </div>
      <BurgerMenu />
    </nav>
  );
}

export default Header;
