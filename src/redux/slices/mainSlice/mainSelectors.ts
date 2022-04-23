import { RootState } from "../../store";

export const selectPubs = (state: RootState) => state.main.pubPieces;
export const selectCurrentPub = (state: RootState) =>
	state.main.currentPubPiece;
export const selectLoading = (state: RootState) => state.main.isAppLoading;
