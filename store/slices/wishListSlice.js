import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	wishList: [],
	subTotal: 0,
};

const wishListSlice = createSlice({
	name: "wishList",
	initialState,
	reducers: {
		addwishList: (state, action) => {
			state.isLoading = true;

			let newEvent = {
				id: action.payload.id,
				name: action.payload.product.name,
				price: action.payload.product.price,
				timer: action.payload.end_time,
				image: action.payload.product.images.main,
			};

			if (state.wishList.length <= 0) {
				state.wishList.push(newEvent);
				state.subTotal = state.wishList.reduce(
					(prev, cur) => Number(prev) + Number(cur.price),
					0
				);
			} else {
				let isExist = state.wishList.find((event) => event.id == newEvent.id);
				if (!isExist) {
					state.wishList.push(newEvent);
					console.log(state.wishList, "line 34");
					state.subTotal = state.wishList.reduce(
						(prev, cur) => Number(prev) + Number(cur.price),
						0
					);
				}
			}
		},
		removewishListItem: (state, action) => {
			let isExist = state.wishList.find((event) => event.id == action.payload.id);
			console.log(action.payload);
			if (isExist) {
				state.wishList = state.wishList.filter((item) => item.id !== action.payload.id);
				
				state.subTotal = state.wishList.reduce(
					(prev, cur) => Number(prev) + Number(cur.price),
					0
				);
			}
		},

		clearwishList: (state, action) => {
			state.wishList = []
		},
	},
});

export const { addwishList, removewishListItem, clearwishList } = wishListSlice.actions;
export default wishListSlice.reducer;
