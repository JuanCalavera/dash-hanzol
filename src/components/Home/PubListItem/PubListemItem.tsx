import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { MdOutlineMoreVert } from "react-icons/md";
import { useAppDispatch } from "../../../redux/hooks";

import { PubPiece } from "../../../redux/slices/mainSlice/mainInterfaces";
import { selectPub } from "../../../redux/slices/mainSlice/mainSlice";
import { navigate } from "../../../redux/slices/navigationSlice/navigationSlice";
import { ROUTES } from "../../../routes/routes";
import RatingRoundIcon from "../../RatingRoundIcon/RatingRoundIcon";

import styles from "./PubListItem.module.scss";

const PubListItem = (props: { pub: PubPiece }) => {
	const { pub } = props;
	const dispatch = useAppDispatch();

	const pubDetails = () => {
		dispatch(selectPub(pub));
		dispatch(
			navigate({ to: ROUTES.main.pubDetails, from: ROUTES.main.home }),
		);
	};

	let text = pub.description;
	// console.log(text.length);
	if (text.length > 145) text = text.slice(0, 143) + "...";

	let icon = null;

	if (pub.was_liked) icon = <RatingRoundIcon isLike={true} />;
	else if (pub.was_liked === false) icon = <RatingRoundIcon isLike={false} />;

	return (
		<div className={styles.item_container} onClick={pubDetails}>
			<img src={pub.file_url} alt="pub" />

			<div className={styles.text_container}>
				<div className={styles.title_block}>
					<h1>{pub.title}</h1>
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
