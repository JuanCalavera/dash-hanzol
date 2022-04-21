import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { MdThumbDown, MdThumbUpAlt } from "react-icons/md";
import RatingRoundIcon from "../../../components/RatingRoundIcon/RatingRoundIcon";
import { useAppSelector } from "../../../redux/hooks";

import { selectCurrentPub } from "../../../redux/slices/mainSlice/mainSelectors";

import styles from "./PubDetails.module.scss";

const PubDetails = () => {
	const pub = useAppSelector(selectCurrentPub);
	const [isFullImage, setIsFullImage] = useState(true);

	let icon = null;

	if (pub!.was_liked) icon = <RatingRoundIcon isLike={true} lg />;
	else if (pub!.was_liked === false)
		icon = <RatingRoundIcon isLike={false} lg />;

	return (
		<div className={styles.details_page_container}>
			{isFullImage ? (
				<div
					className={`${styles.details_data_container} ${styles.full_img}`}
				>
					<img src={pub!.file_url} alt="Arquivo da publicidade" />

					<div className={styles.text_container}>
						<h1>{pub!.title}</h1>
						<h3>Cod. {pub!.id}</h3>
						<BsChevronCompactDown
							className={styles.expand_btn}
							onClick={() => setIsFullImage(false)}
						/>
					</div>

					<div className={styles.right_top_icon_container}>
						{icon}
					</div>
				</div>
			) : (
				<div
					className={`${styles.details_data_container} ${styles.half_img}`}
				>
					<img
						src={pub!.file_url}
						alt="Arquivo da publicidade"
						onClick={() => setIsFullImage(true)}
					/>

					<div className={styles.text_container}>
						<h3>Cod. {pub!.id}</h3>
						<h1>{pub!.title}</h1>
						<p>{pub?.description}</p>
					</div>
				</div>
			)}

			<div
				className={styles.rating_actions}
				style={{ paddingBottom: !isFullImage ? "1.5rem" : "" }}
			>
				<button
					className={`${styles.like_btn} ${
						pub!.was_liked === false ? "" : styles.active_btn
					}`}
				>
					<MdThumbUpAlt className={styles.like_icon} />
					<span>Gostei</span>
				</button>

				<button
					className={`${styles.dislike_btn} ${
						pub!.was_liked === false ? styles.active_btn : ""
					}`}
				>
					<MdThumbDown className={styles.dislike_icon} />
					<span>
						<strong>Não</strong> gostei
					</span>
				</button>
			</div>
		</div>
	);
};

export default PubDetails;
