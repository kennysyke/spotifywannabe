import { createSlice } from '@reduxjs/toolkit';

const selectedSongSlice = createSlice({
  name: 'selectedSong',
  initialState: null,
  reducers: {
    selectSong: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectSong } = selectedSongSlice.actions;
export default selectedSongSlice.reducer;
