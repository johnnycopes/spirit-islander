import type { Difficulty } from "./difficulty";

export type AdversaryName =
	"Kingdom of Brandenburg-Prussia" |
	"Kingdom of England" |
	"Kingdom of Sweden";

export type AdversaryLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface IAdversary {
	name: AdversaryName,
	levels: {
		id: string,
		level: AdversaryLevel,
		difficulty: Difficulty
	}[];
}

export const ADVERSARIES: IAdversary[] = [
	{
		name: "Kingdom of Brandenburg-Prussia",
		levels: [
			{ id: "BP Level 0", level: 0, difficulty: 1 },
			{ id: "BP Level 1", level: 1, difficulty: 2 },
			{ id: "BP Level 2", level: 2, difficulty: 4 },
			{ id: "BP Level 3", level: 3, difficulty: 6 },
			{ id: "BP Level 4", level: 4, difficulty: 7 },
			{ id: "BP Level 5", level: 5, difficulty: 9 },
			{ id: "BP Level 6", level: 6, difficulty: 10 },
		],
	},
	{
		name: "Kingdom of England",
		levels: [
			{ id: "E Level 0", level: 0, difficulty: 1 },
			{ id: "E Level 1", level: 1, difficulty: 3 },
			{ id: "E Level 2", level: 2, difficulty: 4 },
			{ id: "E Level 3", level: 3, difficulty: 6 },
			{ id: "E Level 4", level: 4, difficulty: 7 },
			{ id: "E Level 5", level: 5, difficulty: 9 },
			{ id: "E Level 6", level: 6, difficulty: 10 },
		],
	},
	{
		name: "Kingdom of Sweden",
		levels: [
			{ id: "S Level 0", level: 0, difficulty: 1 },
			{ id: "S Level 1", level: 1, difficulty: 2 },
			{ id: "S Level 2", level: 2, difficulty: 3 },
			{ id: "S Level 3", level: 3, difficulty: 5 },
			{ id: "S Level 4", level: 4, difficulty: 6 },
			{ id: "S Level 5", level: 5, difficulty: 7 },
			{ id: "S Level 6", level: 6, difficulty: 8 },
		],
	},
];