import React from "react";

import logo from "../../../assets/Principal_64.png";

import styles from "./Login.module.scss";

const Login = () => {
	return (
		<form autoComplete="new-password">
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
					/>
					<label>Senha</label>
					<input
						type="password"
						name="password"
						autoComplete="off"
						className={styles.password_input}
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
