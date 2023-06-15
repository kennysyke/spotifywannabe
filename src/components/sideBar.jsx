import React from 'react';
import SideBarPersonal from './sidebarPersonal';
import SidebarPlaylist from './sidebarPlaylist';

import styles from '../css/sideBar.module.css';

function SideBar() {
  return (
    <div className={styles.main__sidebar}>
      <SideBarPersonal />
      <SidebarPlaylist />
    </div>
  );
}

export default SideBar;
