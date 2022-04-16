import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchAgencyData } from "./pubRequestAsyncActions";
import { initialState } from "./pubRequestInitialState";
import cookie from "cookie-cutter";
import { cookieNames } from "./pubRequestCookieNames";

export enum requestFormTextFields {
	EXHIBITION_DESCRIPTION = "exhibitionDescription",
	DELIVER_DATE = "deliver_date",
	SIZE = "size",
	DESCRIPTION = "description",
}

const REQUEST_TEXT_FIELDS_ALLOWED = [
	requestFormTextFields.EXHIBITION_DESCRIPTION,
	requestFormTextFields.DELIVER_DATE,
	requestFormTextFields.SIZE,
	requestFormTextFields.DESCRIPTION,
];

export const pubRequestSlice = createSlice({
	name: "pubRequest",
	initialState,
	reducers: {
		emptyForm: (state) => {
			state.form = { ...initialState.form };
		},
		changeTextInput: (
			state,
			action: {
				type: string;
				payload: {
					field: string;
					newValue: string;
				};
			},
		) => {
			const field = REQUEST_TEXT_FIELDS_ALLOWED.find(
				(field) => field === action.payload.field,
			);
			if (field) state.form[field] = action.payload.newValue;
			else throw new Error("Invalid field change");
		},
		selectType: (state, action) => {
			state.form.pubType = action.payload;
		},
		selectSubType: (state, action) => {
			state.form.pubSubType = action.payload;
		},
		addNewLink: (
			state,
			action: { type: string; payload: { title: string; id: number } },
		) => {
			const links = state.form.links.slice();
			links.push(action.payload);
			state.form.links = links;
		},
		removeLink: (state, action: { type: string; payload: number }) => {
			const links = state.form.links.filter(
				(link) => link.id !== action.payload,
			);
			state.form.links = links;
		},
		addBudget: (state, action) => {
			const budgets = state.form.budget_types.slice();
			budgets.push(action.payload);
			state.form.budget_types = budgets;
		},
		removeBudget: (state, action) => {
			const budgets = state.form.budget_types.filter(
				(budget) => budget !== action.payload,
			);
			state.form.budget_types = budgets;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAgencyData.fulfilled, (state, action) => {
			const response = action.payload;
			state.budgetTypes = response.budgetTypes;
			state.pubTypes = response.pubTypes;

			cookie.set(
				cookieNames.BUDGET_TYPES,
				JSON.stringify(response.budgetTypes),
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

export const {
	emptyForm,
	changeTextInput,
	selectType,
	selectSubType,
	addNewLink,
	removeLink,
	addBudget,
	removeBudget,
} = pubRequestSlice.actions;

export default pubRequestSlice.reducer;
