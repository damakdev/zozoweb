import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/authSlice";
import categorySlice from "./slices/categorySlice";
import eventSlice from "./slices/eventSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "zozo",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice, categorySlice, eventSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    category: persistedReducer,
    events: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
