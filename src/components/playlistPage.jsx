import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';
import Header from './header';
import Bar from './bar';
import SideBar from './sideBar';
import { useParams } from 'react-router-dom';
import styles from '../css/center.module.css';

import { useGetSelectionByIdQuery } from '../services/api';

function PlaylistPage() {
  const params = useParams();

  const id = Number(params.id);
  console.log(id);

  const { data, isLoading, isFetching } = useGetSelectionByIdQuery(id);

  const tracks = data?.items; // Access items only if data exists
  console.log(tracks);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.main__centerblock}>
          <Search />
          <h2 className={styles.centerblock__h2}>Плейлист</h2>
          <DropDownComponent />
          <Content
            tracks={tracks}
            isLoading={isLoading}
            isFetching={isFetching}
          />
        </div>
        <SideBar />
      </main>
      {<Bar />}
      <footer className="footer"></footer>
    </div>
  );
}

export default PlaylistPage;
