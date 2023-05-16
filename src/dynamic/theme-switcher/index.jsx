import { useThemeContext } from '../contexts/theme';
import React from 'react';
import Sprite from '../../img/icon/sprite.svg';

import { themes } from '../contexts/theme';

import styles from '../../css/burgerMenu.module.css';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useThemeContext();

  console.log('first');

  return (
    <button className={styles.menu__button} onClick={toggleTheme}>
      <svg className={styles.player__btn_play_svg} alt="play">
        <use
          xlinkHref={`${Sprite}#icon-${themes.dark ? 'dark' : 'light'}`}
        ></use>
      </svg>
    </button>
  );
};
