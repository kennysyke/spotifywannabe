import React from 'react';
import Sprite from '../img/icon/sprite.svg';
import styles from '../css/content.module.css';

function PlaylistHeader() {
  return (
    <div className={styles.content__title}>
      <div className={`${styles.playlist_title__col} ${styles.col01}`}>
        Трек
      </div>
      <div className={`${styles.playlist_title__col} ${styles.col02}`}>
        ИСПОЛНИТЕЛЬ
      </div>
      <div className={`${styles.playlist_title__col} ${styles.col03}`}>
        АЛЬБОМ
      </div>
      <div className={`${styles.playlist_title__col} ${styles.col04}`}>
        <svg className={styles.playlist_title__svg} alt="time">
          <use xlinkHref={`${Sprite}#icon-watch`}></use>
        </svg>
      </div>
    </div>
  );
}

export default PlaylistHeader;
