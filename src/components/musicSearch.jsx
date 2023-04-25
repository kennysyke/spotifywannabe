import React from 'react';
// import DropdownMenu from './dropdownMenu.js';
import DropDownComponent from './dropdownAll';

function MusicSearch() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <DropDownComponent />
    </div>
  );
}

export default MusicSearch;
