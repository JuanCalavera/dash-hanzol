import React, { useState } from "react";

import logo from "../../../assets/logo-black.png";
import { useAppDispatch } from "../../../redux/hooks";
import { login } from "../../../redux/slices/authSlice/authAsyncActions";
import { cnpjPreProcessor } from "../../../utils/validate";

import styles from "./Login.module.scss";

const Login = () => {
	const [cnpj, setCnpj] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useAppDispatch();

	const handleCnpjChange = (value: string) => {
		const cnpj = cnpjPreProcessor(value);

		setCnpj(cnpj);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		dispatch(login({ cnpj, password }));
	};

	return (
		<form autoComplete="new-password" onSubmit={handleSubmit}>
			<div className={styles.login_container}>
				<div className={styles.logo_container}>
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
					<span>Esqueci a senha</span>
				</div>

				<button className={styles.submit_btn}>Entrar</button>

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
