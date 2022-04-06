import React from "react";
import "./App.css";
import AuthModule from "./pages/Auth/AuthModule";
import { useAppSelector } from "./redux/hooks";
import { selectToken } from "./redux/slices/authSlice/authSelectors";

function App() {
	const token = useAppSelector(selectToken);
	let content = null;

	if (token) content = <div>home module</div>;
	else content = <AuthModule />;

	return (
		<div className="App">
			{content}
			{/* <div>loading screen</div> */}

			{/* <div className={styles.loading_screen}></div> */}
		</div>
	);
}

export default App;
