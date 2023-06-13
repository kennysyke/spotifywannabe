import React, { useState, useRef, useContext, useEffect } from 'react';
import TrackPlay from './trackPlay';
import Sprite from '../img/icon/sprite.svg';
import { ThemeContext, themes } from '../dynamic/contexts/theme';
import styles from '../css/bar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllTracksQuery } from '../services/api';
import { selectSong } from '../store/selectSongSlice';

function Bar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [isRepeatOn, setIsRepeatOn] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const selectedSong = useSelector((state) => state.selectedSong);
  const audioRef = useRef(null);

  const { data: tracks } = useGetAllTracksQuery();

  useEffect(() => {
    if (selectedSong) {
      audioRef.current.src = selectedSong.track_file;
      audioRef.current.play();
      setIsPlaying(true);
      console.log(selectedSong);
    }
  }, [selectedSong]);

  const updateSelectedSong = (newTrack) => {
    dispatch(selectSong(newTrack));
  };

  const playNextSong = () => {
    if (selectedSong) {
      const selectedSongIndex = tracks.findIndex(
        (song) => song.id === selectedSong.id
      );
      let nextSongIndex;
      if (isShuffleOn) {
        nextSongIndex = Math.floor(Math.random() * tracks.length);
      } else if (isRepeatOn) {
        nextSongIndex = selectedSongIndex;
      } else {
        nextSongIndex = selectedSongIndex + 1;
      }
      if (nextSongIndex < tracks.length) {
        const nextSong = tracks[nextSongIndex];
        console.log(nextSong);
        audioRef.current.src = nextSong.track_file;
        console.log(audioRef.current.src);
        audioRef.current.play();
        setIsPlaying(true);
        updateSelectedSong(nextSong);
      } else {
        console.log('error');
      }
    }
  };

  const playPreviousSong = () => {
    if (selectedSong) {
      const selectedSongIndex = tracks.findIndex(
        (song) => song.id === selectedSong.id
      );
      const previousSongIndex = selectedSongIndex - 1;
      if (previousSongIndex >= 0) {
        const previousSong = tracks[previousSongIndex];
        audioRef.current.src = previousSong.track_file;
        audioRef.current.play();
        setIsPlaying(true);
        updateSelectedSong(previousSong);
      } else {
        console.log('error');
      }
    }
  };

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
    <div
      className={selectedSong ? styles.bar : styles.hidden}
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <div className={styles.bar__content}>
        <PlayerProgress progress={progress} onClick={handleClickProgress} />
        <div className={styles.bar__player_block}>
          <div className={`${styles.bar__player} player`}>
            <PlayerControls
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              playNextSong={playNextSong}
              playPreviousSong={playPreviousSong}
              isShuffleOn={isShuffleOn}
              setIsShuffleOn={setIsShuffleOn}
              isRepeatOn={isRepeatOn}
              setIsRepeatOn={setIsRepeatOn}
            />
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

function PlayerControls({
  isPlaying,
  togglePlay,
  playNextSong,
  playPreviousSong,
  isShuffleOn,
  setIsShuffleOn,
  isRepeatOn,
  setIsRepeatOn,
}) {
  return (
    <div className={styles.player__controls}>
      <PlayerBtnPrev playPreviousSong={playPreviousSong} />
      <PlayerBtnPlay isPlaying={isPlaying} togglePlay={togglePlay} />
      <PlayerBtnNext playNextSong={playNextSong} />
      <PlayerBtnRepeat isRepeatOn={isRepeatOn} setIsRepeatOn={setIsRepeatOn} />
      <PlayerBtnShuffle
        isShuffleOn={isShuffleOn}
        setIsShuffleOn={setIsShuffleOn}
      />
    </div>
  );
}

function PlayerBtnPrev({ playPreviousSong }) {
  return (
    <div className={styles.player__btn_prev} onClick={playPreviousSong}>
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

function PlayerBtnNext({ playNextSong }) {
  return (
    <div className={styles.player__btn_next} onClick={playNextSong}>
      <svg className={styles.player__btn_next_svg} alt="next">
        <use xlinkHref={`${Sprite}#icon-next`}></use>
      </svg>
    </div>
  );
}

function PlayerBtnRepeat({ isRepeatOn, setIsRepeatOn }) {
  const handleRepeatClick = () => {
    setIsRepeatOn(!isRepeatOn);
  };
  return (
    <div
      className={`${styles.player__btn_repeat} ${styles._btn_icon}`}
      onClick={handleRepeatClick}
    >
      <svg className={styles.player__btn_repeat_svg} alt="repeat">
        <use xlinkHref={`${Sprite}#icon-repeat`}></use>
      </svg>
    </div>
  );
}

function PlayerBtnShuffle({ isShuffleOn, setIsShuffleOn }) {
  const handleShuffleClick = () => {
    setIsShuffleOn(!isShuffleOn);
  };
  return (
    <div
      className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}
      onClick={handleShuffleClick}
    >
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
