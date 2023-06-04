import React from 'react';
import Sprite from '../img/icon/sprite.svg';
import PlaylistItem from './playlistItem';
import { useGetAllTracksQuery } from '../services/api';

import styles from '../css/content.module.css';

function Content() {
  const { data: tracks, isLoading, isFetching } = useGetAllTracksQuery();

  if (isLoading || isFetching) {
    return <div className={styles.centerblock__content}>Loading...</div>;
  }

  if (!tracks) {
    return (
      <div className={styles.centerblock__content}>Error fetching tracks.</div>
    );
  }
console.log(tracks);
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
        {tracks.map((track) => (
          <PlaylistItem
            key={track.id}
            name={track.name}
            track_file={track.track_file}
            author={track.author}
            album={track.album}
            duration_in_seconds={track.duration_in_seconds}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
