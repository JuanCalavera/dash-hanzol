import React, { ReactElement, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ROUTES } from "../../routes/routes";

import Home from "./Home/Home";
import NewPubRequestModule from "./NewPubRequest/NewPubRequestModule";
import PubDetails from "./PubDetails/PubDetails";
import Layout from "../../components/Layout/Layout";

import {
	selectCurrentScreen,
	selectTransitionType,
} from "../../redux/slices/navigationSlice/navigationSlice";

import "./MainModule.css";

const MainModule = () => {
	const currentScreen = useAppSelector(selectCurrentScreen);
	const transitionTypes = useAppSelector(selectTransitionType);
	const nodeRef = useRef<any>(null);
	const [screen, setScreen] = useState(ROUTES.main.home.name);
	const [change, setChange] = useState(0);
	const [screenContent, setScreenContent] = useState<ReactElement>(<Home />);
	const [currentTransitionType, setCurrentTransitionType] = useState("in");

	useEffect(() => {
		if (screen !== currentScreen) {
			let content: null | ReactElement = null;

			switch (currentScreen.name) {
				default:
				case ROUTES.main.home.name:
					content = <Home />;
					break;
				case ROUTES.main.newPubRequest.step1.name:
				case ROUTES.main.newPubRequest.step2.name:
				case ROUTES.main.newPubRequest.step3.name:
				case ROUTES.main.newPubRequest.step4.name:
				case ROUTES.main.newPubRequest.newPubRequestConclusion.name:
					content = <NewPubRequestModule />;
					break;
				case ROUTES.main.pubDetails.name:
					content = <PubDetails />;
					break;
			}

			setScreen(currentScreen);
			setChange((prevState) => ++prevState);
			setScreenContent(content);
			setTimeout(() => {
				setCurrentTransitionType(transitionTypes);
			}, 600);
		}
	}, [currentScreen]);

	return (
		<SwitchTransition mode="out-in">
			<CSSTransition
				key={change}
				addEndListener={(done: () => void) => {
					nodeRef.current?.addEventListener(
						"transitionend",
						done,
						false,
					);
				}}
				classNames={currentTransitionType}
				nodeRef={nodeRef}
			>
				{change ? (
					<div ref={nodeRef}>
						<Layout>{screenContent}</Layout>
					</div>
				) : (
					<div ref={nodeRef}>
						<Layout>{screenContent}</Layout>
					</div>
				)}
			</CSSTransition>
		</SwitchTransition>
	);
};

export default MainModule;
