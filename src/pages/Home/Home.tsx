import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { fetchPubs } from "../../redux/slices/mainSlice/mainAsyncActions";

import "swiper/css";
import styles from "./Home.module.scss";
import { selectPubs } from "../../redux/slices/mainSlice/mainSelectors";
import { PubPiece } from "../../redux/slices/mainSlice/mainInterfaces";

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
		<>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{highLights.map((pub) => (
					<SwiperSlide>{pub.title}</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Home;
