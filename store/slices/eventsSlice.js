import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getApprovedBidEvents,
  searchApprovedBidEvents,
  getSingleBidEvent,
  getWonBidEvents,
  getBidEventsByCategoryNames,
  getBidEventAccess,
  resendBidEventAccess,
  accessBidEvent,
  bidOnEvent,
  getBidEventByStatus,
  getSingleCustomerEvent,
  getAllCustomerEvents,
  removeCustomerEvent,
} from "../../services/customer";

export const _getApprovedBiddingEvents = createAsyncThunk(
  `events/getApprovedBidEvents`,
  async (body) => {
    try {
      const response = await getApprovedBidEvents(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _searchApprovedBidEvents = createAsyncThunk(
  `events/searchApprovedBidEvents`,
  async (body) => {
    try {
      const response = await searchApprovedBidEvents(body);
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

export const _getSingleBidEvent = createAsyncThunk(
  `events/getSingleBidEvent`,
  async (body) => {
    try {
      const response = await getSingleBidEvent(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getBidEventsByCategoryNames = createAsyncThunk(
  `events/getBidEventsByCategoryNames`,
  async (body) => {
    try {
      const response = await getBidEventsByCategoryNames(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getBidEventAccess = createAsyncThunk(
  `events/getBidEventAccess`,
  async (body) => {
    try {
      const response = await getBidEventAccess(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _resendBidEventAccess = createAsyncThunk(
  `events/resendBidEventAccess`,
  async (body) => {
    try {
      const response = await resendBidEventAccess(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _accessBidEvent = createAsyncThunk(
  `events/accessBidEvent`,
  async (body) => {
    try {
      const response = await accessBidEvent(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _bidOnEvent = createAsyncThunk(
  `events/bidOnEvent`,
  async (body) => {
    try {
      const response = await bidOnEvent(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getBiddingEventByStatus = createAsyncThunk(
  `events/getBiddingEventByStatus`,
  async (body ) => {
    try {
      const response = await getBidEventByStatus(body);
      return response;
      console.log(response.data)
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getSingleCustomerEvent = createAsyncThunk(
  `events/getSingleCustomerEvent`,
  async (body) => {
    try {
      const response = await getSingleCustomerEvent(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _getAllCustomerEvents = createAsyncThunk(
  `events/getAllCustomerEvents`,
  async (body) => {
    try {
      const response = await getAllCustomerEvents(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

export const _removeCustomerEvent = createAsyncThunk(
  `events/removeCustomerEvent`,
  async (body) => {
    try {
      const response = await removeCustomerEvent(body);
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

const initialState = {
  biddingEvents: null,
  status: "idle",
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  //   reducers: {},
  extraReducers(builder) {
    builder.addCase(_getApprovedBiddingEvents.pending, (state, action) => {
      state.status = "loading";
    });
    builder
      .addCase(_getApprovedBiddingEvents.fulfilled, (state, action) => {
        if (action.payload) {
          state.biddingEvents = action.payload.data.bidding_event;
          state.status = "success";
          return;
        }
        state.status = "error";
      })
      .addCase(_getApprovedBiddingEvents.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(_getBiddingEventByStatus.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(_getBiddingEventByStatus.fulfilled, (state, action) => {
        if (action.payload) {
          state.biddingEventsStatus = action.payload.data.bidding_event;
          state.status = "success";
          return;
        }
        state.status = "error";
      })
      .addCase(_getBiddingEventByStatus.rejected, (state, action) => {
        state.status = "error";
      });
    // builder
    //   .addCase(searchApprovedBidEvents.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(searchApprovedBidEvents.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(searchApprovedBidEvents.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(getSingleBidEvent.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getSingleBidEvent.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(getSingleBidEvent.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(getWonBidEvents.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getWonBidEvents.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(getWonBidEvents.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(getBidEventsByCategoryNames.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getBidEventsByCategoryNames.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(getBidEventsByCategoryNames.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(getBidEvent.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getBidEvent.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(getBidEvent.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(resendBidEvent.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(resendBidEvent.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(resendBidEvent.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(accessBid.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(accessBid.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(accessBid.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(getBidOnEvent.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getBidOnEvent.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(getBidOnEvent.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(biddingEventByStatus.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(biddingEventByStatus.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(biddingEventByStatus.rejected, (state, action) => {
    //     state.status = "error";
    //   })
    //   .addCase(singleCustomerEvent.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(singleCustomerEvent.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(singleCustomerEvent.rejected, (state, action) => {
    //     state.status = "error";
    //   })
     
    //   .addCase(getRemoveCustomerEvent.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getRemoveCustomerEvent.fulfilled, (state, action) => {
    //     //   const data = action.payload
    //     //   state.category = data
    //     state.status = "success";
    //   })
    //   .addCase(getRemoveCustomerEvent.rejected, (state, action) => {
    //     state.status = "error";
    //   });
  },
});

export default eventsSlice.reducer;
