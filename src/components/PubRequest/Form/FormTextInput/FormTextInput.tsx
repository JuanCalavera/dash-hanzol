import React from "react";

import styles from "./FormTextInput.module.scss";

const FormTextInput = (props: {
	label: string;
	value: string;
	onChange: (value: string) => void;
}) => {
	return (
		<div className={styles.input_container}>
			<label>{props.label}</label>
			<input
				type="text"
				value={props.value}
				onChange={(event: any) => props.onChange(event.target.value)}
			/>
		</div>
	);
};

export default FormTextInput;
