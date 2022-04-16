import React, { ReactElement, useRef, useState } from "react";
import { BsCaretRight } from "react-icons/bs";
import { BiCaretRight } from "react-icons/bi";

import styles from "./StepLayout.module.scss";

const StepLayout = (props: {
	children: ReactElement | ReactElement[] | string;
	forward: () => void;
	forwardText?: string;
}) => {
	return (
		<div className={styles.step_layout}>
			<div>{props.children}</div>

			<div className={styles.forward_btn_container}>
				<label>{props.forwardText ?? "Avançar"}</label>
				<BsCaretRight
					className={styles.arrow_btn}
					onClick={() => props.forward()}
				/>
			</div>
		</div>
	);
};

export default StepLayout;
