import React, { useState, useRef, useContext } from 'react';
import TrackPlay from './trackPlay';
import Sprite from '../img/icon/sprite.svg';
import { ThemeContext, themes } from '../dynamic/contexts/theme';
import styles from '../css/bar.module.css';

function Bar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const { theme } = useContext(ThemeContext);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    setProgress(progressPercentage);
  };

  const handleProgressClick = (event) => {
    const progressBar = event.target;
    const boundingRect = progressBar.getBoundingClientRect();
    const clickedX = event.clientX - boundingRect.left;
    const progressBarWidth = boundingRect.width;
    const clickedPercentage = (clickedX / progressBarWidth) * 100;

    const audio = audioRef.current;
    const newTime = (audio.duration / 100) * clickedPercentage;
    audio.currentTime = newTime;

    setProgress(clickedPercentage);
  };

  return (
    // <>
    //   <audio controls ref={audioRef}>
    //     <source src="../../public/audio/song.mp3" type="audio/mpeg" />
    //   </audio>

    <div
      className={styles.bar}
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <div className={styles.bar__content}>
        <PlayerProgress progress={progress} onClick={handleProgressClick} />
        <div className={styles.bar__player_block}>
          <div className={`${styles.bar__player} player`}>
            <PlayerControls isPlaying={isPlaying} togglePlay={togglePlay} />
            <TrackPlay
              author="Linkin Park"
              album="Meteora"
              audioRef={audioRef}
              updateProgress={updateProgress}
            />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
}

function PlayerProgress({ progress }) {
  return (
    <div
      className={styles.bar__player_progress}
      style={{ width: `${progress}%` }}
    ></div>
  );
}

function PlayerControls({ isPlaying, togglePlay }) {
  return (
    <div className={styles.player__controls}>
      <PlayerBtnPrev />
      <PlayerBtnPlay isPlaying={isPlaying} togglePlay={togglePlay} />
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

function PlayerBtnPlay({ isPlaying, togglePlay }) {
  return (
    <div
      className={`${styles.player__btn_play} ${styles._btn}`}
      onClick={togglePlay}
    >
      <svg className={styles.player__btn_play_svg} alt="play">
        <use xlinkHref={`${Sprite}#icon-${isPlaying ? 'pause' : 'play'}`}></use>
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
  // const [volume, setVolume] = useState(1);
  // const [muted, setMuted] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.bar__volume_block} volume`}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg
            className={styles.volume__svg}
            // onClick={() => setMuted((m) => !m)}
            alt="volume"
          >
            <use
              xlinkHref={`${Sprite}#icon-${
                theme === themes.dark ? 'volume' : 'volume-light'
              }`}
            />
          </svg>
        </div>
        <div className={`${styles.volume__progress} ${styles._btn}`}>
          <input
            className={`${styles.volume__progress_line} ${styles.slider_progress} ${styles._btn}`}
            style={{
              backgroundColor: theme.volumeback,
              color: theme.volumecolor,
            }}
            type="range"
            name="range"
            // value={volume}
            // onChange={(event) => {
            //   setVolume(event.target.valueAsNumber);
            // }}
          />
        </div>
      </div>
    </div>
  );
}

export default Bar;
