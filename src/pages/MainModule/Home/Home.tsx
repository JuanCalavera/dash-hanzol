import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { AiFillPlusCircle } from "react-icons/ai";

import Slider from "../../../components/Home/Slider/Slider";

import { selectPubs } from "../../../redux/slices/mainSlice/mainSelectors";
import { PubPiece } from "../../../redux/slices/mainSlice/mainInterfaces";

import logo from "../../../assets/logo.png";

import styles from "./Home.module.scss";
import { BiMenu, BiNoEntry } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import ReceiveCard from "../../../components/ReceiveCard/ReceiveCard";
import WarningCard from "../../../components/WarningCard/WarningCard";
import CardHome from "../../../components/CardHome/CardHome";
import Menu from "../../../components/Menu/Menu";
import { RiMessage2Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl, userType } from "../../../utils/auth"

const Home = () => {
	const [highLights, setHighLights] = useState<PubPiece[]>([]);
	const dispatch = useAppDispatch();
	const [getItem, setGetItem] = useState([]);
	const [agencySingle, setAgency] = useState<any>();
	const navigate = useNavigate();

	useEffect(() => {

		const user = userType(localStorage['token_dash']);

		user.then((res) => {
			if (res !== 'client') {
				navigate('/choose');
			}
		}).catch(() => {
			navigate('/choose');
		});


		axios.get( baseUrl + 'pub-piece', {
			headers: {
				'Authorization': localStorage['token_dash'],
				'Accept': 'Application/json'
			}
		}).then((response) => {
			setGetItem(response.data.pubs);
		})
			.catch(() => {
				navigate('/choose');
			});
	}, []);

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
			{getItem.length !== 0 && <div>

			{	<Menu
				imgUrl=''
				alt="brand"
				title='client'
				cnpj=''
				appear={toggle}
			/>}
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
						{getItem?.map((gets: any) => {
							return (
								<WarningCard
									status='null'
									imgUrl={gets.files_path}
								/>
							);
						})}
					</ReceiveCard>

					<Slider highLights={highLights} />


					{getItem?.map((gets: any, key: number) => {

						return (
							<CardHome
								title={gets.title}
								subtitle={'COD.' + gets.id}
								imgUrl={''}
								alt={gets.title}
								content={gets.description.slice(0, 50)}
								data={gets.created}
								status={gets.was_liked ? 'like' : 'unlike'}

							/>
						);
					})}
					<div
						className={styles.plus_btn_container}
						onClick={() => { navigate('/criar-solicitacoes') }}
					>
						<div className={styles.plus_btn_background}></div>
						<AiFillPlusCircle className={styles.plus_btn} />
					</div>
				</div>
				<div className={styles.bottom_menu}>
					<RiMessage2Line size={30} />
					<BsSearch size={30} />
					<GoGraph size={30} />
				</div>
			</div>}
			{getItem.length === 0 &&
				<div className={styles.error}>
					<h3>A agência não possui nenhuma solicitação no momento</h3>
					<BiNoEntry size={100} />
					<Link to={'/criar-solicitacoes'}>
						<p>Criar uma solicitação</p>
					</Link>
				</div>
			}
		</div>
	);
};

export default Home;

