import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
	getCustomers,
	getMerchants,
	getSingleCustomer,
	getSingleMerchant,
	verifyUserAcct,
} from "../../../services/admin";

const initialState = {
	merchants: {
		isLoading: false,
		users: null,
	},

	customers: {
		isLoading: false,
		users: [],
	},

	customerDetails: {
		customerDetailsLoading: false,
		user: null,
	},

	merchantDetails: {
		merchantDetailsLoading: false,
		user: null,
	},
	verifyUser:{
		isLoading:false
	}
};

// CUSTOMERS
export const customerList = createAsyncThunk("users/customerList", async () => {
	return await getCustomers();
});

export const singleCustomer = createAsyncThunk(
	"users/getSingleCustomer",
	async (id) => {
		return await getSingleCustomer(id);
	}
);

export const verifyUser = createAsyncThunk("users/verifyUser", async (body) => {
	return await verifyUserAcct(body);
});

//MERCHANT
export const merchantList = createAsyncThunk("users/merchantList", async () => {
	
	return await getMerchants();
});

export const singleMerchant = createAsyncThunk(
	"users/getSingleMerchant",
	async (id) => {
		return await getSingleMerchant(id);
	}
);

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: {
		//CUSTOMERS
		[customerList.pending]: (state) => {
			state.isLoading = true;
		},
		[customerList.fulfilled]: (state, action) => {
			state.customers.isLoading = false;
			state.customers.users = action.payload.data.customer;
		},

		[singleCustomer.pending]: (state) => {
			state.customerDetails.customerDetailsLoading = true;
		},
		[singleCustomer.fulfilled]: (state, action) => {
			state.customerDetails.customerDetailsLoading= false;
			state.customerDetails.user = action.payload.data.customer;
		},

		//MERCHANTS
		[merchantList.pending]: (state) => {
			state.merchants.isLoading = true;
		},
		[merchantList.fulfilled]: (state, action) => {
			state.merchants.isLoading = false;
			state.merchants.users = action.payload.data.merchant;
		},

		[singleMerchant.pending]: (state) => {
			state.merchantDetails.merchantDetailsLoading = true;
		},
		[singleMerchant.fulfilled]: (state, action) => {
			state.merchantDetails.merchantDetailsLoading= false;
			state.merchantDetails.user = action.payload.data.merchant;
		},

		//VERIFY USER
		[verifyUser.pending]: (state)=>{
			state.verifyUser.isLoading = true
		},

		[verifyUser.fulfilled]: (state)=>{
			state.verifyUser.isLoading = false
			toast.success("User verified Successfully", {
				autoClose: 4000
			})
		}
	},
});

export default usersSlice.reducer;
