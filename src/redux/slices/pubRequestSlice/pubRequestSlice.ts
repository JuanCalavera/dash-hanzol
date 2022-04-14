import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchAgencyData } from "./pubRequestAsyncActions";
import { initialState } from "./pubRequestInitialState";
import cookie from "cookie-cutter";
import { cookieNames } from "./pubRequestCookieNames";

export const pubRequestSlice = createSlice({
	name: "pubRequest",
	initialState,
	reducers: {
		emptyForm: (state) => {
			state.form = { ...initialState.form };
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAgencyData.fulfilled, (state, action) => {
			const response = action.payload;
			state.budgetTypes = response.budgetTypes;
			state.drawTypes = response.drawTypes;
			state.pubTypes = response.pubTypes;

			cookie.set(
				cookieNames.BUDGET_TYPES,
				JSON.stringify(response.budgetTypes),
			);
			cookie.set(
				cookieNames.DRAW_TYPES,
				JSON.stringify(response.drawTypes),
			);
			cookie.set(
				cookieNames.PUB_TYPES,
				JSON.stringify(response.pubTypes),
			);
		});
	},
});

export const selectCurrentScreen = (state: RootState) =>
	state.navigation.currentScreen;

export const { emptyForm } = pubRequestSlice.actions;

export default pubRequestSlice.reducer;
