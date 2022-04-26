import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectModule } from "../../redux/slices/authSlice/authSelectors";

import Login from "./Login/Login";

import { ROUTES } from "../../routes/routes";

const AuthModule = (props: any) => {
	const module = useAppSelector(selectModule);

	switch (module) {
		default:
		case ROUTES.auth.login:
			return <Login />;
	}
};

export default AuthModule;
