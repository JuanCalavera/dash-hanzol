import axios from "axios";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo-black.png";
import { useAppDispatch } from "../../../redux/hooks";

import styles from "./LoginUser.module.scss";

const LoginUser = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	function submitLogin() {
		let data = {
			email: email,
			password: password
		};

		axios.post('http://127.0.0.1:8000/api/client/login', data, {
			headers: {
				'Accept': 'Application/json'
			}
		}).then((response) => {

            localStorage['token_dash'] = 'Bearer ' + response.data.authorization[1];
			setIsLoading(false);
            navigate('/home');

		})
		.catch(() => {
			alert('Usuário Inválido');
			setIsLoading(false);
		});

            
	}
    

	const handleSubmit = (event: any) => {
		event.preventDefault();

        if(email.search("@") === -1 || email.search(".com") === -1){
            alert('Email inválido');
        }   

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
					<label>Email</label>
					<input
						type="text"
						name="email"
						autoComplete="on"
						className={styles.cnpj_input}
						value={email}
						onChange={(event) =>
							setEmail(event.target.value)
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

export default LoginUser;
