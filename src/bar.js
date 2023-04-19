import React from 'react';
import TrackPlay from './trackplay';

function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <PlayerProgress />
        <div className="bar__player-block">
          <div className="bar__player player">
            <PlayerControls />
            <TrackPlay />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
}

function PlayerProgress() {
  return <div className="bar__player-progress"></div>;
}

function PlayerControls() {
  return (
    <div className="player__controls">
      <PlayerBtnPrev />
      <PlayerBtnPlay />
      <PlayerBtnNext />
      <PlayerBtnIcon />
    </div>
  );
}

function PlayerBtnPrev() {
  return (
    <div className="player__btn-prev">
      <svg className="player__btn-prev-svg" alt="prev">
        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
      </svg>
    </div>
  );
}

function PlayerBtnPlay() {
  return (
    <div className="player__btn-play _btn">
      <svg className="player__btn-play-svg" alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
      </svg>
    </div>
  );
}

function PlayerBtnNext() {
  return (
    <div className="player__btn-next">
      <svg className="player__btn-next-svg" alt="next">
        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
      </svg>
    </div>
  );
}

function PlayerBtnIcon() {
  return (
    <div className="player__btn-icon">
      <div className="player__btn-repeat _btn-icon">
        <svg className="player__btn-repeat-svg" alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    </div>
  );
}

function Volume() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <svg className="volume__svg" alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className="volume__progress _btn">
          <input
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}

export default Bar;
