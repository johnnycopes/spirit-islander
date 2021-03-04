import type { Difficulty } from "./difficulty";

export type AdversaryName =
	"Kingdom of Brandenburg-Prussia" |
	"Kingdom of England" |
	"Kingdom of Sweden";

export type AdversaryLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface IAdversary {
	id: string;
	name: AdversaryName,
	levels: Record<AdversaryLevel, Difficulty>;
	fakeLevels: { id: string, level: AdversaryLevel, difficulty: Difficulty, fakeLevels?: any[] }[];
}

export const ADVERSARIES: IAdversary[] = [
	{
		id: "BP",
		name: "Kingdom of Brandenburg-Prussia",
		levels: {
			0: 1,
			1: 2,
			2: 4,
			3: 6,
			4: 7,
			5: 9,
			6: 10,
		},
		fakeLevels: [
			{ id: "BP-0", level: 0, difficulty: 1 },
			{ id: "BP-1", level: 1, difficulty: 2 },
			{ id: "BP-2", level: 2, difficulty: 4 },
			{ id: "BP-3", level: 3, difficulty: 6, fakeLevels: [{ id: "hey", level: 4, difficulty: 8}] },
			{ id: "BP-4", level: 4, difficulty: 7 },
			{ id: "BP-5", level: 5, difficulty: 9 },
			{ id: "BP-6", level: 6, difficulty: 10 },
		],
	},
	// {
	// 	name: "Kingdom of England",
	// 	levels: {
	// 		0: 1,
	// 		1: 3,
	// 		2: 4,
	// 		3: 6,
	// 		4: 7,
	// 		5: 9,
	// 		6: 10,
	// 	},
	// 	fakeLevels: [
	// 		{ name: "1" },
	// 		{ name: "2" }
	// 	],
	// },
	// {
	// 	name: "Kingdom of Sweden",
	// 	levels: {
	// 		0: 1,
	// 		1: 2,
	// 		2: 3,
	// 		3: 5,
	// 		4: 6,
	// 		5: 7,
	// 		6: 8,
	// 	},
	// 	fakeLevels: [
	// 		{ name: "1" },
	// 		{ name: "2" }
	// 	],
	// },
];