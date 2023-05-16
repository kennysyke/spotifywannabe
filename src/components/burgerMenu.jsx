import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../dynamic/theme-switcher';
import { ThemeContext, themes } from '../dynamic/contexts/theme';

import styles from '../css/burgerMenu.module.css';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }
    setCurrentTheme(themes.dark);
  };
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // const isDarkTheme = theme === themes.dark;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
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
            <Link to="/" className={styles.menu__link}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="/login" className={styles.menu__link}>
              Выйти
            </Link>
          </li>
          <li className={styles.menu__item}>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </ThemeContext.Provider>
  );
}

export default BurgerMenu;
