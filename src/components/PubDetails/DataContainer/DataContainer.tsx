import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { useAppSelector } from "../../../redux/hooks";

import RatingRoundIcon from "../../RatingRoundIcon/RatingRoundIcon";

import { selectCurrentPub } from "../../../redux/slices/mainSlice/mainSelectors";

import styles from "./DataContainer.module.scss";

const DataContainer = () => {
	const pub = useAppSelector(selectCurrentPub);
	const [isFullImage, setIsFullImage] = useState(true);

	let icon = null;

	if (pub!.was_liked) icon = <RatingRoundIcon isLike={true} lg />;
	else if (pub!.was_liked === false)
		icon = <RatingRoundIcon isLike={false} lg />;

	return (
		<>
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
					<div className={styles.image_container}>
						<img
							src={pub!.file_url}
							alt="Arquivo da publicidade"
							onClick={() => setIsFullImage(true)}
						/>
					</div>
					<div className={styles.text_container}>
						<h3>Cod. {pub!.id}</h3>
						<h1>{pub!.title}</h1>
						<p>{pub!.description}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default DataContainer;
