import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice/authSlice";
import navigationReducer from "./slices/navigationSlice/navigationSlice";
import mainReducer from "./slices/mainSlice/mainSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		navigation: navigationReducer,
		main: mainReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
