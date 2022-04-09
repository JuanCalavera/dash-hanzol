import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAppSelector } from "../../redux/hooks";
import { ROUTES } from "../../routes/routes";

import { selectCurrentScreen } from "../../redux/slices/navigationSlice/navigationSlice";

import Home from "../Home/Home";

import styles from "./MainModule.module.scss";

const MainModule = (props: any) => {
	const currentScreen = useAppSelector(selectCurrentScreen);

	switch (currentScreen.name) {
		default:
		case ROUTES.main.home.name:
			return (
				<Layout>
					<Home />
				</Layout>
			);
	}
};

export default MainModule;
