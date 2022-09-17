import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
	getAllEventsList,
	adminSingleEvent,
	startBidEvent,
	stopBidEvent,
	cancelBidEvent,
	createCategory,
	approveBid,
	getAllApprovedEventsList,
} from "../../../services/admin";

const initialState = {
	allEvents: {
		isLoading: true,
		allEvent: null,
	},

	singleEvent: {
		singleEventLoading: true,
		event: null,
	},

	approveBid:{
		isLoading:false
	}
};

export const _createCategory = createAsyncThunk(
	"events/_createCategory",
	async (body) => {
		return await createCategory(body);
	}
);
export const getAllApprovedEvents = createAsyncThunk(
	"events/getAllEvents",
	async () => {
		return await getAllApprovedEventsList();
	}
);

export const getAllEvents = createAsyncThunk(
	"events/getAllEvents",
	async () => {
		return await getAllEventsList();
	}
);

export const getSingleEvent = createAsyncThunk(
	"events/getSingleEvent",
	async (id) => {
		return adminSingleEvent(id);
	}
);

export const startBid = createAsyncThunk("events/startBid", async (id) => {
	return startBidEvent(id);
});

export const stopBid = createAsyncThunk("events/stopBidEvent", async (id) => {
	return await stopBidEvent(id);
});

export const cancelBid = createAsyncThunk("events/stopBidEvent", async (id) => {
	return await cancelBidEvent(id);
});

export const _approveBid = createAsyncThunk("events/approveBid", async (id) => {
	return await approveBid(id);
});

const adminEventSlice = createSlice({
	name: "events",
	initialState,
	reducers: {},
	extraReducers: {
		[getAllEvents.pending]: (state, action) => {
			state.allEvents.isLoading = true;
		},
		[getAllEvents.fulfilled]: (state, action) => {
			state.allEvents.isLoading = false;
			state.allEvents.allEvent = action.payload.data.bidding_event.sort((a,b)=>b.id - a.id).map((el, index)=>({...el, newIndex : ++index}));;
		},

		[getSingleEvent.pending]: (state) => {
			state.singleEvent.singleEventLoading = true;
		},
		[getSingleEvent.fulfilled]: (state, { payload }) => {
			state.singleEvent.event = payload.data.bidding_event;
			state.singleEvent.singleEventLoading = false;
		},

		[startBid.fulfilled]: () => {
			toast.success("Bid started successfully", {
				autoClose: 4000,
			});
		},

		[startBid.rejected]: () => {
			toast.error("Unable to start bid", {
				autoClose: 4000,
			});
		},

		[stopBid.fulfilled]: () => {
			toast.success("Bid stopped successfully", {
				autoClose: 4000,
			});
		},

		[stopBid.rejected]: () => {
			toast.error("Unable to stop bid", {
				autoClose: 4000,
			});
		},

		[cancelBid.fulfilled]: () => {
			toast.success("Bid cancelled successfully", {
				autoClose: 4000,
			});
		},

		[cancelBid.rejected]: () => {
			toast.error("Unable to cancel bid", {
				autoClose: 4000,
			});
		},
		[_createCategory.fulfilled]: () => {
			toast.success("Category Created Successfully", {
				autoClose: 4000,
			});
		},

		[_approveBid.pending]: (state) => {
			state.approveBid.isLoading = true;
		},

		[_approveBid.fulfilled]: (state) => {
			state.approveBid.isLoading = false;
			toast.success("Bid approved Successfully", {
				autoClose: 4000,
			});
		},

		[_approveBid.rejected]: () => {
			toast.error("Unable to approve bid", {
				autoClose: 4000,
			});
		},
	},
});

export default adminEventSlice.reducer;
