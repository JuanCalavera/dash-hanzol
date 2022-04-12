import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { MdOutlineMoreVert } from "react-icons/md";

import { PubPiece } from "../../../../redux/slices/mainSlice/mainInterfaces";

import styles from "./PubListItem.module.scss";

const PubListItem = (props: { pub: PubPiece }) => {
	const { pub } = props;

	let text = pub.description;
	// console.log(text.length);
	if (text.length > 145) text = text.slice(0, 143) + "...";

	let icon = null;

	if (pub.was_liked)
		icon = (
			<div className={styles.like_container}>
				<AiFillLike className={styles.icon_like} />
			</div>
		);
	else if (pub.was_liked === false)
		icon = (
			<div className={styles.dislike_container}>
				<AiFillDislike className={styles.icon_dislike} />
			</div>
		);

	return (
		<div className={styles.item_container}>
			<img src={pub.file_url} alt="pub" />

			<div className={styles.text_container}>
				<div className={styles.title_block}>
					<h1>{pub.title} d</h1>
					<h2>Cod. {pub.id}</h2>
				</div>

				<p>{text}</p>

				<h3>{pub.created}</h3>
			</div>

			<div className={styles.upper_right_container}>
				{icon}
				<MdOutlineMoreVert className={styles.more_btn} />
			</div>
		</div>
	);
};

export default PubListItem;
