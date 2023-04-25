import React from 'react';
import Sprite from '../img/icon/sprite.svg';

import styles from '../css/search.module.css';

function Search() {
  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref={`${Sprite}#icon-search`}></use>
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}

export default Search;
