import type { IAdversary } from "@models/game/adversaries";

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