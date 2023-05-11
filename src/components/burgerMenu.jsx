import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/burgerMenu.module.css';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
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
            <Link to="/" className={styles.menu__link}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="/login" className={styles.menu__link}>
              Выйти
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenu;
