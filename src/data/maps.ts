import type { IMap } from "@models/game/maps";

export const MAPS: IMap[] = [
	{
		name: "Balanced",
		difficulty: 0,
	},
	{
		name: "Thematic",
		difficulty: (config) => config.expansions.includes("Branch & Claw") ? 1 : 3,
	},
];