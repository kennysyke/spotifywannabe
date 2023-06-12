import React, { useState } from 'react';
import DropdownMenu from './dropdownMenu';

import styles from '../css/dropdownAll.module.css';

function DropDownComponent({ tracks }) {
  const artistItemsSet = new Set(
    tracks ? tracks.map((track) => track.author) : []
  );
  const artistItems = [...artistItemsSet];

  const genreItemsSet = new Set(
    tracks ? tracks.map((track) => track.genre) : []
  );
  const genreItems = [...genreItemsSet];

  const yearItems = ['Более новые', 'Более старые'];

  const [openMenu, setOpenMenu] = useState(null);

  function handleMenuOpen(menuLabel) {
    setOpenMenu((prevOpenMenu) =>
      prevOpenMenu === menuLabel ? null : menuLabel
    );
  }

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      <DropdownMenu
        label="исполнителю"
        items={artistItems}
        open={openMenu === 'исполнителю'}
        onOpen={handleMenuOpen}
      />
      <DropdownMenu
        label="году выпуска"
        items={yearItems}
        open={openMenu === 'году выпуска'}
        onOpen={handleMenuOpen}
      />
      <DropdownMenu
        label="жанру"
        items={genreItems}
        open={openMenu === 'жанру'}
        onOpen={handleMenuOpen}
      />
    </div>
  );
}

export default DropDownComponent;
