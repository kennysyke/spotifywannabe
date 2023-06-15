export const setSelectedSongIndex = (index) => {
  return {
    type: 'SET_SELECTED_SONG_INDEX',
    payload: index,
  };
};

export const selectSong = (selectedIndex) => {
  return {
    type: 'SELECT_SONG',
    payload: selectedIndex,
  };
};
