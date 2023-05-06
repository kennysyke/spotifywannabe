import React, { useState } from 'react';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="nav__burger burger" onClick={handleBurgerClick}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
<<<<<<< Updated upstream
      <div className={`nav__menu menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="http://" className="menu__link">
=======
      <div className={`${styles.nav__menu} menu ${isOpen ? styles.open : ''}`}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="http://" className={styles.menu__link}>
>>>>>>> Stashed changes
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenu;
