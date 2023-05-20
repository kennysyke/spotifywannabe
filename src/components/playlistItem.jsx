import React, { useState, useEffect, useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Sprite from '../img/icon/sprite.svg';
import { ThemeContext } from '../dynamic/contexts/theme';

import styles from '../css/playlistItem.module.css';
import s from '../css/trackPlay.module.css';

function PlaylistItem(props) {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.playlist__item}>
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
              <a className={styles.track__title_link} href={props.track_file}>
                <span
                  className={styles.track__title_span}
                  style={{
                    color: theme.color,
                  }}
                >
                  {props.name}
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
              {props.author}
            </span>
          </div>
          <div className={styles.track__album}>
            <span className={styles.track__album_link}>{props.album}</span>
          </div>
          <div className={styles.track__time}>
            <svg className={styles.track__time_svg} alt="time">
              <use xlinkHref={`${Sprite}#icon-like`}></use>
            </svg>
            <span className={styles.track__time_text}>
              {props.duration_in_seconds}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlaylistItem;
