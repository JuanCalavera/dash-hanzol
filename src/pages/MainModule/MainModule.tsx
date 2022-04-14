import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAppSelector } from "../../redux/hooks";
import { ROUTES } from "../../routes/routes";

import Home from "./Home/Home";
import NewPubRequestModule from "./NewPubRequest/NewPubRequestModule";

import { selectCurrentScreen } from "../../redux/slices/navigationSlice/navigationSlice";

const MainModule = () => {
	const currentScreen = useAppSelector(selectCurrentScreen);

	switch (currentScreen.name) {
		default:
		case ROUTES.main.home.name:
			return (
				<Layout>
					<Home />
				</Layout>
			);
		case ROUTES.main.newPubRequest.step1.name:
		case ROUTES.main.newPubRequest.step2.name:
		case ROUTES.main.newPubRequest.step3.name:
		case ROUTES.main.newPubRequest.step4.name:
		case ROUTES.main.newPubRequest.newPubRequestConclusion.name:
			return (
				<Layout>
					<NewPubRequestModule />
				</Layout>
			);
	}
};

export default MainModule;
