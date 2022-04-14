import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosCreate from "../../../constants/configAxios";
// import { RootState } from "../../store";

export const fetchAgencyData = createAsyncThunk(
	"fetchAgencyData",
	async (_, thunk) => {
		try {
			const axios = await axiosCreate();
			const response = await axios.get("agency/pub-request-data");

			return response.data;
		} catch (error: any) {
			return thunk.rejectWithValue(error.response);
		}
	},
);
