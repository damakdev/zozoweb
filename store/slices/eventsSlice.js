import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getApprovedBidEvents,
  getWonBidEvents,
  getBidEventByStatus,
  getAllCustomerEvents,
} from "../../services/customer";

export const _getCompletedEvents = createAsyncThunk(
  `events/getAllCompletedEvents`,
  async () => {
    try {
      const response = await getBidEventByStatus({ status: "completed" });
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getOngoingEvents = createAsyncThunk(
  `events/getAllOngoingEvents`,
  async () => {
    try {
      const response = await getBidEventByStatus({ status: "ongoing" });
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getUpcomingEvents = createAsyncThunk(
  `events/getAllUpcomingEvents`,
  async () => {
    try {
      const response = await getBidEventByStatus({ status: "upcoming" });
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getApprovedEvents = createAsyncThunk(
  `events/getApprovedEvents`,
  async (body) => {
    try {
      const response = await getApprovedBidEvents(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getWonBidEvents = createAsyncThunk(
  `events/getWonBidEvents`,
  async (body) => {
    try {
      const response = await getWonBidEvents(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getCustomerEvents = createAsyncThunk(
  `events/getAllCustomerEvents`,
  async (id) => {
    try {
      const response = await getAllCustomerEvents(id);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

const initialState = {
  approved: {
    events: null,
    loading: false,
    error: false,
  },
  won: {
    events: null,
    loading: false,
    error: false,
  },
  customer: {
    events: null,
    loading: false,
    error: false,
  },
  ongoing: {
    events: null,
    loading: false,
    error: false,
  },
  upcoming: {
    events: null,
    loading: false,
    error: false,
  },
  completed: {
    events: null,
    loading: false,
    error: false,
  },
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(_getApprovedEvents.pending, (state) => {
        state.approved.loading = true;
      })
      .addCase(_getApprovedEvents.fulfilled, (state, action) => {
        state.approved.loading = false;
        if (action.payload) {
          state.approved.events = action.payload.data.bidding_event;
          return;
        }
        state.approved.error = true;
      })
      .addCase(_getApprovedEvents.rejected, (state) => {
        state.approved.error = true;
      });

    //ALL COMPLETED BIDS
    builder
      .addCase(_getCompletedEvents.pending, (state) => {
        state.completed.loading = true;
      })
      .addCase(_getCompletedEvents.fulfilled, (state, action) => {
        state.completed.loading = false;
        if (action.payload) {
          state.completed.events = action.payload.data.bidding_event;
          return;
        }
        state.completed.error = true;
      })
      .addCase(_getCompletedEvents.rejected, (state) => {
        state.completed.error = true;
      });

    //ALL ONGOING BIDS
    builder
      .addCase(_getOngoingEvents.pending, (state) => {
        state.ongoing.loading = true;
      })
      .addCase(_getOngoingEvents.fulfilled, (state, action) => {
        state.ongoing.loading = false;
        if (action.payload) {
          state.ongoing.events = action.payload.data.bidding_event;
          return;
        }
        state.ongoing.error = true;
      })
      .addCase(_getOngoingEvents.rejected, (state) => {
        state.ongoing.error = true;
      });

    //ALL UPCOMING BIDS
    builder
      .addCase(_getUpcomingEvents.pending, (state) => {
        state.upcoming.loading = true;
      })
      .addCase(_getUpcomingEvents.fulfilled, (state, action) => {
        state.upcoming.loading = false;
        if (action.payload) {
          state.upcoming.events = action.payload.data.bidding_event;
          return;
        }
        state.upcoming.error = true;
      })
      .addCase(_getUpcomingEvents.rejected, (state) => {
        state.upcoming.error = true;
      });

    //WON BIDS
    builder
      .addCase(_getWonBidEvents.pending, (state) => {
        state.won.loading = true;
      })
      .addCase(_getWonBidEvents.fulfilled, (state, action) => {
        state.won.loading = false;
        if (action.payload) {
          state.won.events = action.payload.data.bidding_event;
          return;
        }
      })
      .addCase(_getWonBidEvents.rejected, (state) => {
        state.won.error = true;
      });

    //GET ALL CUSTOMER EVENTS
    builder
      .addCase(_getCustomerEvents.pending, (state) => {
        state.customer.loading = false;
      })
      .addCase(_getCustomerEvents.fulfilled, (state, action) => {
        state.customer.loading = false;
        if (action.payload) {
          state.customer.events = action.payload.data.event;
          return;
        }
        // state.error = true;
      })
      .addCase(_getCustomerEvents.rejected, (state) => {
        state.customer.error = true;
      });
  },
});

export default eventsSlice.reducer;
