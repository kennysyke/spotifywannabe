import React, { useState, useEffect } from 'react';
import Sprite from '../img/icon/sprite.svg';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TrackPlayImage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="track-play__image">
      {isLoading ? (
        <svg className="track-play__svg" alt="music">
          <Skeleton width={18} height={17} />
        </svg>
      ) : (
        <svg className="track-play__svg" alt="music">
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
    <div className="track-play__author">
      {isLoading ? (
        <Skeleton width={49} />
      ) : (
        <a className="track-play__author-link" href="http://">
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
    <div className="track-play__album">
      {isLoading ? (
        <Skeleton width={49} />
      ) : (
        <a className="track-play__album-link" href="http://">
          {album}
        </a>
      )}
    </div>
  );
};

const TrackPlay = ({ author, album }) => {
  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <TrackPlayImage />
        <TrackPlayAuthor author={author} />
        <TrackPlayAlbum album={album} />
      </div>

      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref={`${Sprite}#icon-like`}></use>
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref={`${Sprite}#icon-dislike`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrackPlay;
