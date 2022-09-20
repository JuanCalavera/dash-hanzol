import axios from "axios";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo-black.png";
import { useAppDispatch } from "../../../redux/hooks";
import { login } from "../../../redux/slices/authSlice/authAsyncActions";
import { baseUrl } from "../../../utils/auth";
import { cnpjPreProcessor } from "../../../utils/validate";

import styles from "./Login.module.scss";

const Login = () => {
	const [cnpj, setCnpj] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const handleCnpjChange = (value: string) => {
		const cnpj = cnpjPreProcessor(value);

		setCnpj(cnpj);
	};

	function submitLogin() {
		let cnpjRaw = cnpj.replaceAll('.', '');
		cnpjRaw = cnpjRaw.replaceAll('/', '');
		cnpjRaw = cnpjRaw.replaceAll('-', '');

		console.log(cnpjRaw);
		
		
		let data = {
			cnpj: cnpjRaw,
			password: password
		};

		axios.post(baseUrl + 'agency/login', data, {
			headers: {
				'Accept': 'Application/json'
			}
		}).then((response) => {

			localStorage['token_dash'] = 'Bearer ' + response.data.authorization[1];
			setIsLoading(false);
            navigate('/minhas-solicitacoes');

		})
		.catch(() => {
			alert('Usuário Inválido');
			setIsLoading(false);
			setPassword('')
		});


	}

	const handleSubmit = (event: any) => {
		event.preventDefault();

		setIsLoading(true);
	};

	document.body.style.background = "white";

	return (
		<form autoComplete="new-password" onSubmit={handleSubmit}>
			<div className={styles.login_container}>
				<div className={styles.logo_container} onClick={() => {
					navigate('/home');
				}}>
					<img src={logo} alt="logo" />
					<h1>
						Bem vindo ao <strong>Dash</strong>
					</h1>
				</div>
				<input autoComplete="off" name="hidden" type="text" hidden />
				<div className={styles.input_container}>
					<label>CNPJ</label>
					<input
						type="text"
						name="cnpj"
						autoComplete="off"
						maxLength={18}
						className={styles.cnpj_input}
						value={cnpj}
						onChange={(event) =>
							handleCnpjChange(event.target.value)
						}
					/>
					<label>Senha</label>
					<input
						type="password"
						name="password"
						autoComplete="off"
						className={styles.password_input}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<Link to="/esqueci-a-senha">
						<span>Esqueci a senha</span>
					</Link>
				</div>

				<button onClick={submitLogin} className={styles.submit_btn} disabled={isLoading}>
					{isLoading ? (
						<TailSpin color="black" height={18} width={28} />
					) : (
						"Entrar"
					)}
				</button>

				<div className={styles.to_register_section}>
					<div className={styles.text_container}>
						<h2>Não tem uma conta?</h2>
						<h2 className={styles.register_link}>Fazer cadastro</h2>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Login;
