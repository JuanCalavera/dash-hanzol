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

export const sendRating = createAsyncThunk(
	"sendRating",
	async (
		data: { pubId: number; isLike: boolean; comment: string },
		thunk,
	) => {
		try {
			const axios = await axiosCreate();
			const response = await axios.post(
				`pub-pieces/${data.pubId}/${data.isLike ? "like" : "dislike"}`,
				{ comment: data.comment },
			);

			return response.data;
		} catch (error: any) {
			return thunk.rejectWithValue(error.response);
		}
	},
);
