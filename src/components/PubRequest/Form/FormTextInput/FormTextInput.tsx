import React from "react";

import styles from "./FormTextInput.module.scss";

const FormTextInput = (props: {
	label: string;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	error: boolean;
}) => (
	<div className={styles.input_container}>
		<label>{props.label}</label>
		<textarea
			value={props.value}
			onChange={(event: any) => props.onChange(event.target.value)}
			placeholder={props.placeholder}
			className={`${props.error ? styles.error_input : ""}`}
		/>
	</div>
);

export default FormTextInput;
