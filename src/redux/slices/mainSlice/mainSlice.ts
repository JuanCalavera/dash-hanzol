import { createSlice } from "@reduxjs/toolkit";
import cookie from "cookie-cutter";
import { fetchPubs } from "./mainAsyncActions";
import { initialState } from "./mainInitialState";

export const mainSlice = createSlice({
	name: "main",
	initialState,
	reducers: {
		// setLoginFormErrors: (state, action) => {
		// 	state.login.errors = action.payload;
		// },
		// emptyLoginFormErrors: (state) => {
		// 	state.login.errors = {};
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPubs.fulfilled, (state, action) => {
			state.pubPieces = action.payload;
		});
	},
});

// export const { setLoginFormErrors, emptyLoginFormErrors } = mainSlice.actions;

export default mainSlice.reducer;
