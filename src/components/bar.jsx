import React, { useState, useRef, useContext, useEffect } from 'react';
import TrackPlay from './trackPlay';
import Sprite from '../img/icon/sprite.svg';
import { ThemeContext, themes } from '../dynamic/contexts/theme';
import styles from '../css/bar.module.css';
import { useSelector } from 'react-redux';
// import { setSelectedSongIndex } from '../actions/actions';

function Bar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const selectedSong = useSelector((state) => state.selectedSong);
  const { theme } = useContext(ThemeContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (selectedSong) {
      audioRef.current.src = selectedSong.track_file;
      audioRef.current.play();
      setIsPlaying(true);
      console.log(selectedSong);
    }
  }, [selectedSong]);

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

  const handleClickProgress = (clickedPercentage) => {
    const audio = audioRef.current;
    const duration = audio.duration;
    console.log(duration);
    const newTime = (clickedPercentage / 100) * duration;
    console.log(newTime);
    audio.currentTime = newTime;
  };

  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    console.log(newVolume);
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
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
        <PlayerProgress progress={progress} onClick={handleClickProgress} />
        <div className={styles.bar__player_block}>
          <div className={`${styles.bar__player} player`}>
            <PlayerControls isPlaying={isPlaying} togglePlay={togglePlay} />
            <TrackPlay
              author={selectedSong ? selectedSong.author : ''}
              album={selectedSong ? selectedSong.album : ''}
              audioRef={audioRef}
              updateProgress={updateProgress}
            />
          </div>
          <Volume
            audio={audioRef}
            handleVolumeChange={handleVolumeChange}
            volume={volume}
          />
        </div>
      </div>
    </div>
  );
}

function PlayerProgress({ progress, onClick }) {
  const progressBarRef = useRef(null);

  const handleClick = (event) => {
    const progressBar = progressBarRef.current;
    const boundingRect = progressBar.getBoundingClientRect();
    const clickedX = event.clientX - boundingRect.left;
    const totalWidth = boundingRect.width;
    const clickedPercentage = (clickedX / totalWidth) * 100;

    onClick(clickedPercentage);
  };

  return (
    <div
      className={styles.bar__player_progress}
      style={{ width: `${progress}%` }}
      onClick={handleClick}
      ref={progressBarRef}
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

function Volume({ handleVolumeChange, volume }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.bar__volume_block} volume`}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg className={styles.volume__svg} alt="volume">
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
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Bar;
