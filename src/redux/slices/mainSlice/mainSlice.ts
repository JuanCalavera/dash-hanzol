import { createSlice } from "@reduxjs/toolkit";
import { fetchPubs } from "./mainAsyncActions";
import { initialState } from "./mainInitialState";

export const mainSlice = createSlice({
	name: "main",
	initialState,
	reducers: {
		selectPub: (state, action) => {
			state.currentPubPiece = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPubs.fulfilled, (state, action) => {
			state.pubPieces = action.payload;
		});
	},
});

export const { selectPub } = mainSlice.actions;

export default mainSlice.reducer;
