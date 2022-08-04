import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../services/customer";

export const _getCurrentUser = createAsyncThunk(
    `user/getCurrentUser`,
    async () => {
      try {
        const response = await getCurrentUser();
        return response;
      } catch (error) {
        // return error.response.data.message;
      }
    }
  );

  const initialState = {
    users: {},
    status: "idle",
  };

  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(_getCurrentUser.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(_getCurrentUser.fulfilled, (state, action) => {
           state.users = action.payload;
            state.status = "success";
          
        })
        .addCase(_getCurrentUser.rejected, (state, action) => {
          state.status = "error";
        })
    }
    })      

    export default userSlice.reducer;
  