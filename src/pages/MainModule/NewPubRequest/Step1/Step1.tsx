import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import FormSelectInput from "../../../../components/PubRequest/Form/FormSelectInput/FormSelectInput";
import StepLayout from "../../../../components/PubRequest/StepLayout/StepLayout";

import {
	selectPubRequestForm,
	selectPubTypes,
} from "../../../../redux/slices/pubRequestSlice/pubRequestSelectors";
import {
	selectSubType,
	selectType,
} from "../../../../redux/slices/pubRequestSlice/pubRequestSlice";
import { navigate } from "../../../../redux/slices/navigationSlice/navigationSlice";

import { ROUTES } from "../../../../routes/routes";

const Step1 = () => {
	const pubTypes = useAppSelector(selectPubTypes);
	const form = useAppSelector(selectPubRequestForm);
	const dispatch = useAppDispatch();
	const [pubTypeError, setPubTypeError] = useState(false);
	const [subPubTypeError, setSubPubTypeError] = useState(false);

	const handleTypeSelect = (selected: number) => {
		const type = pubTypes.find((type) => type.id === +selected);
		dispatch(selectType(type));
	};

	const handleSubTypeSelect = (selected: number) => {
		const type = form.pubType?.sub_types.find(
			(type) => type.id === +selected,
		);
		dispatch(selectSubType(type));
	};

	const nextStep = () => {
		setPubTypeError(false);
		setSubPubTypeError(false);

		if (!form.pubType || !form.pubSubType) {
			setPubTypeError(true);
			setSubPubTypeError(true);
			return;
		}

		dispatch(
			navigate({
				from: ROUTES.main.newPubRequest.step1,
				to: ROUTES.main.newPubRequest.step2,
			}),
		);
	};

	return (
		<StepLayout forward={nextStep}>
			<FormSelectInput
				label="Escolha um tema"
				options={pubTypes}
				onChange={(selected) => handleTypeSelect(selected)}
				placeholder="Selecione um tema"
				value={form.pubType?.id}
				error={pubTypeError}
			/>

			<FormSelectInput
				label="Detalhes do projeto"
				options={form.pubType?.sub_types ? form.pubType?.sub_types : []}
				onChange={(selected) => handleSubTypeSelect(selected)}
				placeholder={
					form.pubType?.question ? form.pubType?.question : ""
				}
				value={form.pubSubType?.id}
				error={subPubTypeError}
			/>
		</StepLayout>
	);
};

export default Step1;
