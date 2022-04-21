import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MdAttachFile } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import {
	addFile,
	removeFile,
} from "../../../redux/slices/pubRequestSlice/pubRequestSlice";

import styles from "./FilesSliderSection.module.scss";
import { selectPubRequestForm } from "../../../redux/slices/pubRequestSlice/pubRequestSelectors";
import CloseBtnIcon from "../CloseBtnIcon/CloseBtnIcon";

const FilesSliderSection = () => {
	const dispatch = useAppDispatch();
	const form = useAppSelector(selectPubRequestForm);

	const uploadFile = (file: File) => {
		dispatch(addFile(file));
	};

	return (
		<>
			<div className={styles.upload_label}>
				<label>Fotos e vídeos</label>
			</div>

			<div>
				<label className={styles.upload_input}>
					Anexar foto ou vídeo
					<input
						type="file"
						hidden
						onChange={(event: any) =>
							uploadFile(event.target.files[0])
						}
					/>
					<MdAttachFile className={styles.attach_icon} />
				</label>
			</div>

			<Swiper spaceBetween={15} slidesPerView={2.5}>
				{form.files.map((file) => (
					<SwiperSlide className={styles.file_slide} key={file.name}>
						<div className={styles.file_image_container}>
							<img
								src={URL.createObjectURL(file)}
								alt={"Reference file " + file.name}
							/>
							<CloseBtnIcon
								onClick={() => dispatch(removeFile(file))}
								className={styles.close_btn}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default FilesSliderSection;
