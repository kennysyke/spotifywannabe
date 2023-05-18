import React, { useContext } from 'react';
import SideBarPersonal from './sidebarPersonal';
import SidebarPlaylist from './sidebarPlaylist';
import { ThemeContext } from '../dynamic/contexts/theme';
// import { selections } from '../mock/selection';

// import playlist1 from '../img/playlist01.png';
// import playlist2 from '../img/playlist02.png';
// import playlist3 from '../img/playlist03.png';

import styles from '../css/sideBar.module.css';

// const playlists = [
//   {
//     url: '#',
//     image: playlist1,
//     alt: "day's playlist",
//   },
//   {
//     url: '#',
//     image: playlist2,
//     alt: "day's playlist",
//   },
//   {
//     url: '#',
//     image: playlist3,
//     alt: "day's playlist",
//   },
// ];

// console.log(playlists);

function SideBar({ user }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        user ? styles.main__sidebar : `${styles.main__sidebar} ${styles.hidden}`
      }
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <SideBarPersonal />
      <SidebarPlaylist />
    </div>
  );
}

export default SideBar;
