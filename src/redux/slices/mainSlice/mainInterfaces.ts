export interface MainState {
	pubPieces: PubPiece[];
	currentPubPiece: PubPiece | null;
}

export interface PubPiece {
	was_liked: boolean;
	title: string;
	description: string;
	file_url: string;
	file_type: string;
	id: number;
	created: string;
}
