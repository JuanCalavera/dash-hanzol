export enum headerTypes {
	HOME = "HOME",
	BACK_WITHOUT_TEXT = "BACK_WITHOUT_TEXT",
	BACK_WITH_TEXT = "BACK_WITH_TEXT",
	WITHOUT_HEADER = "WITHOUT_HEADER",
}

export const ROUTES = {
	auth: {
		login: "LOGIN",
	},
	main: {
		home: { name: "HOME", headerType: headerTypes.HOME },
		newPubRequest: {
			step1: {
				name: "NEW_PUB_REQUEST_STEP1",
				headerType: headerTypes.BACK_WITH_TEXT,
				headerText: "Nova solicitação",
			},
			step2: {
				name: "NEW_PUB_REQUEST_STEP2",
				headerType: headerTypes.BACK_WITH_TEXT,
				headerText: "Informações",
			},
			step3: {
				name: "NEW_PUB_REQUEST_STEP3",
				headerType: headerTypes.BACK_WITH_TEXT,
				headerText: "Referências",
			},
			step4: {
				name: "NEW_PUB_REQUEST_STEP4",
				headerType: headerTypes.BACK_WITH_TEXT,
				headerText: "Fechamento",
			},
			newPubRequestConclusion: {
				name: "NEW_PUB_REQUEST_CONCLUSION",
				headerType: headerTypes.WITHOUT_HEADER,
			},
		},
	},
};
