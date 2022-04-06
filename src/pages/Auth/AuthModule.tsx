import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectModule } from "../../redux/slices/authSlice/authSelectors";

import Login from "./Login/Login";

import styles from "./AuthModule.module.scss";

const AuthModule = (props: any) => {
	const module = useAppSelector(selectModule);

	switch (module) {
		default:
		case "login":
			return <Login />;
	}
};

export default AuthModule;
