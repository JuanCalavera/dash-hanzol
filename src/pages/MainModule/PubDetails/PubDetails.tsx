import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { GoComment } from "react-icons/go";

import DataContainer from "../../../components/PubDetails/DataContainer/DataContainer";
import RatingActions from "../../../components/PubDetails/RatingActions/RatingActions";

import { selectCurrentPub } from "../../../redux/slices/mainSlice/mainSelectors";

import styles from "./PubDetails.module.scss";
import { AiFillCaretRight } from "react-icons/ai";
import { sendRating } from "../../../redux/slices/mainSlice/mainAsyncActions";
import { home } from "../../../redux/slices/navigationSlice/navigationSlice";

const PubDetails = () => {
	const dispatch = useAppDispatch();
	const pub = useAppSelector(selectCurrentPub);
	const [areBtnDisabled, setAreBtnDisabled] = useState(true);
	const [shouldShowInput, setShouldShowInput] = useState(false);
	const [isLike, setIsLike] = useState<boolean | null>(null);
	const [comment, setComment] = useState("");

	useEffect(() => {
		if (pub!.was_liked === null) {
			setAreBtnDisabled(false);
			setIsLike(null);
		} else if (pub!.was_liked === true) {
			setAreBtnDisabled(true);
			setIsLike(true);
		} else {
			setAreBtnDisabled(true);
			setIsLike(false);
		}
	}, [pub]);

	const handleRatingClick = (isLike: boolean) => {
		setIsLike(isLike);
		setShouldShowInput(true);
	};

	const handleSendRating = () => {
		dispatch(
			sendRating({ pubId: pub!.id, comment: comment, isLike: isLike! }),
		)
			.unwrap()
			.then((response) => {
				alert("Avaliação enviada");
				dispatch(home());
			})
			.catch((err) => {
				alert("Ocorreu um erro ao enviar a sua availiação");
				console.log(err);
			});
	};

	return (
		<>
			<div className={styles.details_page_container}>
				<DataContainer />

				<RatingActions
					onClick={handleRatingClick}
					btnsDisabled={areBtnDisabled}
					wasLiked={isLike}
				/>
			</div>

			{shouldShowInput && (
				<div className={styles.input_wrapper}>
					<GoComment className={styles.comment_icon} />

					<div className={styles.input_container}>
						<textarea
							value={comment}
							onChange={(event: any) =>
								setComment(event.target.value)
							}
							placeholder="O seu comentário aqui..."
						></textarea>
					</div>

					<button
						className={styles.send_btn}
						onClick={handleSendRating}
					>
						<AiFillCaretRight className={styles.send_icon} />
					</button>
				</div>
			)}
		</>
	);
};

export default PubDetails;
