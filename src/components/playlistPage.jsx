import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';
import { useParams } from 'react-router-dom';

import styles from '../css/center.module.css';

import { useGetSelectionByIdQuery } from '../services/api';

function PlaylistPage() {
  const params = useParams();

  const id = Number(params.id);
  console.log(id);

  const {
    data: { items: tracks },
    isLoading,
    isFetching,
  } = useGetSelectionByIdQuery(id);

  console.log(tracks);

  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Плейлист</h2>
      <DropDownComponent />
      <Content tracks={tracks} isLoading={isLoading} isFetching={isFetching} />
    </div>
  );
}

export default PlaylistPage;
