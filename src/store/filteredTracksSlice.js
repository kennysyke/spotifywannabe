import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  years: '',
  author: [],
  genre: [],
  name: [],
};

const filteredTracksSlice = createSlice({
  name: 'filteredTracks',
  initialState,
  reducers: {
    setFilteredYears: (state, action) => {
      state.years = action.payload.years;
    },
    setSearchedTrack: (state, action) => {
      const name = action.payload.name;
      if (!state.name.includes(name)) {
        state.name.push(name);
        console.log(state);
        console.log(name);
      }
    },
    setFilteredGenre: (state, action) => {
      const genre = action.payload.genre;
      if (!state.genre.includes(genre)) {
        state.genre.push(genre);
        console.log(state);
      } else {
        state.genre = state.genre.filter((item) => item !== genre);
      }
    },
    setFilteredAuthor: (state, action) => {
      const author = action.payload.author;
      if (!state.author.includes(author)) {
        state.author.push(author);
        console.log(author);
      } else {
        state.author = state.author.filter((item) => item !== author);
      }
    },
  },
});

export const {
  setFilteredGenre,
  setFilteredAuthor,
  setFilteredYears,
  setSearchedTrack,
} = filteredTracksSlice.actions;

export default filteredTracksSlice.reducer;
