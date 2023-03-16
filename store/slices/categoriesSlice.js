import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllCategories,
  getAllCategoryProduct,
} from "../../services/customer";

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

export const _getAllCategoryProduct = createAsyncThunk(
  `category/getAllCategoryProduct`,
  async (body) => {
    try {
      const response = await getAllCategoryProduct(body);

      return response;
    } catch (error) {
      // return error.response.data.message;
    }
  }
);

const initialState = {
  categories: null,
  status: "idle",
  cateProduct: {
    isLoading: false,
    products: null,
    status: "idle",
  },
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
        if (!action.payload) return;
        state.categories = action.payload.data.category;
        state.status = "success";
      })
      .addCase(_getAllCategories.rejected, (state, action) => {
        state.status = "error";
      });

    builder
      .addCase(_getAllCategoryProduct.pending, (state) => {
        state.cateProduct.isLoading = true;
        state.cateProduct.status = "loading";
      })
      .addCase(_getAllCategoryProduct.fulfilled, (state, action) => {
        state.cateProduct.products = action.payload.data;
        state.cateProduct.status = "success";
        state.cateProduct.isLoading = false;
      })
      .addCase(_getAllCategoryProduct.rejected, (state, action) => {
        state.cateProduct.status = "error";
      });
  },
});

export default categoriesSlice.reducer;
