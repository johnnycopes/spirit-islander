import type { Adversary } from "@models/game/adversaries";

export const ADVERSARIES: Adversary[] = [
	{
		name: "No Adversary",
		levels: [],
	},
	{
		name: "Brandenburg-Prussia",
		levels: [
			{ id: "bp-0", name: "Level 0", difficulty: 1 },
			{ id: "bp-1", name: "Level 1", difficulty: 2 },
			{ id: "bp-2", name: "Level 2", difficulty: 4 },
			{ id: "bp-3", name: "Level 3", difficulty: 6 },
			{ id: "bp-4", name: "Level 4", difficulty: 7 },
			{ id: "bp-5", name: "Level 5", difficulty: 9 },
			{ id: "bp-6", name: "Level 6", difficulty: 10 },
		],
	},
	{
		name: "England",
		levels: [
			{ id: "en-0", name: "Level 0", difficulty: 1 },
			{ id: "en-1", name: "Level 1", difficulty: 3 },
			{ id: "en-2", name: "Level 2", difficulty: 4 },
			{ id: "en-3", name: "Level 3", difficulty: 6 },
			{ id: "en-4", name: "Level 4", difficulty: 7 },
			{ id: "en-5", name: "Level 5", difficulty: 9 },
			{ id: "en-6", name: "Level 6", difficulty: 11 },
		],
	},
	{
		name: "France",
		expansion: "Branch & Claw",
		levels: [
			{ id: "fr-0", name: "Level 0", difficulty: 2 },
			{ id: "fr-1", name: "Level 1", difficulty: 3 },
			{ id: "fr-2", name: "Level 2", difficulty: 5 },
			{ id: "fr-3", name: "Level 3", difficulty: 7 },
			{ id: "fr-4", name: "Level 4", difficulty: 8 },
			{ id: "fr-5", name: "Level 5", difficulty: 9 },
			{ id: "fr-6", name: "Level 6", difficulty: 10 },
		],
	},
	{
		name: "Habsburg Monarchy",
		expansion: "Jagged Earth",
		levels: [
			{ id: "hm-0", name: "Level 0", difficulty: 2 },
			{ id: "hm-1", name: "Level 1", difficulty: 3 },
			{ id: "hm-2", name: "Level 2", difficulty: 5 },
			{ id: "hm-3", name: "Level 3", difficulty: 6 },
			{ id: "hm-4", name: "Level 4", difficulty: 8 },
			{ id: "hm-5", name: "Level 5", difficulty: 9 },
			{ id: "hm-6", name: "Level 6", difficulty: 10 },
		],
	},
	{
		name: "Russia",
		expansion: "Jagged Earth",
		levels: [
			{ id: "ru-0", name: "Level 0", difficulty: 1 },
			{ id: "ru-1", name: "Level 1", difficulty: 3 },
			{ id: "ru-2", name: "Level 2", difficulty: 4 },
			{ id: "ru-3", name: "Level 3", difficulty: 6 },
			{ id: "ru-4", name: "Level 4", difficulty: 7 },
			{ id: "ru-5", name: "Level 5", difficulty: 9 },
			{ id: "ru-6", name: "Level 6", difficulty: 11 },
		],
	},
	{
		name: "Scotland",
		expansion: "Promo Pack 2",
		levels: [
			{ id: "sc-0", name: "Level 0", difficulty: 1 },
			{ id: "sc-1", name: "Level 1", difficulty: 3 },
			{ id: "sc-2", name: "Level 2", difficulty: 4 },
			{ id: "sc-3", name: "Level 3", difficulty: 6 },
			{ id: "sc-4", name: "Level 4", difficulty: 7 },
			{ id: "sc-5", name: "Level 5", difficulty: 8 },
			{ id: "sc-6", name: "Level 6", difficulty: 10 },
		],
	},
	{
		name: "Sweden",
		levels: [
			{ id: "sw-0", name: "Level 0", difficulty: 1 },
			{ id: "sw-1", name: "Level 1", difficulty: 2 },
			{ id: "sw-2", name: "Level 2", difficulty: 3 },
			{ id: "sw-3", name: "Level 3", difficulty: 5 },
			{ id: "sw-4", name: "Level 4", difficulty: 6 },
			{ id: "sw-5", name: "Level 5", difficulty: 7 },
			{ id: "sw-6", name: "Level 6", difficulty: 8 },
		],
	},
	{
		name: "Habsburg Mining Expedition",
		expansion: "Nature Incarnate",
		levels: [
			{ id: "hme-0", name: "Level 0", difficulty: 1 },
			{ id: "hme-1", name: "Level 1", difficulty: 3 },
			{ id: "hme-2", name: "Level 2", difficulty: 4 },
			{ id: "hme-3", name: "Level 3", difficulty: 5 },
			{ id: "hme-4", name: "Level 4", difficulty: 7 },
			{ id: "hme-5", name: "Level 5", difficulty: 9 },
			{ id: "hme-6", name: "Level 6", difficulty: 10 },
		],
	},
];