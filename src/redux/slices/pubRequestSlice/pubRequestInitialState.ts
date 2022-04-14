import { PubRequestState } from "./pubRequestInterfaces";
import cookie from "cookie-cutter";
import { cookieNames } from "./pubRequestCookieNames";

export const initialState: PubRequestState = {
	form: {
		theme: null,
		drawType: null,
		exhibitionDescription: "",
		deliver_date: "",
		size: "",
		links: [],
		files: [],
		description: "",
		budget_types: [],
	},
	drawTypes: cookie.get(cookieNames.DRAW_TYPES)
		? JSON.parse(cookie.get(cookieNames.DRAW_TYPES))
		: [],
	pubTypes: cookie.get(cookieNames.PUB_TYPES)
		? JSON.parse(cookie.get(cookieNames.PUB_TYPES))
		: [],
	budgetTypes: cookie.get(cookieNames.BUDGET_TYPES)
		? JSON.parse(cookie.get(cookieNames.BUDGET_TYPES))
		: [],
};
