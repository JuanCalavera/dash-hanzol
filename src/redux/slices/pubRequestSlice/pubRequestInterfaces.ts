interface PubSubType {
	id: number;
	title: string;
}

interface PubType {
	id: number;
	title: string;
	question: string;
	sub_types: PubSubType[];
}

interface BudgetType {
	id: number;
	title: string;
}

interface Link {
	id: number;
	title: string;
}

export interface requestForm {
	pubType: PubType | null;
	pubSubType: PubSubType | null;
	exhibitionDescription: string;
	deliver_date: string;
	size: string;
	links: Link[];
	files: File[];
	description: string;
	budget_types: number[];
	[key: string]:
		| string
		| PubType
		| File[]
		| string[]
		| number[]
		| PubType
		| PubSubType
		| Link[]
		| null;
}

export interface PubRequestState {
	form: requestForm;
	pubTypes: PubType[];
	budgetTypes: BudgetType[];
}
