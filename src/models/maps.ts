import type { Difficulty } from "./difficulty";

export type IslandMap = "Balanced" | "Thematic";

export interface IIslandMap {
	name: IslandMap;
	difficulty: Difficulty;
}

export const ISLAND_MAPS: IIslandMap[] = [
	{
		name: "Balanced",
		difficulty: 0,
	},
	{
		name: "Thematic",
		difficulty: 3,
	},
];