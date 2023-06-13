import { React, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import Sprite from '../img/icon/sprite.svg';
import { ThemeContext, themes } from '../dynamic/contexts/theme';
import styles from '../css/search.module.css';
import { setSearchedTrack } from '../store/filteredTracksSlice';

function Search({ tracks }) {
  console.log(tracks);
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  let filteredTracks = [];
  if (Array.isArray(tracks)) {
    filteredTracks = tracks.filter((track) =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const handleTrackClick = (track) => {
    console.log(track);
    dispatch(setSearchedTrack(track.name));
    console.log(track.name);
  };
  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use
          xlinkHref={`${Sprite}#icon-${
            theme === themes.dark ? 'search' : 'search-light'
          }`}
        ></use>
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul style={{ display: searchTerm ? 'block' : 'none' }}>
        {filteredTracks.map((track, index) => (
          <li key={index} onClick={() => handleTrackClick(track)}>
            {track.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
