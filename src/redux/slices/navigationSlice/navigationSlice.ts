import { createSlice } from "@reduxjs/toolkit";
import { headerTypes, ROUTES } from "../../../routes/routes";
import { RootState } from "../../store";

enum transitions {
	IN = "in",
	OUT = "back",
}

interface navigationState {
	currentScreen: any;
	stack: any[];
	transitionType: string;
}

const initialState: navigationState = {
	currentScreen: ROUTES.main.home,
	stack: [],
	transitionType: transitions.IN,
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

			state.transitionType = transitions.OUT;
			state.currentScreen = to;
		},
		home: (state) => {
			state.transitionType = transitions.IN;
			state.currentScreen = ROUTES.main.home;
		},
		back: (state) => {
			const stack = state.stack.slice();
			const backTo = stack.pop();
			state.transitionType = transitions.IN;
			state.currentScreen = backTo;
			state.stack = stack;
		},
	},
});

export const selectCurrentScreen = (state: RootState) =>
	state.navigation.currentScreen;
export const selectTransitionType = (state: RootState) =>
	state.navigation.transitionType;

export const { navigate, home, back } = navigationSlice.actions;

export default navigationSlice.reducer;
