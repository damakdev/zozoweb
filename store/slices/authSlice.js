import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register } from "../../services/api";

// const zozo = JSON.parse(localStorage.getItem("zozo"));

export const registerCustomer = createAsyncThunk(
  `customer/register`,
  async (body) => {
      const response = await register(body);
      console.log(response);
      return response;
    try {
    } 
    catch (error) {
      return error;
    }
  }
);

const initialState = {
  customer: { token: null, user: null, error: null, loading: false },
  merchant: { token: null, user: null, error: null, loading: false },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.customer.token = action.payload.token;
      state.customer.user = action.payload.user;
    },
    loginError: (state, action) => {
      state.customer.error = action.payload.error;
    },
    loading: (state, action) => {
      state.customer.loading = action.payload.loading;
    },
    logOut: (state) => {
      state.customer.token = null;
      state.customer.user = null;
      state.customer.error = null;
      state.customer.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerCustomer.pending, (state) => {
      state.customer.loading = true;
    });
    builder.addCase(registerCustomer.fulfilled, (state, action) => {
      state.customer.loading = false;
      state.customer.user = action.payload.data;
    });
  },
});

export const { loginSuccess, loginError, loading, logOut } = authSlice.actions;
export default authSlice.reducer;
