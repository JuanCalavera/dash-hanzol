import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectModule } from "../../redux/slices/authSlice/authSelectors";

import Login from "./Login/Login";

import { ROUTES } from "../../routes/routes";
import Home from "../MainModule/Home/Home";
import Requests from "../MainModule/Requests/Requests";
import Budgets from "../MainModule/Budgets/Budgets";
import Projects from "../MainModule/Projects/Projects";

const AuthModule = (props: any) => {
	const module = useAppSelector(selectModule);

	switch (module) {
		default:
		case ROUTES.auth.login:
			return <Projects/>;
	}
};

export default AuthModule;
