/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Sprite from '../img/icon/sprite.svg';
import { ThemeContext } from '../dynamic/contexts/theme';
import styles from '../css/playlistItem.module.css';
import s from '../css/trackPlay.module.css';
import {
  useSetLikeMutation,
  useSetDislikeMutation,
} from '../services/tracksApi';
import { useDispatch } from 'react-redux';
import { selectSong } from '../store/selectSongSlice';

function PlaylistItem({
  track,
  id,
  name,
  track_file,
  author,
  album,
  duration_in_seconds,
}) {
  const { id: trackID, stared_user } = track;
  const [setLike] = useSetLikeMutation();
  const [setUnlike] = useSetDislikeMutation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  const userId = Number(localStorage.getItem('userID'));
  const [isFavorite, setFavourite] = useState(false);

  useEffect(() => {
    setFavourite(
      stared_user.some((user) => Number(user.id) === Number(userId))
    );
  }, [track]);

  const handleSelectSong = (e) => {
    e.preventDefault;
    dispatch(
      selectSong({
        id,
        name,
        track_file,
        author,
        album,
        duration_in_seconds,
      })
    );
    console.log(selectSong);
  };

  const handleFavorite = () => {
    if (isFavorite) {
      console.log(trackID);
      setUnlike(trackID);
    } else {
      setLike(trackID);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.playlist__item} onClick={handleSelectSong}>
      {isLoading ? (
        <div className={`${styles.playlist__track} track`}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              <Skeleton width={51} height={51} />
            </div>
            <div className={styles.track__title_text}>
              <Skeleton width={370} />
            </div>
          </div>
          <div className={styles.track__author}>
            <Skeleton width={321} />
          </div>
          <div className={styles.track__album}>
            <Skeleton width={245} />
          </div>
          <div className={styles.track__time}>
            <svg className={styles.track__time_svg} alt="time">
              <Skeleton width={14} height={12} />
            </svg>
            <Skeleton width={28} height={24} />
          </div>
        </div>
      ) : (
        <div className={`${styles.playlist__track} track`}>
          <div className={styles.track__title}>
            <div
              className={styles.track__title_image}
              style={{ background: theme.navcolor }}
            >
              <svg className={s.track_play__svg} alt="music">
                <use xlinkHref={`${Sprite}#icon-note`}></use>
              </svg>
            </div>
            <div className={styles.track__title_text}>
              <a className={styles.track__title_link}>
                <span
                  className={styles.track__title_span}
                  style={{
                    color: theme.color,
                  }}
                >
                  {name}
                </span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <span
              className={styles.track__author_link}
              style={{
                color: theme.color,
              }}
            >
              {author}
            </span>
          </div>
          <div className={styles.track__album}>
            <span className={styles.track__album_link}>{album}</span>
          </div>
          <div className={styles.track__time}>
            <svg
              className={styles.track__time_svg}
              alt="time"
              onClick={handleFavorite}
            >
              <use
                xlinkHref={`${Sprite}#icon-like`}
                fill={isFavorite ? 'red' : 'gray'}
              ></use>
            </svg>
            <span className={styles.track__time_text}>
              {duration_in_seconds}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlaylistItem;
