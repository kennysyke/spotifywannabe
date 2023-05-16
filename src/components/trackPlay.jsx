import React, { useState, useEffect } from 'react';
import Sprite from '../img/icon/sprite.svg';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '../css/trackPlay.module.css';

const TrackPlayImage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.track_play__image}>
      {isLoading ? (
        <svg className={styles.track_play__svg} alt="music">
          <Skeleton width={18} height={17} />
        </svg>
      ) : (
        <svg className={styles.track_play__svg} alt="music">
          <use xlinkHref={`${Sprite}#icon-note`}></use>
        </svg>
      )}
    </div>
  );
};

const TrackPlayAuthor = ({ author }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.track_play__author}>
      {isLoading ? (
        <Skeleton width={49} />
      ) : (
        <a className={styles.track_play__author_link} href="http://">
          {author}
        </a>
      )}
    </div>
  );
};

const TrackPlayAlbum = ({ album }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.track_play__album}>
      {isLoading ? (
        <Skeleton width={49} />
      ) : (
        <a className={styles.track_play__album_link} href="http://">
          {album}
        </a>
      )}
    </div>
  );
};

const TrackPlay = ({ author, album, audioRef, updateProgress }) => {
  const mp3File = '/audio/song.mp3';
  return (
    <div className={`${styles.player__track_play} ${styles.track_play}`}>
      <div className={styles.track_play__contain}>
        <TrackPlayImage />
        <TrackPlayAuthor author={author} />
        <TrackPlayAlbum album={album} />
        <audio ref={audioRef} src={mp3File} onTimeUpdate={updateProgress} />
      </div>

      <div className={styles.track_play__like_dis}>
        <div className={`${styles.track_play__like} ${styles._btn_icon}`}>
          <svg className={styles.track_play__like_svg} alt="like">
            <use xlinkHref={`${Sprite}#icon-like`}></use>
          </svg>
        </div>
        <div className={`${styles.track_play__dislike} ${styles._btn_icon}`}>
          <svg className={styles.track_play__dislike_svg} alt="dislike">
            <use xlinkHref={`${Sprite}#icon-dislike`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrackPlay;