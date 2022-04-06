import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosCreate from "../../../constants/configAxios";
import { RootState } from "../../store";

export const login = createAsyncThunk(
	"login",
	async (form: { cnpj: string; password: string }, thunk) => {
		const body = {
			cnpj: form.cnpj,
			password: form.cnpj,
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
