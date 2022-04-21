import React from "react";
import { VscBell } from "react-icons/vsc";
import { RiHome2Line } from "react-icons/ri";
import { useAppDispatch } from "../../../../redux/hooks";

import { home } from "../../../../redux/slices/navigationSlice/navigationSlice";

import conclusionImage from "../../../../assets/FinalizaçãoB.png";

import styles from "./Conclusion.module.scss";

const Conclusion = () => {
	const dispatch = useAppDispatch();

	const navigateHome = () => {
		dispatch(home());
	};

	return (
		<div className={styles.conclusion_container}>
			<div className={styles.text_container}>
				<h1>Obrigado pela solicitação</h1>
				<h2>
					Acompanhe o desenvolvimento pelo seu painel e notificações
				</h2>
				<VscBell className={styles.bell} />
			</div>

			<div className={styles.image_container}>
				<img src={conclusionImage} alt="Conclusion" />
			</div>

			<div className={styles.home_container}>
				<div
					className={styles.home_icon_container}
					onClick={navigateHome}
				>
					<RiHome2Line className={styles.home_icon} />
				</div>
				<h2>Voltar ao Home</h2>
			</div>
		</div>
	);
};

export default Conclusion;
