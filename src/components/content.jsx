import React from 'react';
import Sprite from '../img/icon/sprite.svg';
import PlaylistItem from './playlistItem';

import styles from '../css/content.module.css';

function Content() {
  return (
    <div className={styles.centerblock__content}>
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
      <div className={styles.content__playlist}>
        <PlaylistItem
          trackTitle="My ertyujk Song"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
        <PlaylistItem
          trackTitle="My Favorite Song"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
        <PlaylistItem
          trackTitle="My Favorite Song"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
        <PlaylistItem
          trackTitle="My Favorite Song"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
        <PlaylistItem
          trackTitle="dfgh"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
        <PlaylistItem
          trackTitle="dfghj"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
        <PlaylistItem
          trackTitle="sdfgh"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
        <PlaylistItem
          trackTitle="sdfgh"
          trackLink="http://example.com/my-favorite-song"
          authorName="The Best Artist"
          authorLink="http://example.com/the-best-artist"
          albumName="The Greatest Hits"
          albumLink="http://example.com/the-greatest-hits"
          trackDuration="3:30"
        />
      </div>
    </div>
  );
}

export default Content;
