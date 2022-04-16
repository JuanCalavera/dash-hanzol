import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import StepLayout from "../../../../components/PubRequest/StepLayout/StepLayout";
import FormTextInput from "../../../../components/PubRequest/Form/FormTextInput/FormTextInput";

import { navigate } from "../../../../redux/slices/navigationSlice/navigationSlice";
import {
	changeTextInput,
	requestFormTextFields as textFields,
} from "../../../../redux/slices/pubRequestSlice/pubRequestSlice";
import { selectPubRequestForm } from "../../../../redux/slices/pubRequestSlice/pubRequestSelectors";

import { ROUTES } from "../../../../routes/routes";

import styles from "./Step2.module.scss";

const Step2 = () => {
	const dispatch = useAppDispatch();
	const form = useAppSelector(selectPubRequestForm);

	const nextStep = () => {
		dispatch(
			navigate({
				from: ROUTES.main.newPubRequest.step2,
				to: ROUTES.main.newPubRequest.step3,
			}),
		);
	};

	const handleSizeChange = (value: string) => {
		dispatch(changeTextInput({ field: textFields.SIZE, newValue: value }));
	};

	const handleDateChange = (value: string) => {
		dispatch(
			changeTextInput({
				field: textFields.DELIVER_DATE,
				newValue: value,
			}),
		);
	};

	return (
		<StepLayout forward={nextStep}>
			<FormTextInput
				value={form.exhibitionDescription}
				label="Onde será exibido ou usado?"
				onChange={(value) =>
					dispatch(
						changeTextInput({
							newValue: value,
							field: textFields.EXHIBITION_DESCRIPTION,
						}),
					)
				}
			/>

			<div className={styles.date_container}>
				<label>Em que data devemos entregar?</label>
				<div>
					<input
						type="date"
						value={form.deliver_date}
						onChange={(event: any) =>
							handleDateChange(event.target.value)
						}
					/>
				</div>
			</div>

			<div className={styles.text_input_container}>
				<label>Qual tamanho desejado?</label>
				<div>
					<input
						type="text"
						value={form.size}
						onChange={(event: any) =>
							handleSizeChange(event.target.value)
						}
					/>
				</div>
			</div>
		</StepLayout>
	);
};

export default Step2;
