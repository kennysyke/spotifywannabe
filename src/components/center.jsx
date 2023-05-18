import React, { useContext } from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';
import { useLocation } from 'react-router-dom';
import PlaylistContent from './playlistContent';
import { ThemeContext } from '../dynamic/contexts/theme';

import styles from '../css/center.module.css';

function Center() {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const isPlaylistRoute = location.pathname.startsWith('/playlist/');
  return (
    <div
      className={styles.main__centerblock}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        borderСolor: theme.color,
      }}
    >
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <DropDownComponent />
      {isPlaylistRoute ? <PlaylistContent /> : <Content />}
    </div>
  );
}

export default Center;
