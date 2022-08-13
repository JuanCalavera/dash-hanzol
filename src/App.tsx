import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import AuthModule from "./pages/Auth/AuthModule";
import MainModule from "./pages/MainModule/MainModule";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";

import { getCsrfToken } from "./redux/slices/authSlice/authAsyncActions";
import { selectToken } from "./redux/slices/authSlice/authSelectors";
import { fetchAgencyData } from "./redux/slices/pubRequestSlice/pubRequestAsyncActions";
import { selectLoading } from "./redux/slices/mainSlice/mainSelectors";
import { endLoad, initLoad } from "./redux/slices/mainSlice/mainSlice";
import { fetchPubs } from "./redux/slices/mainSlice/mainAsyncActions";

import "./App.css";

// pages:
import Requests from "./pages/MainModule/Requests/Requests";
import Comments from "./pages/MainModule/Comments/Comments";
import Profile from "./pages/MainModule/Profile/Profile";
import Financial from "./pages/MainModule/Financial/Financial";
import ReceiveContent from "./pages/MainModule/ReceiveContent/ReceiveContent";
import Home from "./pages/MainModule/Home/Home";
import About from "./pages/MainModule/About/About";
import SetCode from "./components/SetCode/SetCode";
import ForgetPass from "./pages/Auth/ForgetPass/ForgetPass";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	// const token = useAppSelector(selectToken);
	// const isLoading = useAppSelector(selectLoading);
	// const dispatch = useAppDispatch();

	let content = null;

	// useEffect(() => {
	// 	const fetchAppData = async () => {
	// 		dispatch(initLoad());
	// 		await dispatch(getCsrfToken()).unwrap();
	// 		await dispatch(fetchAgencyData()).unwrap();
	// 		await dispatch(fetchPubs()).unwrap();
	// 		dispatch(endLoad());
	// 	};

	// 	if (token) fetchAppData();
	// 	else dispatch(endLoad());
	// }, [dispatch, token]);

	// if (isLoading) content = <LoadingScreen />;
	// else if (token) content = <MainModule />;
	// else content = <AuthModule />;
	// <div className="App">{content}</div>;

	content = <SetCode />;

	return <BrowserRouter>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/set-code' element={<SetCode/>}/>
		</Routes>
	</BrowserRouter>
}

export default App;
