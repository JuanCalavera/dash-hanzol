export enum headerTypes {
	HOME = "HOME",
	BACK_WITHOUT_TEXT = "BACK_WITHOUT_TEXT",
	BACK_WITH_TEXT = "BACK_WITH_TEXT",
}

export const ROUTES = {
	auth: {
		login: "LOGIN",
	},
	main: {
		home: { name: "HOME", headerType: headerTypes.HOME },
	},
};
