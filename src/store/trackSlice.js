import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trackId: null,
  source: null,
  favorite: false,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.trackId = action.payload.trackId || state.trackId;
      state.source = action.payload.source || state.source;
      state.favorite = action.payload.trackId || state.favorite;
    },
    clearTrack(state) {
      state.trackId = null;
      state.source = null;
      state.favorite = null;
    },
  },
});

export const { setTrack, clearTrack } = trackSlice.actions;
export default trackSlice.reducer;
