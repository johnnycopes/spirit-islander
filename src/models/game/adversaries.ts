import type { IDifficultyOption } from "./difficulty";
import type { IExpansionOption } from "./expansions";

export type AdversaryName =
	"No Adversary" |
	"Brandenburg-Prussia" |
	"France" |
	"England" |
	"Sweden";

export interface IAdversaryLevel extends IDifficultyOption {
	id: AdversaryLevelId;
	level: AdversaryLevelValue;
};

export type AdversaryLevelValue = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type AdversaryLevelId = "none" |
	"bp-0" | "bp-1" | "bp-2" | "bp-3" | "bp-4" | "bp-5" | "bp-6" |
	"f-0" | "f-1" | "f-2" | "f-3" | "f-4" | "f-5" | "f-6" |
	"e-0" | "e-1" | "e-2" | "e-3" | "e-4" | "e-5" | "e-6" |
	"s-0" | "s-1" | "s-2" | "s-3" | "s-4" | "s-5" | "s-6";

export interface IAdversary extends IExpansionOption {
	name: AdversaryName,
	levels: IAdversaryLevel[];
}

export const ADVERSARIES: IAdversary[] = [
	{
		name: "No Adversary",
		levels: [],
	},
	{
		name: "Brandenburg-Prussia",
		levels: [
			{ id: "bp-0", level: 0, difficulty: 1 },
			{ id: "bp-1", level: 1, difficulty: 2 },
			{ id: "bp-2", level: 2, difficulty: 4 },
			{ id: "bp-3", level: 3, difficulty: 6 },
			{ id: "bp-4", level: 4, difficulty: 7 },
			{ id: "bp-5", level: 5, difficulty: 9 },
			{ id: "bp-6", level: 6, difficulty: 10 },
		],
	},
	{
		name: "France",
		expansion: "Branch & Claw",
		levels: [
			{ id: "f-0", level: 0, difficulty: 2 },
			{ id: "f-1", level: 1, difficulty: 3 },
			{ id: "f-2", level: 2, difficulty: 5 },
			{ id: "f-3", level: 3, difficulty: 7 },
			{ id: "f-4", level: 4, difficulty: 8 },
			{ id: "f-5", level: 5, difficulty: 9 },
			{ id: "f-6", level: 6, difficulty: 10 },
		],
	},
	{
		name: "England",
		levels: [
			{ id: "e-0", level: 0, difficulty: 1 },
			{ id: "e-1", level: 1, difficulty: 3 },
			{ id: "e-2", level: 2, difficulty: 4 },
			{ id: "e-3", level: 3, difficulty: 6 },
			{ id: "e-4", level: 4, difficulty: 7 },
			{ id: "e-5", level: 5, difficulty: 9 },
			{ id: "e-6", level: 6, difficulty: 10 },
		],
	},
	{
		name: "Sweden",
		levels: [
			{ id: "s-0", level: 0, difficulty: 1 },
			{ id: "s-1", level: 1, difficulty: 2 },
			{ id: "s-2", level: 2, difficulty: 3 },
			{ id: "s-3", level: 3, difficulty: 5 },
			{ id: "s-4", level: 4, difficulty: 6 },
			{ id: "s-5", level: 5, difficulty: 7 },
			{ id: "s-6", level: 6, difficulty: 8 },
		],
	},
];