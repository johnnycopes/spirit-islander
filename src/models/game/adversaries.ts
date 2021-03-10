import type { IDifficultyOption } from "./difficulty";
import type { IExpansionOption } from "./expansions";

export type AdversaryName =
	"No Adversary" |
	"Brandenburg-Prussia" |
	"France" |
	"England" |
	"Habsburg Monarchy" |
	"Russia" |
	"Scotland" |
	"Sweden";

export interface IAdversaryLevel extends IDifficultyOption {
	id: AdversaryLevelId;
	level: AdversaryLevelValue;
};

export type AdversaryLevelValue = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type AdversaryLevelId = "none" |
	"bp-0" | "bp-1" | "bp-2" | "bp-3" | "bp-4" | "bp-5" | "bp-6" |
	"en-0" | "en-1" | "en-2" | "en-3" | "en-4" | "en-5" | "en-6" |
	"fr-0" | "fr-1" | "fr-2" | "fr-3" | "fr-4" | "fr-5" | "fr-6" |
	"hm-0" | "hm-1" | "hm-2" | "hm-3" | "hm-4" | "hm-5" | "hm-6" |
	"ru-0" | "ru-1" | "ru-2" | "ru-3" | "ru-4" | "ru-5" | "ru-6" |
	"sc-0" | "sc-1" | "sc-2" | "sc-3" | "sc-4" | "sc-5" | "sc-6" |
	"sw-0" | "sw-1" | "sw-2" | "sw-3" | "sw-4" | "sw-5" | "sw-6";

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
		name: "England",
		levels: [
			{ id: "en-0", level: 0, difficulty: 1 },
			{ id: "en-1", level: 1, difficulty: 3 },
			{ id: "en-2", level: 2, difficulty: 4 },
			{ id: "en-3", level: 3, difficulty: 6 },
			{ id: "en-4", level: 4, difficulty: 7 },
			{ id: "en-5", level: 5, difficulty: 9 },
			{ id: "en-6", level: 6, difficulty: 11 },
		],
	},
	{
		name: "France",
		expansion: "Branch & Claw",
		levels: [
			{ id: "fr-0", level: 0, difficulty: 2 },
			{ id: "fr-1", level: 1, difficulty: 3 },
			{ id: "fr-2", level: 2, difficulty: 5 },
			{ id: "fr-3", level: 3, difficulty: 7 },
			{ id: "fr-4", level: 4, difficulty: 8 },
			{ id: "fr-5", level: 5, difficulty: 9 },
			{ id: "fr-6", level: 6, difficulty: 10 },
		],
	},
	{
		name: "Habsburg Monarchy",
		expansion: "Jagged Earth",
		levels: [
			{ id: "hm-0", level: 0, difficulty: 2 },
			{ id: "hm-1", level: 1, difficulty: 3 },
			{ id: "hm-2", level: 2, difficulty: 5 },
			{ id: "hm-3", level: 3, difficulty: 6 },
			{ id: "hm-4", level: 4, difficulty: 8 },
			{ id: "hm-5", level: 5, difficulty: 9 },
			{ id: "hm-6", level: 6, difficulty: 10 },
		],
	},
	{
		name: "Russia",
		expansion: "Jagged Earth",
		levels: [
			{ id: "ru-0", level: 0, difficulty: 1 },
			{ id: "ru-1", level: 1, difficulty: 3 },
			{ id: "ru-2", level: 2, difficulty: 4 },
			{ id: "ru-3", level: 3, difficulty: 6 },
			{ id: "ru-4", level: 4, difficulty: 7 },
			{ id: "ru-5", level: 5, difficulty: 9 },
			{ id: "ru-6", level: 6, difficulty: 11 },
		],
	},
	{
		name: "Scotland",
		expansion: "Jagged Earth",
		levels: [
			{ id: "sc-0", level: 0, difficulty: 1 },
			{ id: "sc-1", level: 1, difficulty: 3 },
			{ id: "sc-2", level: 2, difficulty: 4 },
			{ id: "sc-3", level: 3, difficulty: 6 },
			{ id: "sc-4", level: 4, difficulty: 7 },
			{ id: "sc-5", level: 5, difficulty: 8 },
			{ id: "sc-6", level: 6, difficulty: 10 },
		],
	},
	{
		name: "Sweden",
		levels: [
			{ id: "sw-0", level: 0, difficulty: 1 },
			{ id: "sw-1", level: 1, difficulty: 2 },
			{ id: "sw-2", level: 2, difficulty: 3 },
			{ id: "sw-3", level: 3, difficulty: 5 },
			{ id: "sw-4", level: 4, difficulty: 6 },
			{ id: "sw-5", level: 5, difficulty: 7 },
			{ id: "sw-6", level: 6, difficulty: 8 },
		],
	},
];