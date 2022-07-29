import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getApprovedBiddingEvents,
  searchApprovedBiddingEvents,
  getSingleBiddingEvent,
  getWonBiddingEvents,
  getBiddingEventsByCategoryNames,
  getBidEventAccess,
  resendBidEventAccess,
  accessBidEvent,
  bidOnEvent,
  getBiddingEventByStatus,
  getSingleCustomerEvent,
  getAllCustomerEvents,
  removeCustomerEvent,
  
} from "../../services/customer";


export const getApprovedBidding = createAsyncThunk(
    `events/getApprovedBiddingEvents`,
    async (body) => {
      console.log(body);
      try {
        const response = await getApprovedBiddingEvents(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const searchApprovedBidding = createAsyncThunk(
    `events/searchApprovedBiddingEvents`,
    async (body) => {
      console.log(body);
      try {
        const response = await searchApprovedBiddingEvents(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  const initialState = {
    events: {},
    status: "idle",
  };

  const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(getApprovedBidding.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(getApprovedBidding.fulfilled, (state, action) => {
          console.log(action.payload)
        //   const data = action.payload
        //   state.category = data
          state.status = "success";
        })
        .addCase(getApprovedBidding.rejected, (state, action) => {
          state.status = "error";
        })
    }
    })      

    export default eventsSlice.reducer;
  
