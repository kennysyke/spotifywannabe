import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../dynamic/theme-switcher';
import { userLogout } from '../store/authSlice';

import styles from '../css/burgerMenu.module.css';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    userLogout();
    localStorage.clear();
  };

  return (
    <>
      <div className={styles.nav__burger} onClick={handleBurgerClick}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div className={`${styles.nav__menu} menu ${isOpen ? '' : styles.open}`}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link to="/" className={styles.menu__link}>
              Главная
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="/favourite" className={styles.menu__link}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              to="/login"
              className={styles.menu__link}
              onClick={handleLogout}
            >
              Выйти
            </Link>
          </li>
          <li className={styles.menu__item}>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenu;
