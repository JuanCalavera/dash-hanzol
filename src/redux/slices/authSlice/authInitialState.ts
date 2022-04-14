import { AuthState } from "./authInterfaces";
import cookieCutter from "cookie-cutter";
import { ROUTES } from "../../../routes/routes";
import { cookieNames } from "./authCookieNames";

export const initialState: AuthState = {
	access_token: cookieCutter.get(cookieNames.USER_TOKEN) ?? null,
	user: cookieCutter.get(cookieNames.USER)
		? JSON.parse(cookieCutter.get(cookieNames.USER))
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
