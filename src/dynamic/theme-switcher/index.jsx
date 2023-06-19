import { useContext } from 'react';
import React from 'react';
import Sprite from '../../img/icon/sprite.svg';

import { ThemeContext, themes } from '../contexts/theme';

import styles from '../../css/burgerMenu.module.css';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={styles.menu__button}
      onClick={toggleTheme}
      data-testid="theme-switcher-button"
    >
      <svg className={styles.player__btn_play_svg} alt="play">
        <use
          xlinkHref={`${Sprite}#icon-${
            theme === themes.dark ? 'dark' : 'light'
          }`}
        ></use>
      </svg>
    </div>
  );
};
