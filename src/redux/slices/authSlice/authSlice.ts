import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAsyncActions";
import { initialState } from "./authInitialState";
import cookie from "cookie-cutter";
import { cookieNames } from "./authCookieNames";

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
			state.access_token = response.token;
			const user = { cnpj: response.user.cnpj, name: response.user.name };
			state.user = user;

			cookie.set(cookieNames.USER_TOKEN, response.token);
			cookie.set(cookieNames.USER, JSON.stringify(user));
		});
	},
});

// export const { setLoginFormErrors, emptyLoginFormErrors } = authSlice.actions;

export default authSlice.reducer;
