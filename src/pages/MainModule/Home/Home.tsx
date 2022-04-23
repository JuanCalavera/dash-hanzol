import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { AiFillPlusCircle } from "react-icons/ai";

import PubListItem from "../../../components/Home/PubListItem/PubListemItem";
import Slider from "../../../components/Home/Slider/Slider";

import { selectPubs } from "../../../redux/slices/mainSlice/mainSelectors";
import { PubPiece } from "../../../redux/slices/mainSlice/mainInterfaces";
import { emptyForm } from "../../../redux/slices/pubRequestSlice/pubRequestSlice";
import { navigate } from "../../../redux/slices/navigationSlice/navigationSlice";

import { ROUTES } from "../../../routes/routes";

import styles from "./Home.module.scss";

const Home = () => {
	const [highLights, setHighLights] = useState<PubPiece[]>([]);
	const pubs = useAppSelector(selectPubs);
	const dispatch = useAppDispatch();

	useEffect(() => {
		setHighLights(pubs.slice(0, 5));
	}, [pubs]);

	const openPubRequestForm = () => {
		dispatch(emptyForm());
		dispatch(
			navigate({
				to: ROUTES.main.newPubRequest.step1,
				from: ROUTES.main.home,
			}),
		);
	};

	return (
		<div className={styles.home_container}>
			<Slider highLights={highLights} />

			{pubs.map((pub) => (
				<PubListItem pub={pub} key={pub.id} />
			))}

			<div
				className={styles.plus_btn_container}
				onClick={openPubRequestForm}
			>
				<div className={styles.plus_btn_background}></div>
				<AiFillPlusCircle className={styles.plus_btn} />
			</div>
		</div>
	);
};

export default Home;
