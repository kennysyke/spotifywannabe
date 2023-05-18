import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';
import { useLocation } from 'react-router-dom';
import PlaylistContent from './playlistContent';

import styles from '../css/center.module.css';

function Center() {
  const location = useLocation();
  const isPlaylistRoute = location.pathname.startsWith('/playlist/');
  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <DropDownComponent />
      {isPlaylistRoute ? <PlaylistContent /> : <Content />}
    </div>
  );
}

export default Center;
