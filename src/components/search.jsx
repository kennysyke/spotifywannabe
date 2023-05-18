import { React, useContext } from 'react';
import Sprite from '../img/icon/sprite.svg';
import { ThemeContext, themes } from '../dynamic/contexts/theme';
import styles from '../css/search.module.css';

function Search() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.centerblock__search} style={{ color: theme.color }}>
      <svg className={styles.search__svg}>
        <use
          xlinkHref={`${Sprite}#icon-${
            theme === themes.dark ? 'search' : 'search-light'
          }`}
        ></use>
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        style={{ color: theme.color }}
      />
    </div>
  );
}

export default Search;
