import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';
import Header from './header';
import Bar from './bar';
import SideBar from './sideBar';
import styles from '../css/center.module.css';
import { useGetAllTracksQuery } from '../services/api';
import { useSelector } from 'react-redux';
function Center() {
  const { data: tracks, isLoading, isFetching } = useGetAllTracksQuery();

  let filteredTracks = tracks;

  const filteredGenre = useSelector((state) => state.filteredTracks.genre);
  console.log(filteredGenre);

  const filteredAuthor = useSelector((state) => state.filteredTracks.author);

  const filteredYears = useSelector((state) => state.filteredTracks.years);

  const sortByYear = (a, b) => {
    const yearA = new Date(a.release_date).getFullYear();
    const yearB = new Date(b.release_date).getFullYear();
    return yearA - yearB;
  };

  if (filteredGenre.length > 0) {
    filteredTracks = filteredTracks.filter((track) =>
      filteredGenre.includes(track.genre)
    );
  }

  if (filteredAuthor.length > 0) {
    filteredTracks = filteredTracks.filter((track) =>
      filteredAuthor.includes(track.author)
    );
  }

  if (filteredYears === 'newer') {
    filteredTracks = filteredTracks.sort(sortByYear);
  } else if (filteredYears === 'older') {
    filteredTracks = filteredTracks.sort((a, b) => sortByYear(b, a));
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.main__centerblock}>
          <Search />
          <h2 className={styles.centerblock__h2}>Треки</h2>
          <DropDownComponent tracks={tracks} />
          <Content
            tracks={filteredTracks}
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

export default Center;
