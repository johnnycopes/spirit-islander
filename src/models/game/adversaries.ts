import type { Difficulty } from "./difficulty";

export type AdversaryName =
	"Kingdom of Brandenburg-Prussia" |
	"Kingdom of England" |
	"Kingdom of Sweden";

export type AdversaryLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface IAdversary {
	name: AdversaryName,
	levels: Record<AdversaryLevel, Difficulty>;
}

export const ADVERSARIES: IAdversary[] = [
	{
		name: "Kingdom of Brandenburg-Prussia",
		levels: {
			0: 1,
			1: 2,
			2: 4,
			3: 6,
			4: 7,
			5: 9,
			6: 10,
		}
	},
	{
		name: "Kingdom of England",
		levels: {
			0: 1,
			1: 3,
			2: 4,
			3: 6,
			4: 7,
			5: 9,
			6: 10,
		},
	},
	{
		name: "Kingdom of Sweden",
		levels: {
			0: 1,
			1: 2,
			2: 3,
			3: 5,
			4: 6,
			5: 7,
			6: 8,
		},
	},
];