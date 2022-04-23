import { createSlice } from "@reduxjs/toolkit";
import { fetchPubs, sendRating } from "./mainAsyncActions";
import { initialState } from "./mainInitialState";

export const mainSlice = createSlice({
	name: "main",
	initialState,
	reducers: {
		selectPub: (state, action) => {
			state.currentPubPiece = action.payload;
		},
		initLoad: (state) => {
			state.isAppLoading = true;
		},
		endLoad: (state) => {
			state.isAppLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPubs.fulfilled, (state, action) => {
				state.pubPieces = action.payload;
			})
			.addCase(sendRating.fulfilled, (state, action) => {
				const pubs = state.pubPieces.slice();
				const index = pubs.findIndex(
					(pub) => pub.id === action.payload.id,
				);
				pubs[index].was_liked = action.payload.was_liked;
				state.pubPieces = pubs;
			});
	},
});

export const { selectPub, initLoad, endLoad } = mainSlice.actions;

export default mainSlice.reducer;
