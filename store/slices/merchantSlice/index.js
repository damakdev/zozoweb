import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBidEvents, getBalance } from "../../../services/merchant";

export const _getBidEvents = createAsyncThunk(
  `merchant/getBidEvents`,
  async (merchant_id) => {
    const response = await getBidEvents(merchant_id);
    return response;
  }
);

const initialState = {
  events: null,
  wallet: null,
};

const merchantSlice = createSlice({
  name: "merchant",
  initialState,
  extraReducers(builder) {
    builder.addCase(_getBidEvents.fulfilled, (state, action) => {
      state.events = action.payload.data.bidding_event;
    });
  },
});

export default merchantSlice.reducer;
