import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { AiFillPlusCircle } from "react-icons/ai";

import PubListItem from "../../../components/Home/PubListItem/PubListemItem";
import Slider from "../../../components/Home/Slider/Slider";

import { selectPubs } from "../../../redux/slices/mainSlice/mainSelectors";
import { PubPiece } from "../../../redux/slices/mainSlice/mainInterfaces";
import { emptyForm } from "../../../redux/slices/pubRequestSlice/pubRequestSlice";
import { navigate } from "../../../redux/slices/navigationSlice/navigationSlice";

import logo from "../../../assets/logo.png";

import { ROUTES } from "../../../routes/routes";

import styles from "./Home.module.scss";
import { BiBarcode, BiExit, BiMenu } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import ReceiveCard from "../../../components/ReceiveCard/ReceiveCard";
import WarningCard from "../../../components/WarningCard/WarningCard";
import CardHome from "../../../components/CardHome/CardHome";
import Menu from "../../../components/Menu/Menu";

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

	let [toggle, setToggle] = useState<boolean>(false);
	let [classDiv, setClassDiv] = useState<string>(styles.out + ' ' + styles.d_none);

	function ToggleInvisible(e: boolean) {
		if (!e) {
			setClassDiv(classDiv = styles.out);
			setToggle(!toggle)
		} else if (e) {
			setClassDiv(classDiv = styles.out + ' ' + styles.d_none);
			setToggle(!toggle)
		}
	}

	document.body.style.background = "black";
	return (
		<div>
			<Menu
				imgUrl="https://logosandtypes.com/wp-content/uploads/2020/06/carrefour.png"
				alt="brand"
				title="Carrefour RJ"
				cnpj="44339734837"
				appear={toggle}
			/>
			<div className={classDiv} onClick={() => ToggleInvisible(toggle)}></div>
			<div className={styles.home_container}>
				<div className={styles.header}>
					<div onClick={() => ToggleInvisible(toggle)}>
						<BiMenu size={30} className={styles.menu_icon} />
					</div>
					<img src={logo} width={'20%'} height="auto" alt="dash" />
					<IoNotifications size={20} className={styles.menu_notification} />
				</div>

				<ReceiveCard type="default">
					<WarningCard
						status='null'
						imgUrl="https://sm.ign.com/t/ign_br/screenshot/default/sandman-conheca-elenco-serie-netflix_wswg.1200.jpg"
					/>
					<WarningCard
						status='null'
						imgUrl="https://sm.ign.com/t/ign_br/screenshot/default/sandman-conheca-elenco-serie-netflix_wswg.1200.jpg"
					/>
					<WarningCard
						status='null'
						imgUrl="https://sm.ign.com/t/ign_br/screenshot/default/sandman-conheca-elenco-serie-netflix_wswg.1200.jpg"
					/>
					<WarningCard
						status='null'
						imgUrl="https://sm.ign.com/t/ign_br/screenshot/default/sandman-conheca-elenco-serie-netflix_wswg.1200.jpg"
					/>
				</ReceiveCard>

				<Slider highLights={highLights} />

				<CardHome
					title='Mussum Ipsum'
					subtitle="COD. 8000"
					imgUrl="https://sing-it.co.uk/wp-content/uploads/2020/11/Band-in-concrete-room-scaled.jpg"
					alt="band"
					content="cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Si num tem leite então bota uma pinga aí cumpadi!"
					status="like"

				/>
				<CardHome
					title='Mussum Ipsum'
					subtitle="COD. 8000"
					imgUrl="https://sing-it.co.uk/wp-content/uploads/2020/11/Band-in-concrete-room-scaled.jpg"
					alt="band"
					content="cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Si num tem leite então bota uma pinga aí cumpadi!"
					status="unlike"

				/>

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
		</div>
	);
};

export default Home;
