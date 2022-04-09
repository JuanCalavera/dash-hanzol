import { AuthState } from "./authInterfaces";
import cookieCutter from "cookie-cutter";
import { ROUTES } from "../../../routes/routes";

export const initialState: AuthState = {
	access_token: cookieCutter.get("W_A_T") ?? null,
	user: cookieCutter.get("U_DA")
		? JSON.parse(cookieCutter.get("U_DA"))
		: { cnpj: "", name: "" },
	login: {
		cnpj: "",
		password: "",
		errors: {},
	},
	errorsModalIsOpen: false,
	errorsModalErrors: [],
	currentModule: ROUTES.auth.login,
};
