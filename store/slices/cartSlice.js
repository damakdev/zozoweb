import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	cart: [],
	subTotal: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCart: (state, action) => {
			state.isLoading = true;

			let newEvent = {
				id: action.payload.id,
				name: action.payload.product.name,
				price: action.payload.product.price,
				timer: action.payload.end_time,
				image: action.payload.product.images.main,
			};

			if (state.cart.length <= 0) {
				state.cart.push(newEvent);
				state.subTotal = state.cart.reduce(
					(prev, cur) => Number(prev) + Number(cur.price),
					0
				);
			} else {
				let isExist = state.cart.find((event) => event.id == newEvent.id);
				if (!isExist) {
					state.cart.push(newEvent);
					console.log(state.cart, "line 34");
					state.subTotal = state.cart.reduce(
						(prev, cur) => Number(prev) + Number(cur.price),
						0
					);
				}
			}
		},
		removeCartItem: (state, action) => {
			let isExist = state.cart.find((event) => event.id == action.payload.id);
			console.log(action.payload);
			if (isExist) {
				state.cart = state.cart.filter((item) => item.id !== action.payload.id);
				
				state.subTotal = state.cart.reduce(
					(prev, cur) => Number(prev) + Number(cur.price),
					0
				);
			}
		},

		clearCart: (state, action) => {
			state.cart = []
		},
	},
});

export const { addCart, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
