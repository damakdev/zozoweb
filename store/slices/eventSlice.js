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
  export const getWonBidding = createAsyncThunk(
    `events/getWonBiddingEvents`,
    async (body) => {
      console.log(body);
      try {
        const response = await getWonBiddingEvents(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const getSingleBidding = createAsyncThunk(
    `events/getSingleBiddingEvent`,
    async (body) => {
      console.log(body);
      try {
        const response = await getSingleBiddingEvent(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const getBiddingEventsByCategory = createAsyncThunk(
    `events/getBiddingEventsByCategoryNames`,
    async (body) => {
      console.log(body);
      try {
        const response = await getBiddingEventsByCategoryNames(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const getBidEvent = createAsyncThunk(
    `events/getBidEventAccess`,
    async (body) => {
      console.log(body);
      try {
        const response = await getBidEventAccess(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const resendBidEvent = createAsyncThunk(
    `events/resendBidEventAccess`,
    async (body) => {
      console.log(body);
      try {
        const response = await resendBidEventAccess(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const accessBid = createAsyncThunk(
    `events/accessBidEvent`,
    async (body) => {
      console.log(body);
      try {
        const response = await accessBidEvent(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const getBidOnEvent = createAsyncThunk(
    `events/bidOnEvent`,
    async (body) => {
      console.log(body);
      try {
        const response = await bidOnEvent(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const biddingEventByStatus = createAsyncThunk(
    `events/getBiddingEventByStatus`,
    async (body) => {
      console.log(body);
      try {
        const response = await getBiddingEventByStatus(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const singleCustomerEvent = createAsyncThunk(
    `events/getSingleCustomerEvent`,
    async (body) => {
      console.log(body);
      try {
        const response = await getSingleCustomerEvent(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const allCustomerEvents = createAsyncThunk(
    `events/getAllCustomerEvents`,
    async (body) => {
      console.log(body);
      try {
        const response = await getAllCustomerEvents(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  export const getRemoveCustomerEvent = createAsyncThunk(
    `events/removeCustomerEvent`,
    async (body) => {
      console.log(body);
      try {
        const response = await removeCustomerEvent(body);
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
        .addCase(searchApprovedBiddingEvents.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(searchApprovedBiddingEvents.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(searchApprovedBiddingEvents.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(  getSingleBiddingEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(  getSingleBiddingEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(  getSingleBiddingEvent.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(    getWonBiddingEvents.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(    getWonBiddingEvents.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(    getWonBiddingEvents.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(    getBiddingEventsByCategoryNames.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(    getBiddingEventsByCategoryNames.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(    getBiddingEventsByCategoryNames.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(      getBidEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(      getBidEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(      getBidEvent.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(        resendBidEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(        resendBidEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(        resendBidEvent.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(          accessBid.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(          accessBid.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(          accessBid.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(          getBidOnEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(          getBidOnEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(          getBidOnEvent.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(          biddingEventByStatus.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(          biddingEventByStatus.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(          biddingEventByStatus.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(            singleCustomerEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(            singleCustomerEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(            singleCustomerEvent.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(            allCustomerEvents.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(            allCustomerEvents.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(            allCustomerEvents.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(            getRemoveCustomerEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(            getRemoveCustomerEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(            getRemoveCustomerEvent.rejected, (state, action) => {
            state.status = "error";
          })
          
          
    }
    })      

    export default eventsSlice.reducer;
  
