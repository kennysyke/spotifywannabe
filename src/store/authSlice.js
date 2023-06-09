import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  login: false,
  id: null,
  access: null,
  refresh: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUser: (state) => state,
    userLogin: (state, { payload }) => {
      return {
        ...state,
        id: payload.id,
        login: true,
      };
    },
    userLogout: () => initialState,
    setRefresh: (state, { payload }) => {
      return {
        ...state,
        refresh: payload.refresh,
      };
    },
    setAccess: (state, { payload }) => {
      return {
        ...state,
        access: payload.access,
      };
    },
  },
});

export const { userLogin, userLogout, getUser, setRefresh, setAccess } =
  authSlice.actions;
export default authSlice.reducer;
