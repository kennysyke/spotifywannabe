import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    email: '',
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    userLogin: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    userLogout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
