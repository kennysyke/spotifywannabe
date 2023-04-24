import React, { useState } from 'react';
import DropdownMenu from './dropdownMenu';

function DropDownComponent() {
  const artistItems = [
    'Artist 1',
    'Artist 2',
    'Стрелки',
    'Серебро',
    'Artist 3',
    'Artist 2',
    'Artist 3',
    'Artist 2',
    'Artist 3',
    'Artist 2',
    'Artist 3',
    'Artist 2',
    'Artist 3',
    'Artist 2',
    'Artist 3',
  ];
  const genreItems = ['Genre 1', 'Genre 2', 'Genre 3'];
  const yearItems = ['Более новые', 'Более старые'];

  const [openMenu, setOpenMenu] = useState(null);

  function handleMenuOpen(menuLabel) {
    setOpenMenu((prevOpenMenu) =>
      prevOpenMenu === menuLabel ? null : menuLabel
    );
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
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
