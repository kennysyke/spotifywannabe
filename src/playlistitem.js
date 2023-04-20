import React from 'react';

{
  //   <PlaylistItem
  //   trackTitle="My Favorite Song"
  //   trackLink="http://example.com/my-favorite-song"
  //   authorName="The Best Artist"
  //   authorLink="http://example.com/the-best-artist"
  //   albumName="The Greatest Hits"
  //   albumLink="http://example.com/the-greatest-hits"
  //   trackDuration="3:30"
  // />
}

function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
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
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{props.trackDuration}</span>
        </div>
      </div>
    </div>
  );
}

export default PlaylistItem;
