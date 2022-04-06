import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosCreate from "../../../constants/configAxios";
import { RootState } from "../../store";

export const login = createAsyncThunk("login", async (_, thunk) => {
	const state = thunk.getState() as RootState;
	const body = {
		// email: state.auth.login.email,
		// password: state.auth.login.password,
	};

	try {
		const axios = await axiosCreate();
		const response = await axios.post("users/login", body);

		// axios.defaults.headers.common[
		// 	"Authorization"
		// ] = `Bearer ${response.data.access_token}`;

		return response.data;
	} catch (error: any) {
		return thunk.rejectWithValue(error.response);
	}
});
