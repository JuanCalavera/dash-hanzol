import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import FormTextInput from "../../../../components/PubRequest/Form/FormTextInput/FormTextInput";
import StepLayout from "../../../../components/PubRequest/StepLayout/StepLayout";

import { navigate } from "../../../../redux/slices/navigationSlice/navigationSlice";
import {
	selectBudgetTypes,
	selectPubRequestForm,
} from "../../../../redux/slices/pubRequestSlice/pubRequestSelectors";
import {
	addBudget,
	changeTextInput,
	emptyForm,
	removeBudget,
	requestFormTextFields,
} from "../../../../redux/slices/pubRequestSlice/pubRequestSlice";
import { sendPubRequest } from "../../../../redux/slices/pubRequestSlice/pubRequestAsyncActions";

import { ROUTES } from "../../../../routes/routes";

import styles from "./Step4.module.scss";

const Step4 = () => {
	const dispatch = useAppDispatch();
	const form = useAppSelector(selectPubRequestForm);
	const budgetTypes = useAppSelector(selectBudgetTypes);

	const conclude = () => {
		if (!form.budget_types.length) {
			alert("Você precisa habilitar ao menos um tipo de orçamento");
			return;
		}

		dispatch(sendPubRequest())
			.unwrap()
			.then(() => {
				dispatch(emptyForm());

				dispatch(
					navigate({
						from: ROUTES.main.newPubRequest.step4,
						to: ROUTES.main.newPubRequest.newPubRequestConclusion,
					}),
				);
			})
			.catch((err) => {
				console.log(err.response);
				alert("Ocorreu um erro ao enviar o seu pedido");
			});
	};

	const handleCheck = (id: number, checked: boolean) => {
		if (checked) dispatch(removeBudget(id));
		else dispatch(addBudget(id));
	};

	return (
		<StepLayout forward={conclude} forwardText="Enviar Solicitação">
			<div className={styles.budget_types_container}>
				{budgetTypes.map((type) => {
					const checked = form.budget_types.find((t) => t === type.id)
						? true
						: false;

					return (
						<div className={styles.budget_container}>
							<div>
								<label>Tipo de orçamento</label>
							</div>

							<div className={styles.budget_label}>
								<label>{type.title}?</label>
							</div>

							<div className={styles.switch_container}>
								<label
									className={styles.switch}
									onChange={() =>
										handleCheck(type.id, checked)
									}
								>
									<input type="checkbox" checked={checked} />
									<span className={styles.slider}></span>
								</label>

								<label className={styles.check_label}>
									{checked ? "Sim" : "Não"}
								</label>
							</div>
						</div>
					);
				})}
			</div>

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
				error={false}
			/>
		</StepLayout>
	);
};

export default Step4;
