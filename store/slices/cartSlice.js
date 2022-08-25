import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
			//   state.isLoading = true;

			// state.cart = action.payload;
			// state.subTotal = action.payload
			//   .map((event) => event.winner.amount)
			//   .reduce((prev, next) => prev + next);

			let newEvent = {
				id: action.payload.id,
				name: action.payload.product.name,
				price: action.payload.product.price,
				start: action.payload.start_time,
				end: action.payload.end_time,
				image: action.payload.product.images.main,
				access_amount: action.payload.access_amount,
				minimum_amount: action.payload.minimum_amount,
			};

			if (state.cart.length < 1) {
				state.cart.push(newEvent);

				// state.subTotal = state.cart.reduce(
				// 	(prev, cur) => Number(prev) + Number(cur.price),
				// 	0
				// );
				toast.success(`${newEvent.name} successfully added to Watchlist`, {
					autoClose: 4000,
				});
			} else if (state.cart.length > 0) {
				let isExist = state.cart.find((event) => event.id == newEvent.id);
				if (!isExist) {
					state.cart.push(newEvent);
					// state.subTotal = state.cart.reduce(
					// 	(prev, cur) => Number(prev) + Number(cur.price),
					// 	0
					// );

					toast.success(`${newEvent.name} successfully added to cart`, {
						autoClose: 4000,
					});
				} else {
					toast.error(`${newEvent.name} already exist in cart`, {
						autoClose: 4000,
					});
				}
			}
		},
		removeCartItem: (state, action) => {
			let isExist = state.cart.find((event) => event.id == action.payload.id);

			if (isExist) {
				state.cart = state.cart.filter((item) => item.id !== action.payload.id);

				//   state.subTotal = state.cart.reduce(
				//     (prev, cur) => Number(prev) + Number(cur.price),
				//     0
				//   );

				toast.success(`${action.payload.name}removed cart`, {
					autoClose: 4000,
				});
			}
		},

		clearCart: (state, action) => {
			state.cart = [];
			toast.success(`Cart cleared successfully`, {
				autoClose: 4000,
			});
		},
	},
});

export const { addCart, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
