import { createSlice } from '@reduxjs/toolkit';

const currentPlaylistSlice = createSlice({
  name: 'currentPlaylist',
  initialState: null,
  reducers: {
    currentPlaylist: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { currentPlaylist } = currentPlaylistSlice.actions;
export default currentPlaylistSlice.reducer;
