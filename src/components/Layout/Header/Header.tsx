import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscBell } from "react-icons/vsc";

import logo from "../../../assets/logo.png";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentScreen } from "../../../redux/slices/navigationSlice/navigationSlice";
import { headerTypes } from "../../../routes/routes";

import styles from "./Header.module.scss";

const Header = (props: any) => {
	const currentScreen = useAppSelector(selectCurrentScreen);

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
			return <div className={styles.header}>BACK_WITH_TEXT</div>;
	}
};

export default Header;
