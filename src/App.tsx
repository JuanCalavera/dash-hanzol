import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import AuthModule from "./pages/Auth/AuthModule";
import MainModule from "./pages/MainModule/MainModule";

import { getCsrfToken } from "./redux/slices/authSlice/authAsyncActions";
import { selectToken } from "./redux/slices/authSlice/authSelectors";
import { fetchAgencyData } from "./redux/slices/pubRequestSlice/pubRequestAsyncActions";
import { selectLoading } from "./redux/slices/mainSlice/mainSelectors";
import { endLoad, initLoad } from "./redux/slices/mainSlice/mainSlice";
import { fetchPubs } from "./redux/slices/mainSlice/mainAsyncActions";

import "./App.css";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";

function App() {
	const token = useAppSelector(selectToken);
	const isLoading = useAppSelector(selectLoading);
	const dispatch = useAppDispatch();

	let content = null;

	useEffect(() => {
		const fetchAppData = async () => {
			dispatch(initLoad());
			await dispatch(getCsrfToken()).unwrap();
			await dispatch(fetchAgencyData()).unwrap();
			await dispatch(fetchPubs()).unwrap();
			dispatch(endLoad());
		};

		fetchAppData();
	}, [dispatch]);

	if (isLoading) content = <LoadingScreen />;
	else if (token) content = <MainModule />;
	else content = <AuthModule />;

	return <div className="App">{content}</div>;
}

export default App;
