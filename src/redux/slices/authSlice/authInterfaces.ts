export interface User {
	cnpj: string;
}

interface Login {
	cnpj: string;
	password: string;
	errors: {
		[key: string]: string | string[] | null | undefined;
	};
	[key: string]:
		| string
		| { [key: string]: string | string[] | null | undefined };
}

export interface AuthState {
	errorsModalIsOpen: boolean;
	errorsModalErrors: string[];
	access_token: string | null;
	user: User;
	login: Login;
	currentModule: string;
}
