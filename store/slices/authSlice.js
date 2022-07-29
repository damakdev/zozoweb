import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register, login } from "../../services/api";

export const registerCustomer = createAsyncThunk(
  `customer/register`,
  async (body) => {
    console.log(body);
    try {
      const response = await register(body);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  }
);

export const loginCustomer = createAsyncThunk(
  `customer/login`,
  async (body) => {
    console.log(body);
    try {
      const response = await login(body);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
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
      console.log(action);
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

      console.log(action);
    });
  },
});

export const { loginSuccess, loginError, loading, logOutCustomer } =
  authSlice.actions;
export default authSlice.reducer;

// {
//     "message": "Account successfully created",
//     "account": {
//         "verified": false,
//         "id": 12,
//         "first_name": "Damilola",
//         "last_name": "Akinlade",
//         "email": "business@example.com",
//         "phone_number": "08161669919",
//         "account_type": "customer",
//         "updatedAt": "2022-07-28T08:54:13.904Z",
//         "createdAt": "2022-07-28T08:54:13.904Z",
//         "address": {
//             "description": null,
//             "id": 12,
//             "country": "nigeria",
//             "state": "Edo",
//             "street": "Ekhosodin, Benin",
//             "city": "Benin",
//             "zip_code": "300283",
//             "address_id": 12,
//             "updatedAt": "2022-07-28T08:54:13.999Z",
//             "createdAt": "2022-07-28T08:54:13.999Z"
//         },
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoiYnVzaW5lc3NAZXhhbXBsZS5jb20iLCJhY2NvdW50X3R5cGUiOiJjdXN0b21lciIsImlhdCI6MTY1ODk5ODQ1MywiZXhwIjoxNjU5MDA1NjUzfQ.ibqY0BtoNrAgwH1kyFxZrmZ2ue39QAjoug4yMbpYMWw"
//     },
//     "customer": {
//         "id": 11,
//         "account_id": 12,
//         "updatedAt": "2022-07-28T08:54:13.994Z",
//         "createdAt": "2022-07-28T08:54:13.994Z"
//     }
// }
