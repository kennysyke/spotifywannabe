import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';

import styles from '../css/center.module.css';

import { useGetFavTracksQuery } from '../services/api';

function FavPage() {
  const { data: tracks, isLoading, isFetching } = useGetFavTracksQuery();

  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Мой плейлист</h2>
      <DropDownComponent />
      <Content tracks={tracks} isLoading={isLoading} isFetching={isFetching} />
    </div>
  );
}

export default FavPage;
