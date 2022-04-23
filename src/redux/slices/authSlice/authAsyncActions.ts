import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosCreate, { BASE_URL } from "../../../constants/configAxios";
import unConfigAxios from "axios";
// import { RootState } from "../../store";

export const login = createAsyncThunk(
	"login",
	async (form: { cnpj: string; password: string }, thunk) => {
		const body = {
			cnpj: form.cnpj,
			password: form.password,
		};

		try {
			const axios = await axiosCreate();
			const response = await axios.post("login", body);

			return response.data;
		} catch (error: any) {
			return thunk.rejectWithValue(error.response);
		}
	},
);

export const getCsrfToken = createAsyncThunk(
	"getCsrfToken",
	async (_, thunk) => {
		try {
			const response = await unConfigAxios.get(
				BASE_URL + "sanctum/csrf-cookie",
			);

			return response.data;
		} catch (error: any) {
			return thunk.rejectWithValue(error.response);
		}
	},
);
