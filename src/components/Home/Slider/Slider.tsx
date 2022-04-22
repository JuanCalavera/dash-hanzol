import React, { useState } from "react";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import { AiFillCaretRight } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";

import { PubPiece } from "../../../redux/slices/mainSlice/mainInterfaces";

import styles from "./Slider.module.scss";
import "swiper/css";

const Slider = (props: { highLights: PubPiece[] }) => {
	const [activeSlide, setActiveSlide] = useState(0);

	const toLast = (swiper: any) => {
		swiper.slideTo(props.highLights.length - 1);
	};

	const toFirst = (swiper: any) => {
		swiper.slideTo(0);
	};

	let indicators = null;

	if (activeSlide === 0) {
		indicators = (
			<div className={styles.arrows_container}>
				<FullArrow />
				<OutlinedLgArrow />
				<OutlinedSmArrow onClick={toLast} />
			</div>
		);
	} else if (activeSlide === props.highLights.length - 1) {
		indicators = (
			<div className={styles.arrows_container}>
				<OutlinedSmArrow onClick={toFirst} />
				<OutlinedLgArrow />
				<FullArrow />
			</div>
		);
	} else {
		indicators = (
			<div className={styles.arrows_container}>
				<OutlinedLgArrow />
				<FullArrow />
				<OutlinedLgArrow />
			</div>
		);
	}

	return (
		<>
			<Swiper
				spaceBetween={20}
				slidesPerView={1.3}
				onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
			>
				{props.highLights.map((pub) => (
					<SwiperSlide
						className={styles.highlight_slider}
						key={pub.id}
					>
						<div className={styles.highlight}>
							<img src={pub.file_url} alt="highlight" />
						</div>
					</SwiperSlide>
				))}
				{indicators}
			</Swiper>
		</>
	);
};

const FullArrow = () => <AiFillCaretRight className={styles.full_arrow} />;
const OutlinedLgArrow = () => (
	<BiRightArrow className={styles.outlined_lg_arrow} />
);
const OutlinedSmArrow = (props: { onClick: (swiper: any) => void }) => {
	const swiper = useSwiper();

	return (
		<BiRightArrow
			onClick={() => props.onClick(swiper)}
			className={styles.outlined_sm_arrow}
		/>
	);
};

export default Slider;
