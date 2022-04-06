import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectLoginForm = (state: RootState) => state.auth.login;
export const selectLoginErrors = (state: RootState) => state.auth.login.errors;
export const selectErrorModalIsOpen = (state: RootState) =>
	state.auth.errorsModalIsOpen;
export const selectErrorModalErrors = (state: RootState) =>
	state.auth.errorsModalErrors;
export const selectErrorModal = createSelector(
	selectErrorModalIsOpen,
	selectErrorModalErrors,
	(isOpen, errors) => ({ isOpen, errors }),
);
export const selectToken = (state: RootState) => state.auth.access_token;
export const selectUser = (state: RootState) => state.auth.user;
export const selectModule = (state: RootState) => state.auth.currentModule;
