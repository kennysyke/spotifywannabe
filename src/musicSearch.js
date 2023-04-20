import React from 'react';
import ArtistDropdown from './filterByArtist';

function MusicSearch() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <ArtistDropdown />
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  );
}

export default MusicSearch;
