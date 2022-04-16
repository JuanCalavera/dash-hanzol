import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import FormTextInput from "../../../../components/PubRequest/Form/FormTextInput/FormTextInput";
import StepLayout from "../../../../components/PubRequest/StepLayout/StepLayout";

import { navigate } from "../../../../redux/slices/navigationSlice/navigationSlice";
import { selectPubRequestForm } from "../../../../redux/slices/pubRequestSlice/pubRequestSelectors";
import {
	changeTextInput,
	requestFormTextFields,
} from "../../../../redux/slices/pubRequestSlice/pubRequestSlice";

import { ROUTES } from "../../../../routes/routes";

import styles from "./Step4.module.scss";

const Step4 = () => {
	const dispatch = useAppDispatch();
	const form = useAppSelector(selectPubRequestForm);

	const conclude = () => {
		dispatch(
			navigate({
				from: ROUTES.main.newPubRequest.step4,
				to: ROUTES.main.newPubRequest.newPubRequestConclusion,
			}),
		);
	};

	return (
		<StepLayout forward={conclude} forwardText="Enviar Solicitação">
			<div>tipos de orçamento</div>

			<FormTextInput
				value={form.description}
				label="Comentário adicional"
				onChange={(value) =>
					dispatch(
						changeTextInput({
							field: requestFormTextFields.DESCRIPTION,
							newValue: value,
						}),
					)
				}
				placeholder="Insira um comentário"
			/>
		</StepLayout>
	);
};

export default Step4;
