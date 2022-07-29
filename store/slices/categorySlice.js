import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../services/customer";

export const getCategory = createAsyncThunk(
    `category/getAllCategories`,
    async (body) => {
      console.log(body);
      try {
        const response = await getAllCategories(body);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // return error.response.data.message;
      }
    }
  );

  const initialState = {
    category: {},
    status: "idle",
  };

  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(getCategory.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(getCategory.fulfilled, (state, action) => {
          console.log(action.payload)
        //   const data = action.payload
        //   state.category = data
          state.status = "success";
        })
        .addCase(getCategory.rejected, (state, action) => {
          state.status = "error";
        })
    }
    })      

    export default categorySlice.reducer;
  

