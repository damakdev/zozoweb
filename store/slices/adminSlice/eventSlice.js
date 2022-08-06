import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllEventsList } from "../../../services/admin";


const initialState ={
 events :{
      eventsLoading: false,
      eventList:null
 }
}

const getAllEvents = createAsyncThunk("events/getAllEvents", async()=>{
      return await getAllEventsList()
})
const eventSlice = createSlice({
      name:"events",
      initialState,
      reducers:{

      },
      extraReducers:{
            [getAllEvents.pending] :(state, action)=>{
                  state.events.eventsLoading = true
            },
            [getAllEvents.fulfilled]: (state,action) => {
                  state.events.eventList = action.payload.data.bidding_event
            }
      }
})

export default eventSlice.reducer