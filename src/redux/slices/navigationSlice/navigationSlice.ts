import { createSlice } from "@reduxjs/toolkit";
import { ROUTES } from "../../../routes/routes";
import { RootState } from "../../store";

const initialState = {
	currentScreen: ROUTES.main.home,
};

export const navigationSlice = createSlice({
	name: "navigation",
	initialState,
	reducers: {
		navigate: (state, action) => {
			state.currentScreen = action.payload;
		},
		home: (state) => {
			state.currentScreen = ROUTES.main.home;
		},
	},
	extraReducers: (builder) => {},
});

export const selectCurrentScreen = (state: RootState) =>
	state.navigation.currentScreen;

export const { navigate, home } = navigationSlice.actions;

export default navigationSlice.reducer;
