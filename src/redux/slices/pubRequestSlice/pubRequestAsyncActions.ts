import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosCreate from "../../../constants/configAxios";
import { RootState } from "../../store";
import { requestForm } from "./pubRequestInterfaces";

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

export const sendPubRequest = createAsyncThunk(
	"sendPubRequest",
	async (_, thunk) => {
		try {
			const state = thunk.getState() as RootState;
			const formObj = state.pubRequest.form;
			const form = createPubRequestForm(formObj);

			const axios = await axiosCreate();
			const response = await axios.post("pub-pieces/make-request", form);

			return response.data;
		} catch (error: any) {
			return thunk.rejectWithValue(error.response);
		}
	},
);

const createPubRequestForm = (data: requestForm) => {
	const form = new FormData();
	form.append("pub_type_id", data.pubType!.id.toString());
	form.append("pub_sub_type_id", data.pubSubType!.id.toString());
	form.append("exhibition_description", data.exhibitionDescription);
	form.append("deliver_date", data.deliver_date);
	form.append("size", data.size);
	form.append("budget_types_ids", JSON.stringify(data.budget_types));
	form.append("description", data.description);
	data.files.forEach((file) => form.append("reference_files[]", file));
	const links = data.links.map((link) => link.title);
	form.append("reference_links", JSON.stringify(links));

	return form;
};
