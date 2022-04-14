interface DrawType {
	id: number;
	title: string;
}

interface PubType {
	id: number;
	title: string;
}

interface BudgetType {
	id: number;
	title: string;
}

export interface PubRequestState {
	form: {
		theme: number | null;
		drawType: number | null;
		exhibitionDescription: string;
		deliver_date: string;
		size: string;
		links: string[];
		files: File[];
		description: string;
		budget_types: number[];
	};
	drawTypes: DrawType[];
	pubTypes: PubType[];
	budgetTypes: BudgetType[];
}
