import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    email: '',
    id: '',
    token: null,
  },
  reducers: {
    getUser: (state) => state,
    userLogin: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    userLogout: (state) => {
      state.token = null;
      state.username = null;
      state.email = null;
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
