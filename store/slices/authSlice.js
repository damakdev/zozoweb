import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginError: (state, action) => {
      state.error = action.payload.error;
    },
    loading: (state, action) => {
      state.loading = action.payload.loading;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { loginSuccess, loginError, loading, logOut } = authSlice.actions;
export default authSlice.reducer;
