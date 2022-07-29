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

  export const getBidEventAccess = createAsyncThunk(
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

  export const resendBidEventAccess = createAsyncThunk(
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

  export const accessBidEvent = createAsyncThunk(
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

  export const bidOnEvent = createAsyncThunk(
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

  export const getBiddingEventByStatus = createAsyncThunk(
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

  export const getSingleCustomerEvent = createAsyncThunk(
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

  export const getAllCustomerEvents = createAsyncThunk(
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

  export const removeCustomerEvent = createAsyncThunk(
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
          .addCase(      getBidEventAccess.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(      getBidEventAccess.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(      getBidEventAccess.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(        resendBidEventAccess.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(        resendBidEventAccess.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(        resendBidEventAccess.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(          accessBidEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(          accessBidEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(          accessBidEvent.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(          bidOnEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(          bidOnEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(          bidOnEvent.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(          getBiddingEventByStatus.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(          getBiddingEventByStatus.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(          getBiddingEventByStatus.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(            getSingleCustomerEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(            getSingleCustomerEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(            getSingleCustomerEvent.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(            getAllCustomerEvents.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(            getAllCustomerEvents.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(            getAllCustomerEvents.rejected, (state, action) => {
            state.status = "error";
          })
          .addCase(            removeCustomerEvent.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(            removeCustomerEvent.fulfilled, (state, action) => {
            console.log(action.payload)
          //   const data = action.payload
          //   state.category = data
            state.status = "success";
          })
          .addCase(            removeCustomerEvent.rejected, (state, action) => {
            state.status = "error";
          })
          
          
    }
    })      

    export default eventsSlice.reducer;
  
