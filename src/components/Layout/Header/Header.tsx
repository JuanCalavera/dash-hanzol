import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscBell } from "react-icons/vsc";
import { IoArrowBackSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import {
	back,
	selectCurrentScreen,
} from "../../../redux/slices/navigationSlice/navigationSlice";

import { headerTypes } from "../../../routes/routes";

import logo from "../../../assets/logo.png";

import styles from "./Header.module.scss";

const Header = () => {
	const currentScreen = useAppSelector(selectCurrentScreen);
	const dispatch = useAppDispatch();

	const navigateBack = () => {
		dispatch(back());
	};

	switch (currentScreen.headerType) {
		default:
		case headerTypes.HOME:
			return (
				<div className={styles.header}>
					<GiHamburgerMenu className={styles.menu} />
					<img src={logo} alt="logo" />
					<VscBell className={styles.bell} />
				</div>
			);
		case headerTypes.BACK_WITHOUT_TEXT:
			return <div className={styles.header}>BACK_WITHOUT_TEXT</div>;

		case headerTypes.BACK_WITH_TEXT:
			return (
				<div className={styles.header}>
					<button className={styles.back_btn} onClick={navigateBack}>
						<IoArrowBackSharp className={styles.back_icon} />
					</button>
					<h1>{currentScreen.headerText}</h1>
					<div className={styles.placeholder_div}>A</div>
				</div>
			);

		case headerTypes.WITHOUT_HEADER:
			return <div></div>;
	}
};

export default Header;
