import React from "react";
import { useAppSelector } from "../../../redux/hooks";

import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Conclusion from "./Conclusion/Conslusion";

import { selectCurrentScreen } from "../../../redux/slices/navigationSlice/navigationSlice";

import { ROUTES } from "../../../routes/routes";

const NewPubRequestModule = () => {
	const currentScreen = useAppSelector(selectCurrentScreen);

	switch (currentScreen.name) {
		default:
		case ROUTES.main.newPubRequest.step1.name:
			return <Step1 />;
		case ROUTES.main.newPubRequest.step2.name:
			return <Step2 />;

		case ROUTES.main.newPubRequest.step3.name:
			return <Step3 />;

		case ROUTES.main.newPubRequest.step4.name:
			return <Step4 />;

		case ROUTES.main.newPubRequest.newPubRequestConclusion.name:
			return <Conclusion />;
	}
};

export default NewPubRequestModule;
