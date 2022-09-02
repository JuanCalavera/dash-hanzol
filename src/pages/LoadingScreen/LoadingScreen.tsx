import React, { useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";

import styles from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
	document.body.style.background = "black"
	const styleStroke = {
		stroke: '#ecbd00',
		stroke_width: 2
	}

	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/choose');
		}, 3000)
	});

	return <div>
		<svg height="400" width="210" className={styles.left}>
			<line x1="0" y1="0" x2="200" y2="200" style={styleStroke} />
			<line x1="200" y1="200" x2="0" y2="400" style={styleStroke} />
		</svg>
		
		<svg height="400" width="210" className={styles.left_first}>
			<line x1="0" y1="0" x2="200" y2="200" style={styleStroke} />
			<line x1="200" y1="200" x2="0" y2="400" style={styleStroke} />
		</svg>

		<svg height="400" width="210" className={styles.left_second}>
			<line x1="0" y1="0" x2="200" y2="200" style={styleStroke} />
			<line x1="200" y1="200" x2="0" y2="400" style={styleStroke} />
		</svg>

		<div className={styles.loading_container}>
			<img src={logo} alt="Logo" />
		</div>

		<svg height="400" width="210" className={styles.right}>
			<line x1="200" y1="0" x2="0" y2="200" style={styleStroke} />
			<line x1="0" y1="200" x2="200" y2="400" style={styleStroke} />
		</svg>

		<svg height="400" width="210" className={styles.right_first}>
			<line x1="200" y1="0" x2="0" y2="200" style={styleStroke} />
			<line x1="0" y1="200" x2="200" y2="400" style={styleStroke} />
		</svg>
	</div>
};

export default LoadingScreen;
