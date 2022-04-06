import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAsyncActions";
import { initialState } from "./authInitialState";
import cookie from "cookie-cutter";

export const authSlice = createSlice({
	name: "auth",
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
		builder.addCase(login.fulfilled, (state, action) => {
			const response = action.payload;
			state.access_token = response.access_token;
			const user = { cnpj: response.cnpj };
			state.user = user;

			cookie.set("W_A_T", response.access_token);
			cookie.set("U_DA", JSON.stringify(user));
		});
	},
});

// export const { setLoginFormErrors, emptyLoginFormErrors } = authSlice.actions;

export default authSlice.reducer;
