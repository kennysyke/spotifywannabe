import React from 'react';
import Sprite from './img/icon/sprite.svg';
import PlaylistItem from './playlistItem';

function Content() {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref={`${Sprite}#icon-watch`}></use>
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
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
          trackTitle="My Favorite Song"
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
