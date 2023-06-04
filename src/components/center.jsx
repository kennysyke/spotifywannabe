import React from 'react';
import Search from './search';
import Content from './content';
import DropDownComponent from './dropdownAll';
import { useLocation } from 'react-router-dom';
import PlaylistContent from './playlistContent';
// import {useDispatch} from 'react-redux'
// import { useAuth } from '../hooks/useAuth';
import styles from '../css/center.module.css';
import MyPlaylistContent from './myplaylistContent';

function Center() {
  const location = useLocation();
  const isPlaylistRoute = location.pathname.startsWith('/playlist/');
  const isFavourite = location.pathname.startsWith('/favourite');
  // const { isAuth } = useAuth(); //email for logout export from here
  // const dispatch = useDispatch();

  // const userLogged = localStorage.getItem('token');
  // console.log(userLogged);

  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>
        {isPlaylistRoute ? 'Плейлист' : isFavourite ? 'Мой плейлист' : 'Треки'}
      </h2>
      <DropDownComponent />
      {isPlaylistRoute ? (
        <PlaylistContent />
      ) : isFavourite ? (
        <MyPlaylistContent />
      ) : (
        <Content />
      )}
    </div>
  );
}

export default Center;
