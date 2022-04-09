import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import AuthModule from "./pages/Auth/AuthModule";
import MainModule from "./pages/MainModule/MainModule";

import { getCsrfToken } from "./redux/slices/authSlice/authAsyncActions";
import { selectToken } from "./redux/slices/authSlice/authSelectors";

import "./App.css";

function App() {
	const token = useAppSelector(selectToken);
	const dispatch = useAppDispatch();

	let content = null;

	useEffect(() => {
		dispatch(getCsrfToken());
	}, [dispatch]);

	if (token) content = <MainModule />;
	else content = <AuthModule />;

	return (
		<div className="App">
			{content}
			{/* <div>loading screen</div> */}
		</div>
	);
}

export default App;
