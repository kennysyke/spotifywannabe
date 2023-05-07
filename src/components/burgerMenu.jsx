import React, { useState } from 'react';

import styles from '../css/burgerMenu.module.css';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.nav__burger} onClick={handleBurgerClick}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div className={`${styles.nav__menu} menu ${isOpen ? 'open' : ''}`}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="http://" className={styles.menu__link}>
              Главное
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="http://" className={styles.menu__link}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="http://" className={styles.menu__link}>
              Войти
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenu;
