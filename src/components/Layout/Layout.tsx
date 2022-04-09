import React, { ReactElement } from "react";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";

const Layout = (props: {
	children: ReactElement | ReactElement[] | string;
}) => {
	return (
		<div className={styles.layout}>
			<Header />
			{props.children}
		</div>
	);
};

export default Layout;
