import { RootState } from "../../store";

export const selectPubs = (state: RootState) => state.main.pubPieces;
