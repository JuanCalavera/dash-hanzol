import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";

import StepLayout from "../../../../components/PubRequest/StepLayout/StepLayout";

import { navigate } from "../../../../redux/slices/navigationSlice/navigationSlice";
import {
	addNewLink,
	removeLink,
} from "../../../../redux/slices/pubRequestSlice/pubRequestSlice";
import { selectPubRequestForm } from "../../../../redux/slices/pubRequestSlice/pubRequestSelectors";

import { ROUTES } from "../../../../routes/routes";

import styles from "./Step3.module.scss";
import FilesSliderSection from "../../../../components/PubRequest/FilesSliderSection/FilesSliderSection";
import CloseBtnIcon from "../../../../components/PubRequest/CloseBtnIcon/CloseBtnIcon";
import { isValidLink } from "../../../../utils/validate";

const Step3 = () => {
	const form = useAppSelector(selectPubRequestForm);
	const dispatch = useAppDispatch();
	const [newLink, setNewLink] = useState("");
	const [idCounter, setIdCounter] = useState(1);
	const [linkError, setLinkError] = useState(false);

	const nextStep = () => {
		dispatch(
			navigate({
				from: ROUTES.main.newPubRequest.step3,
				to: ROUTES.main.newPubRequest.step4,
			}),
		);
	};

	const addLink = () => {
		setLinkError(false);

		if (!isValidLink(newLink)) {
			setLinkError(true);
			alert("Links devem começar com 'http://' ou 'https://'");
			return;
		}

		dispatch(addNewLink({ title: newLink, id: idCounter }));
		setNewLink("");
		setIdCounter(idCounter + 1);
	};

	return (
		<StepLayout forward={nextStep}>
			<div className={styles.link_input_container}>
				<label>Links para referências</label>
				<div>
					<input
						type="text"
						value={newLink}
						onChange={(event: any) =>
							setNewLink(event.target.value)
						}
						className={`${linkError ? styles.error_input : ""}`}
					/>
				</div>
				<div className={styles.add_link_container}>
					<h3>Adicionar Links</h3>
					<AiFillPlusCircle
						className={styles.plus_btn}
						onClick={addLink}
					/>
				</div>
			</div>

			<ul className={styles.links_list}>
				{form.links.map((link) => (
					<li key={Math.random()}>
						<input type="text" value={link.title} readOnly />
						<CloseBtnIcon
							onClick={() => dispatch(removeLink(link.id))}
						/>
					</li>
				))}
			</ul>

			<FilesSliderSection />
		</StepLayout>
	);
};

export default Step3;
