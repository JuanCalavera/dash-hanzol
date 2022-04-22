import React from "react";
import { MdThumbDown, MdThumbUpAlt } from "react-icons/md";

import styles from "./RatingActions.module.scss";

const RatingActions = (props: {
	onClick: (isLike: boolean) => void;
	wasLiked: boolean | null;
	btnsDisabled: boolean;
}) => (
	<div className={styles.rating_actions}>
		<button
			className={`${styles.like_btn} ${
				props.wasLiked === true ? styles.active_btn : ""
			}`}
			disabled={props.btnsDisabled}
			onClick={() => props.onClick(true)}
		>
			<MdThumbUpAlt className={styles.like_icon} />
			<span>Gostei</span>
		</button>

		<button
			className={`${styles.dislike_btn} ${
				props.wasLiked === false ? styles.active_btn : ""
			}`}
			disabled={props.btnsDisabled}
			onClick={() => props.onClick(false)}
		>
			<MdThumbDown className={styles.dislike_icon} />
			<span>
				<strong>Não</strong> gostei
			</span>
		</button>
	</div>
);

export default RatingActions;
