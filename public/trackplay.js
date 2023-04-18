import React from 'react';

const TrackPlayImage = () => {
  return (
    <div className="track-play__image">
      <svg className="track-play__svg" alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
  );
};

const TrackPlayAuthor = ({ author }) => {
  return (
    <div className="track-play__author">
      <a className="track-play__author-link" href="http://">
        {author}
      </a>
    </div>
  );
};

const TrackPlayAlbum = ({ album }) => {
  return (
    <div className="track-play__album">
      <a className="track-play__album-link" href="http://">
        {album}
      </a>
    </div>
  );
};

const TrackPlay = ({ author, album }) => {
  return (
    <div className="track-play">
      <div className="track-play__contain">
        <TrackPlayImage />
        <TrackPlayAuthor author={author} />
        <TrackPlayAlbum album={album} />
      </div>

      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrackPlay;
