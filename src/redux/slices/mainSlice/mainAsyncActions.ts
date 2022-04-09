import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosCreate from "../../../constants/configAxios";

export const fetchPubs = createAsyncThunk("fetchPubs", async (_, thunk) => {
	try {
		const axios = await axiosCreate();
		const response = await axios.get("pub-pieces");

		return response.data;
	} catch (error: any) {
		return thunk.rejectWithValue(error.response);
	}
});
