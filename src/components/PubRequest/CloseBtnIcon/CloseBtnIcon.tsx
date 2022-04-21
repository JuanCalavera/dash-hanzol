import React from "react";
import { IoCloseCircle } from "react-icons/io5";

import styles from "./CloseBtnIcon.module.scss";

const CloseBtnIcon = (props: { onClick: () => void; className?: string }) => (
	<IoCloseCircle
		onClick={() => props.onClick()}
		className={`${styles.close_icon} ${props.className}`}
	/>
);

export default CloseBtnIcon;
