import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  register as registerCustomer,
  login as loginCustomer,
} from "../../services/customer";
import {
  register as registerMerchant,
  login as loginMerchant,
} from "../../services/merchant";
import { toast } from "react-toastify";
import { logAdmin } from "../../services/admin";

export const _registerCustomer = createAsyncThunk(
  `customer/register`,
  async (body) => {
    const response = await registerCustomer(body);
    console.log(response);
    return response;
  }
);

export const _loginCustomer = createAsyncThunk(
  `customer/login`,
  async (body) => {
    const response = await loginCustomer(body);
    console.log(response);
    return response;
  }
);

export const _registerMerchant = createAsyncThunk(
  `merchant/register`,
  async (body) => {
    const response = await registerMerchant(body);
    console.log(response);
    return response;
  }
);

export const _loginMerchant = createAsyncThunk(
  `merchant/login`,
  async (body) => {
    const response = await loginMerchant(body);
    return response;
  }
);

//ADMIN LOGIN
export const loginAdmin = createAsyncThunk(`admin/login`, async (body) => {
  return await logAdmin(body);
});

const initialState = {
  customer: {
    token: null,
    user: null,
    error: null,
    loading: false,
  },
  merchant: { token: null, user: null, error: null, loading: false },
  admin: { token: null, user: null, error: null, loading: false },
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
    logOutMerchant: (state) => {
      state.merchant.token = null;
      state.merchant.user = null;
      state.merchant.error = null;
      state.merchant.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(_registerCustomer.pending, (state) => {
      state.customer.loading = true;
    });
    builder.addCase(_registerCustomer.rejected, (state) => {
      state.customer.loading = false;
    });
    builder.addCase(_registerCustomer.fulfilled, (state, action) => {
      state.customer.loading = false;
      console.log(action);
      if (!action.payload) {
        return;
      }
      state.customer.user = action.payload.data?.account;
      state.customer.token = action.payload.data?.account.token;
    });
    builder.addCase(_loginCustomer.pending, (state) => {
      state.customer.loading = true;
    });
    builder.addCase(_loginCustomer.rejected, (state) => {
      state.customer.loading = false;
    });
    builder.addCase(_loginCustomer.fulfilled, (state, action) => {
      state.customer.loading = false;
      console.log(action);
      if (!action.payload) {
        console.log("no data");
        return;
      }
      state.customer.user = action.payload.data.user;
      state.customer.token = action.payload.data.token;
    });

    builder.addCase(_registerMerchant.pending, (state) => {
      state.merchant.loading = true;
    });
    builder.addCase(_registerMerchant.rejected, (state) => {
      state.merchant.loading = false;
    });
    builder.addCase(_registerMerchant.fulfilled, (state, action) => {
      state.merchant.loading = false;
      if (!action.payload) {
        return;
      }
      state.merchant.user = {
        ...action.payload.data?.account,
        ...action.payload.data?.merchant,
      };
      state.merchant.token = action.payload.data?.account.token;
    });
    builder.addCase(_loginMerchant.pending, (state) => {
      state.merchant.loading = true;
    });
    builder.addCase(_loginMerchant.rejected, (state) => {
      state.merchant.loading = false;
    });
    builder.addCase(_loginMerchant.fulfilled, (state, action) => {
      state.merchant.loading = false;
      if (!action.payload.data) {
        return;
      }
      if (action.payload.data?.user.account_type !== "merchant") {
        toast.error(
          "This account is not a merchant. Login with a merchant account"
        );
        return;
      }
      state.merchant.user = action.payload.data.user;
      state.merchant.token = action.payload.data.token;
    });
    // ADMIN LOGIN
    builder.addCase(loginAdmin.pending, (state) => {
      state.admin.loading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      state.admin.loading = false;
      if (action.payload.status == 400) {
        // state.customer.loading = false;
        return;
      }
      state.admin.user = action.payload.data.user;
      state.admin.token = action.payload.data.token;
    });
  },
});

export const { logOutCustomer, logOutMerchant } = authSlice.actions;
export default authSlice.reducer;
