import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/authSlice";
import categoriesSlice from "./slices/categoriesSlice";
import eventsSlice from "./slices/eventsSlice";
import userSlice from "./slices/userSlice";
import thunk from "redux-thunk";
import adminAuthSlice from "./slices/adminSlice/usersSlice";
import usersSlice from "./slices/adminSlice/usersSlice";
import eventSlice from "./slices/adminSlice/eventSlice";
import cartSlice from "./slices/cartSlice";

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
		cart: cartSlice,
		

	},
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
});

export const persistor = persistStore(store);
