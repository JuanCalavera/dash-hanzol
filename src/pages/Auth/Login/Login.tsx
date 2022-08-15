import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo-black.png";
import { useAppDispatch } from "../../../redux/hooks";
import { login } from "../../../redux/slices/authSlice/authAsyncActions";
import { cnpjPreProcessor, isValidCnpj } from "../../../utils/validate";

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

	const handleSubmit = (event: any) => {
		event.preventDefault();

		setIsLoading(true);

		if (!isValidCnpj(cnpj)) {
			alert("Cnpj inválido");
			setIsLoading(false);
			return;
		}

		dispatch(login({ cnpj, password }))
			.unwrap()
			.catch(() => {
				alert("Credenciais incorretas");
				setIsLoading(false);
			});
	};

	document.body.style.background = "white";

	return (
		<form autoComplete="new-password" onSubmit={handleSubmit}>
			<div className={styles.login_container}>
				<div className={styles.logo_container} onClick={() => {
					navigate('/home');
				}}>
					<img src={logo} alt="Logo" />
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

				<button className={styles.submit_btn} disabled={isLoading}>
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
