import React from "react";

import logo from "../../assets/logo.png";

import styles from "./LoadingScreen.module.scss";

const LoadingScreen = () => (
	<div className={styles.loading_container}>
		<img src={logo} alt="Logo" />
	</div>
);

export default LoadingScreen;
