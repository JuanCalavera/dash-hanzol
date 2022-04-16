import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

import StepLayout from "../../../../components/PubRequest/StepLayout/StepLayout";

import { navigate } from "../../../../redux/slices/navigationSlice/navigationSlice";
import {
	addNewLink,
	removeLink,
} from "../../../../redux/slices/pubRequestSlice/pubRequestSlice";
import { selectPubRequestForm } from "../../../../redux/slices/pubRequestSlice/pubRequestSelectors";

import { ROUTES } from "../../../../routes/routes";

import styles from "./Step3.module.scss";

const Step3 = () => {
	const form = useAppSelector(selectPubRequestForm);
	const dispatch = useAppDispatch();
	const [newLink, setNewLink] = useState("");
	const [idCounter, setIdCounter] = useState(1);

	const nextStep = () => {
		dispatch(
			navigate({
				from: ROUTES.main.newPubRequest.step3,
				to: ROUTES.main.newPubRequest.step4,
			}),
		);
	};

	const addLink = () => {
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
					/>
				</div>
				<div className={styles.add_link_contianer}>
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
						<IoCloseCircle
							onClick={() => dispatch(removeLink(link.id))}
							className={styles.close_icon}
						/>
					</li>
				))}
			</ul>

			<div className={styles.upload_label}>
				<label>Fotos e vídeos</label>
			</div>

			<div>
				<label className={styles.upload_input}>
					Anexar foto ou vídeo
					<input type="file" hidden />
					<MdAttachFile className={styles.attach_icon} />
				</label>
			</div>

			<div>slider de imagens</div>
		</StepLayout>
	);
};

export default Step3;
