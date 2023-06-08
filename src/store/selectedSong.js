const initialState = {
  selectedSongIndex: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_SONG_INDEX':
      return {
        ...state,
        selectedSongIndex: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
