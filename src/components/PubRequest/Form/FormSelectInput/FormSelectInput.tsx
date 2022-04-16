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
	placeholder: string;
	value?: number;
	error: boolean;
}) => (
	<div className={styles.form_select_container}>
		<label>{props.label}</label>
		<div className={styles.input_container}>
			<select
				onChange={(event: any) => props.onChange(event.target.value)}
				value={props.value ?? -1}
				style={{ color: props.value ? "" : "#3f3f3fa2" }}
				className={`${props.error ? styles.select_error : ""}`}
			>
				<option
					value="-1"
					disabled
					hidden
					className={styles.placeholder}
				>
					{props.placeholder}
				</option>
				{props.options.map((option: Option) => (
					<option
						value={option.id}
						key={option.id}
						className={styles.option}
					>
						{option.title}
					</option>
				))}
			</select>
		</div>
	</div>
);

export default FormSelectInput;
