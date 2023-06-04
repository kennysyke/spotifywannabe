import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: false,
    username: '',
    email: '',
    id: '',
    token: null,
  },
  reducers: {
    getUser: (state) => state,
    userLogin: (state, action) => {
      state.login = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    userLogout: (state) => {
      state.token = null;
      state.username = null;
      state.email = null;
    },
  },
});

export const { userLogin, userLogout, getUser } = authSlice.actions;
export default authSlice.reducer;
