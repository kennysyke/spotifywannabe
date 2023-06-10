import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';

import styles from '../css/center.module.css';

import { useGetAllTracksQuery } from '../services/api';

function FavPage() {
  const { data: tracks, isLoading, isFetching } = useGetAllTracksQuery();

  const userId = Number(localStorage.getItem('userID'));
  const TRACKS = tracks.filter((track) =>
    track.stared_user.some((user) => user.id === userId)
  );
  console.log(tracks);
  console.log(TRACKS);

  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Мой плейлист</h2>
      <DropDownComponent />
      <Content tracks={TRACKS} isLoading={isLoading} isFetching={isFetching} />
    </div>
  );
}

export default FavPage;
