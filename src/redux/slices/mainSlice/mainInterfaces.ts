export interface MainState {
	pubPieces: PubPiece[];
}

export interface PubPiece {
	was_liked: boolean;
	title: boolean;
	description: boolean;
	file_url: string;
	file_type: string;
}
