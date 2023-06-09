import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { tracksApi } from '../services/tracksApi';
import authReducer from './authSlice';
import selectedSongReducer from './selectSongSlice';
import filteredTracksReducer from './filteredTracksSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    auth: authReducer,
    selectedSong: selectedSongReducer,
    filteredTracks: filteredTracksReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware, tracksApi.middleware]),
});
