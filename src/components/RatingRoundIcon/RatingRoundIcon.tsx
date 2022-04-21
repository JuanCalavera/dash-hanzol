import React from "react";
import { MdThumbDown, MdThumbUpAlt } from "react-icons/md";

import styles from "./RatingRoundIcon.module.scss";

const RatingRoundIcon = (props: { isLike: boolean; lg?: boolean }) => {
	if (props.isLike)
		return (
			<div
				className={`${styles.like_container} ${
					props.lg ? styles.large_icon : ""
				}`}
			>
				<MdThumbUpAlt className={styles.icon_like} />
			</div>
		);
	else
		return (
			<div
				className={`${styles.dislike_container} ${
					props.lg ? styles.large_icon : ""
				}`}
			>
				<MdThumbDown className={styles.icon_dislike} />
			</div>
		);
};

export default RatingRoundIcon;
