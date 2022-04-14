import { createSlice } from "@reduxjs/toolkit";
import { headerTypes, ROUTES } from "../../../routes/routes";
import { RootState } from "../../store";

interface navigationState {
	currentScreen: any;
	stack: any[];
}

const initialState: navigationState = {
	currentScreen: ROUTES.main.home,
	stack: [],
};

export const navigationSlice = createSlice({
	name: "navigation",
	initialState,
	reducers: {
		navigate: (
			state,
			action: { type: string; payload: { from: any; to: any } },
		) => {
			const to = action.payload.to;
			const from = action.payload.from;

			if (
				to.headerType === headerTypes.BACK_WITHOUT_TEXT ||
				to.headerType === headerTypes.BACK_WITH_TEXT
			) {
				const newStack = state.stack.slice();
				newStack.push(from);
				state.stack = newStack;
			}

			state.currentScreen = to;
		},
		home: (state) => {
			state.currentScreen = ROUTES.main.home;
		},
		back: (state) => {
			const stack = state.stack.slice();
			const backTo = stack.pop();
			state.currentScreen = backTo;
			state.stack = stack;
		},
	},
	extraReducers: (builder) => {},
});

export const selectCurrentScreen = (state: RootState) =>
	state.navigation.currentScreen;

export const { navigate, home, back } = navigationSlice.actions;

export default navigationSlice.reducer;
