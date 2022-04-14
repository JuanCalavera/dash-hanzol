import React from "react";

import styles from "./FormSelectInput.module.scss";

interface Option {
	id: number;
	title: string;
}

const FormSelectInput = (props: {
	options: Option[];
	onChange: (value: number) => void;
	label: string;
}) => {
	return (
		<div className={styles.input_container}>
			<label>{props.label}</label>
			<select
				onChange={(event: any) => props.onChange(event.target.value)}
			>
				{props.options.map((option: Option) => (
					<option value={option.id}>{option.title}</option>
				))}
			</select>
		</div>
	);
};

export default FormSelectInput;
