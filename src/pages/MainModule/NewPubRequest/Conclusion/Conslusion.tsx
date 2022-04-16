import React from "react";
import { VscBell } from "react-icons/vsc";
import { RiHome2Line } from "react-icons/ri";

import styles from "./Conclusion.module.scss";
import { useAppDispatch } from "../../../../redux/hooks";
import { home } from "../../../../redux/slices/navigationSlice/navigationSlice";

const Conclusion = () => {
	const dispatch = useAppDispatch();

	const navigateHome = () => {
		dispatch(home());
	};

	return (
		<div className={styles.conclusion_container}>
			<h1>Obrigado pela solicitação</h1>
			<h2>Acompanhe o desenvolvimento pelo seu painel e notificações</h2>
			<VscBell className={styles.bell} />
			imagem
			<div className={styles.home_container} onClick={navigateHome}>
				<RiHome2Line className={styles.home_icon} />
			</div>
			<h2>Voltar ao Home</h2>
		</div>
	);
};

export default Conclusion;
