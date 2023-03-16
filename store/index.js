import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/authSlice";
import categoriesSlice from "./slices/categoriesSlice";
import eventsSlice from "./slices/eventsSlice";
import thunk from "redux-thunk";
import adminAuthSlice from "./slices/adminSlice/usersSlice";
import usersSlice from "./slices/adminSlice/usersSlice";
import adminEvent from "./slices/adminSlice/adminEventSlice";
import cartSlice from "./slices/cartSlice";
import walletSlice from "./slices/adminSlice/walletSlice";
import merchantSlice from "./slices/merchantSlice";

const persistConfig = {
  key: "zozo",
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  categories: categoriesSlice,
  events: eventsSlice,
  cart: cartSlice,
  merchant: merchantSlice,

  //ADMIN
  users: usersSlice,
  adminEvent: adminEvent,
  wallet: walletSlice,
});

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    categories: categoriesSlice,
    events: eventsSlice,
    cart: cartSlice,
    merchant: merchantSlice,

    //ADMIN
    users: usersSlice,
    adminEvent: adminEvent,
    wallet:walletSlice
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
