import axios from "axios";
import cookieCutter from "cookie-cutter";

// export const BASE_URL = "https://dash-api-dev.herokuapp.com/";
export const BASE_URL = "http://localhost:8000/";
export const API_URL = BASE_URL + "api/";

const axiosCreate = async () => {
	const axiosClient = axios.create({
		baseURL: API_URL,
		// withCredentials: true,
	});

	axiosClient.defaults.headers.common[
		"Authorization"
	] = `Bearer ${cookieCutter.get("W_A_T")}`;

	return axiosClient;
};

export default axiosCreate;
