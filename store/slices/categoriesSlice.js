import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../services/customer";

export const _getAllCategories = createAsyncThunk(
  `category/getAllCategories`,
  async () => {
    try {
      const response = await getAllCategories();
      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

const initialState = {
  categories: null,
  status: "idle",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(_getAllCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(_getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload.data.category;
        state.status = "success";
      })
      .addCase(_getAllCategories.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default categoriesSlice.reducer;
