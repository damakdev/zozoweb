import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register, login } from "../../services/customer";

export const registerCustomer = createAsyncThunk(
  `customer/register`,
  async (body) => {
    try {
      const response = await register(body);
      return response;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const loginCustomer = createAsyncThunk(
  `customer/login`,
  async (body) => {
    try {
      const response = await login(body);
      return response;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

const initialState = {
  customer: {
    token: null,
    user: null,
    error: null,
    loading: false,
  },
  merchant: { token: null, user: null, error: null, loading: false },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutCustomer: (state) => {
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
      if (action.payload.status == 400) {
        return;
      }
      state.customer.user = action.payload.data?.account;
      state.customer.token = action.payload.data?.account.token;
    });
    builder.addCase(loginCustomer.pending, (state) => {
      state.customer.loading = true;
    });
    builder.addCase(loginCustomer.fulfilled, (state, action) => {
      state.customer.loading = false;
      if (action.payload.status == 400) {
        // state.customer.loading = false;
        return;
      }
      state.customer.user = action.payload.data.user;
      state.customer.token = action.payload.data.token;
    });
  },
});

export const { logOutCustomer } = authSlice.actions;
export default authSlice.reducer;
