import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';
import Header from './header';
import Bar from './bar';
import SideBar from './sideBar';
import styles from '../css/center.module.css';
import { getUserID } from '../store/authSlice';
import { useGetAllTracksQuery } from '../services/api';
import { useSelector } from 'react-redux';

function FavPage() {
  const { data: tracks, isLoading, isFetching } = useGetAllTracksQuery();

  const userId = useSelector(getUserID);

  console.log(userId);

  const TRACKS = tracks.filter((track) =>
    track.stared_user.some((user) => user.id === userId)
  );
  console.log(tracks);
  console.log(TRACKS);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.main__centerblock}>
          <Search />
          <h2 className={styles.centerblock__h2}>Мой плейлист</h2>
          <DropDownComponent />
          <Content
            tracks={TRACKS}
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

export default FavPage;
