import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../dynamic/theme-switcher';
import { ThemeContext } from '../dynamic/contexts/theme';

import styles from '../css/burgerMenu.module.css';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.nav__burger} onClick={handleBurgerClick}>
        <span
          className={styles.burger__line}
          style={{ color: theme.color }}
        ></span>
        <span
          className={styles.burger__line}
          style={{ color: theme.color }}
        ></span>
        <span
          className={styles.burger__line}
          style={{ color: theme.color }}
        ></span>
      </div>
      <div className={`${styles.nav__menu} menu ${isOpen ? '' : styles.open}`}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link
              to="/"
              className={styles.menu__link}
              style={{ color: theme.color }}
            >
              Главная
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              to="/"
              className={styles.menu__link}
              style={{ color: theme.color }}
            >
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              to="/login"
              className={styles.menu__link}
              style={{ color: theme.color }}
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
