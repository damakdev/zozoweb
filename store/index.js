import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/authSlice";
import categoriesSlice from "./slices/categoriesSlice";
import eventsSlice from "./slices/eventsSlice";
import userSlice from "./slices/userSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "zozo",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    categories: categoriesSlice,
    events: eventsSlice,
    user : userSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
