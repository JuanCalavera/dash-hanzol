import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import { PubPiece } from "../../../redux/slices/mainSlice/mainInterfaces";

import styles from "./Slider.module.scss";
import "swiper/css";

const Slider = (props: { highLights: PubPiece[] }) => {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={1.3}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{props.highLights.map((pub) => (
				<SwiperSlide className={styles.highlight_slider} key={pub.id}>
					<div className={styles.highlight}>
						<img src={pub.file_url} alt="highlight" />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
