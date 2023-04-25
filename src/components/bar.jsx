import React from 'react';
import TrackPlay from './trackPlay';
import Sprite from '../img/icon/sprite.svg';

import styles from '../css/bar.module.css';

function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <PlayerProgress />
        <div className={styles.bar__player_block}>
          <div className={`${styles.bar__player} player`}>
            <PlayerControls />
            <TrackPlay author="Linkin Park" album="Meteora" />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
}

function PlayerProgress() {
  return <div className={styles.bar__player_progress}></div>;
}

function PlayerControls() {
  return (
    <div className={styles.player__controls}>
      <PlayerBtnPrev />
      <PlayerBtnPlay />
      <PlayerBtnNext />
      <PlayerBtnRepeat />
      <PlayerBtnShuffle />
    </div>
  );
}

function PlayerBtnPrev() {
  return (
    <div className={styles.player__btn_prev}>
      <svg className={styles.player__btn_prev_svg} alt="prev">
        <use xlinkHref={`${Sprite}#icon-prev`}></use>
      </svg>
    </div>
  );
}

function PlayerBtnPlay() {
  return (
    <div className={`${styles.player__btn_play} ${styles._btn}`}>
      <svg className={styles.player__btn_play_svg} alt="play">
        <use xlinkHref={`${Sprite}#icon-play`}></use>
      </svg>
    </div>
  );
}

function PlayerBtnNext() {
  return (
    <div className={styles.player__btn_next}>
      <svg className={styles.player__btn_next_svg} alt="next">
        <use xlinkHref={`${Sprite}#icon-next`}></use>
      </svg>
    </div>
  );
}

function PlayerBtnRepeat() {
  return (
    <div className={`${styles.player__btn_repeat} ${styles._btn_icon}`}>
      <svg className={styles.player__btn_repeat_svg} alt="repeat">
        <use xlinkHref={`${Sprite}#icon-repeat`}></use>
      </svg>
    </div>
  );
}

function PlayerBtnShuffle() {
  return (
    <div className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}>
      <svg className={styles.player__btn_shuffle_svg} alt="shuffle">
        <use xlinkHref={`${Sprite}#icon-shuffle`}></use>
      </svg>
    </div>
  );
}

function Volume() {
  return (
    <div className={`${styles.bar__volume_block} volume`}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg className={styles.volume__svg} alt="volume">
            <use xlinkHref={`${Sprite}#icon-volume`} />
          </svg>
        </div>
        <div className={`${styles.volume__progress} ${styles._btn}`}>
          <input
            className={`${styles.volume__progress_line} ${styles._btn}`}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}

export default Bar;
