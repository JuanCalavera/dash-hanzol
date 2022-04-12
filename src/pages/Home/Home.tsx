import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { fetchPubs } from "../../redux/slices/mainSlice/mainAsyncActions";
import { selectPubs } from "../../redux/slices/mainSlice/mainSelectors";
import { PubPiece } from "../../redux/slices/mainSlice/mainInterfaces";

import styles from "./Home.module.scss";
import Slider from "../../components/Layout/Home/Slider/Slider";
import PubListItem from "../../components/Layout/Home/PubListItem/PubListemItem";

const Home = (props: any) => {
	const [highLights, setHighLights] = useState<PubPiece[]>([]);
	const pubs = useAppSelector(selectPubs);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPubs());
	}, []);

	useEffect(() => {
		setHighLights(pubs.slice(0, 5));
	}, [pubs]);

	return (
		<div className={styles.home_container}>
			<Slider highLights={highLights} />
			<h1 style={{ margin: 0 }}>indicadores vão aqui</h1>

			{pubs.map((pub) => (
				<PubListItem pub={pub} />
			))}
		</div>
	);
};

export default Home;
