import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  years: [],
  author: [],
  genre: [],
};

const filteredTracksSlice = createSlice({
  name: 'filteredTracks',
  initialState,
  reducers: {
    setFilteredGenre: (state, action) => {
      const genre = action.payload.genre;
      if (!state.genre.includes(genre)) {
        state.genre.push(genre);
        console.log(state);
      }
    },
    setFilteredAuthor: (state, action) => {
      const author = action.payload.author;
      if (!state.author.includes(author)) {
        state.author.push(author);
      }
    },
    setFilteredYears: (state, action) => {
      state.years = action.payload.years;
    },
    removeFilteredGenre: (state, action) => {
      const genre = action.payload.genre;
      state.genre = state.genre.filter((item) => item !== genre);
    },
    removeFilteredAuthor: (state, action) => {
      const author = action.payload.author;
      state.author = state.author.filter((item) => item !== author);
    },
    removeFilteredYears: (state) => {
      state.years = [];
    },
  },
});

export const {
  setFilteredGenre,
  setFilteredAuthor,
  setFilteredYears,
  removeFilteredGenre,
  removeFilteredAuthor,
  removeFilteredYears,
} = filteredTracksSlice.actions;

export default filteredTracksSlice.reducer;
