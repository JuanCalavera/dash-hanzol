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
import SetCode from "./pages/Auth/ForgetPassword/SetCode/SetCode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Auth/ForgetPassword/Start/Start";
import SetMail from "./pages/Auth/ForgetPassword/SetMail/SetMail";
import Projects from "./pages/MainModule/Projects/Projects";
import Budgets from "./pages/MainModule/Budgets/Budgets";
import Login from "./pages/Auth/Login/Login";
import CreateNewRequest from "./pages/MainModule/CreateNewRequest/CreateNewRequest";
import Choose from "./pages/MainModule/Choose/Choose";
import LoginUser from "./pages/MainModule/LoginUser/LoginUser";
import AddFilesRequest from "./pages/MainModule/AddFilesRequest/AddFilesRequest";
import SingleRequest from "./pages/MainModule/SingleRequest/SingleRequest";
import Users from "./pages/MainModule/Users/Users";
import AddClient from "./pages/MainModule/AddClient/AddClient";
import ClientRegister from "./pages/Auth/ClientRegister/ClientRegister";
import CommentRegister from "./pages/MainModule/CommentRegister/CommentRegister";
import AdminPage from "./pages/MainModule/AdminPage/AdminPage";

function App() {

	let content = null;

	return <BrowserRouter>
		<Routes>
			<Route path='/' element={<LoadingScreen />} />
			<Route path='/choose' element={<Choose />} />
			<Route path='/login' element={<Login />} />
			<Route path='/login-user' element={<LoginUser />} />
			<Route path='/home' element={<Home />} />
			<Route path="/minhas-solicitacoes" element={<Requests />} />
			<Route path="/minhas-solicitacoes/:id" element={<SingleRequest />} />
			<Route path="/criar-solicitacoes" element={<CreateNewRequest />} />
			<Route path="/criar-solicitacoes/:id" element={<AddFilesRequest />} />
			<Route path="/criar-cliente/" element={<AddClient />} />
			<Route path="/criar-cliente/:cnpj" element={<ClientRegister/>} />
			<Route path="/criar-comentario/:pub" element={<CommentRegister/>} />
			<Route path="/comentarios/:pub" element={<Comments />} />
			<Route path="/perfil" element={<Profile />} />
			<Route path="/financeiro" element={<Financial />} />
			<Route path="/conteudo-recebido" element={<ReceiveContent />} />
			<Route path="/sobre" element={<About />} />
			<Route path="/esqueci-a-senha" element={<Start/>} />
			<Route path="/esqueci-a-senha-email" element={<SetMail/>} />
			<Route path="/esqueci-a-senha-codigo" element={<SetCode/>} />
			<Route path="/meus-projetos" element={<Projects/>} />
			<Route path="/usuarios" element={<Users/>} />
			<Route path="/admin-page" element={<AdminPage/>} />
			{/* <Route path="/orcamentos-recebidos" element={<Budgets/>} /> */}
			{/* <Route path="/registro-usuario/:num" element={<UserRegister/>} /> */}
		</Routes>
	</BrowserRouter>
}

export default App;
