import { RootState } from "../../store";

export const selectPubRequestForm = (state: RootState) => state.pubRequest.form;

export const selectBudgetTypes = (state: RootState) =>
	state.pubRequest.budgetTypes;
export const selectPubTypes = (state: RootState) => state.pubRequest.pubTypes;
