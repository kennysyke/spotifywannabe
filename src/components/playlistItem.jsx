import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Sprite from '../img/icon/sprite.svg';

function PlaylistItem(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="playlist__item">
      {isLoading ? (
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <Skeleton width={51} height={51} />
            </div>
            <div className="track__title-text">
              <Skeleton width={370} />
            </div>
          </div>
          <div className="track__author">
            <Skeleton width={321} />
          </div>
          <div className="track__album">
            <Skeleton width={245} />
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <Skeleton width={14} height={12} />
            </svg>
            <Skeleton width={28} height={24} />
          </div>
        </div>
      ) : (
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref={`${Sprite}#icon-note`}></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href={props.trackLink}>
                <span className="track__title-span">{props.trackTitle}</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href={props.authorLink}>
              {props.authorName}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href={props.albumLink}>
              {props.albumName}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref={`${Sprite}#icon-like`}></use>
            </svg>
            <span className="track__time-text">{props.trackDuration}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlaylistItem;
